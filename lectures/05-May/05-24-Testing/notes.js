/*

Unit Testing
--------------------------------------------------------------------------------------------------

Group Project Requirements:

5 Unit Tests & 5 Additional Tests per person

(Endpoint, Functional, Etc)



Test units of code to verify it's doing what it's supposed to.

Given a specific input, we should expect a specific output.

No matter how many times I combine the same ingredients, if I follow the same input, I will get the same output.


2 Methods:

1. Write code and then test it.

2. Write a test, and then code.
---------When I write the function, it should do this: .....


Test-Driven Development - TDD

1. Write a test.
2. Run a test (fails because there's no code)
3. Write enough code to make it pass.
4. Code passes test.
5. Refactor (Workable code, but how to improve it?) (As needed to improve)
6. Clean the code

We're developing with other humans.
Someone else on my team goes in and adds a feature... Did it break? The original test developed specifications for what the code has to do.

Behavior-Driven Development(?)


JEST 
---------------------------
JavaScript Testing Library (JavaScript, React Apps, React Native Apps, other JavaScript Frameworks)

Jest is an assertion library. If you can learn/understand Jest, you can understand other 
assertion libraries 


Start Writing Tests:
Stress tests for the wings of an airplane. They're supposed to withstand a specific level of turbulance. A test intended to fail, but it tells engineers how much pressure the wings can take
before they snap off.

Server - Load Testing (You can send fake traffic to your server to see how many requests it can take before it explodes.)


Jest will look for any files with .test.js or files in the __test__ folder

Test global
2 Arguments:
1. A string naming the test
2. A callback function to be run.

test('my jest test', () => {
    expect(2).toEqual(2)
})

----- This is basically all it takes


expect().toBe()

expect().toEqual()
Testing for equality

These compare one value to another.


.toBe() -> the same as strict equality ===

.toEqual() -> recursive (will recursively check the contents of arrays and objects to check if they are equal)

.toBeCloseTo() - "close enough..."


.toMatch()

or .not.toMatch()

.toContain()


toBe, toEqual, toBeTruthy, toBeFalsy, toContain
Are the methods we'll probably use the most.

test.only() will let you skip all other test

test.skip() will skip the test


Testing JavaScript Classes:
------------------------------------------------------------------------------------------
Common pattern in writing test: 1. Arrange, 2. Act, and 3. Assert
    
    Arrange - setting up what we need for the test.
    Act - Grab the result from actually doing something
    Assert - Make the assertion




TESTING BEST PRACTICES:
------------------------------------------------------------------------------------------

Avoid test interdependence. Make sure EACH test is independent. No variables should be shared between tests. It is not good practice to have tests rely on other tests.

Black box of code - everything is contained within

White box of code - lots of environmental things could be interacting with the test.


beforeEach( () => {
    return initializeCityDatabase();
})

Would run before each test

afterEach( () => {
    return clearCityDatabase();
})

Would run after all the tests run 


Keep your tests simple and easy to read.

You don't want to have to refactor MASSIVE tests... Refactoring smaller tests is much simpler.

If you need to run an asynchronous test, return a promise (that's the easiest way)

Async and await is also a good way.


Mocking
----------------------------------------------------------------------------------------
If you don't want to rely on an actual HTTP request, you can mock the request.
Axios Mock Adapter




Testing in React---

Create a utils folder, and a __tests__ folder. Add the functions you want to test to a module.exports object in a functions.js file, then in your component, you can change the this.functionName to functions.functionName from the export by importing it to the Component.

We will take one function and write 5 tests for it.

Test something long, test something short, also test where things should pass, or should fail.


During group projects: if you can't find code to test, ask a mentor or Joe directly, and they'll help find the code.
*/