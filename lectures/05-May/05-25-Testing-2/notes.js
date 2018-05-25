/*
Endpoint Testing

*/

pm.test("All 20 students in response", () => {
    // arrange
    let res = pm.response.json();
    // act 
    let result = res.length;
    // assert
    pm.expect(result).to.eql(20);
})



// Get 

pm.test("Patsy student object in response", () => {
    // arrange 
    let patsy = {
        id: 9,
        student: "Patsy Daunay",
        email_address: "pdaunay8@about.com",
        phone: "(806) 2654555",
        current_grade: "A"
    }
    
    let res = pm.response.json();
    // act / assert
    pm.expect(res).to.eql(patsy)
    
})


// Put

/*

Golden Path: if everything worked perfectly, this is how your app would work.

Outlier scenarios... Think about what would happen if something went wrong.


Cypress Testing - 

Chaining commands on a get request will only run the test for the parent command



*/