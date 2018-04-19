CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    display_name TEXT,
    img TEXT,
    auth_id TEXT
)


   --ANYTIME YOU'RE SEEKING USER INPUT, USE VARCHAR AND VALIDATE IT'S NOT BEYOND A CERTAIN LENGTH
   --Using text for the purposes of this example.