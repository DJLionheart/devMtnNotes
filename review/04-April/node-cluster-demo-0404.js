// Include the cluster/os modules
// OS will allow us to get the number of CPU's
// Cluster will allow us to take each CPU and run an event on that

const cluster = require('cluster')
const os = require('os')

// Code to run if we're in the master process
// Will only eval to true first time through
if (cluster.isMaster) {

  // Get number of CPU's
  const cpuCount = os.cpus().length

  // Create a cluster for each CPU
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork()
  }

  // Cluster dies? Forget it, we don't need em'
  cluster.on('exit', (worker) => {
    console.log(`Cluster ${worker.id} died 💀`)
    // create new cluster in its place
    cluster.fork()
  })

  // Code to run if we're in a worker process
} else {

  const express = require('express')
  const app = express()

  app.get('/', (req, res) => {
    // 👇 this is optional and is only used to mock a cpu intensive process. Use it when you run your siege
    for (let i = 0; i < 1e7; i++);
    res.send(`Howdy from 🤠 ${cluster.worker.id}`)
  })


  const port = 3333
  app.listen(port, () => console.log(`Magic is happening on cluster ${cluster.worker.id} ${process.pid} 😘`))
}

// TO INSTALL SIEGE
// 1. Navigate in your terminal to where you would like the download to live
// 2. Run `curl -O http://download.joedog.org/siege/siege-3.1.4.tar.gz` (Mac) or `wget http://download.joedog.org/siege/siege-3.1.4.tar.gz` (Linux)
// 3. Extract the download `tar -xvf siege-3.1.4.tar.gz`
// 4. Change to the newly create siege directory `cd siege-3.1.4`
// 5. Build `./configure
//           make
//           make install`
// Verify install. Run `siege -V` and it should output `SIEGE 3.1.4`

// TO RUN SIEGE
// 1. Navigate to your server
// 2. Run `siege -cNUM-BETWEEN-0-AND-255 -tTIME-OF-SIEGE http://localhost:3000/`
// 3. This will run your siege and then output the stats