// LECTURE 3 April 2018

// Lazy loading: you only get the info you need first. It'll just load as you go. (instead of loading up front)


// SPA - will load 'slower' initially if the page is large and has a lot of data.
// It loads EVERYTHING up front... But once it's up and loaded the first time, it's HIGHLY reactive and fast.

// How Router works: 
// It recognizes the changes in javascript... It will be watching the URL and changes the content based on what's there.


// When using routing, below App we can set up our router.

// If you use HashRouter as your root component, some things in React may break.

// Index.js file has ONE responsibility: take our top-level component (which renders all others)
// and mount it to the DOM.


// You can only use routing, navigation, etc within the HashRouter

// HashRouter is THE hub.
// Switch only ensures that one page is occuring at a time.


// Router waits for the Hash.
// When the URL shows '/#/' we want it to list our FirstRoute component

// Route that has "/" as the path will be the default page displayed.


// Hash Router can only have one child... Wrap everything in a div.

// IF we wanted to, we could route DIV within DIV... As long as it's between the primary div.

// Slash will always match every other route. Solve this by adding an exact frop on the / route.
// I will only display the route if it matches everything.

// 'Props' is an object - unordered...

// Aliasing import { HashRouter as Router }

// <Route exact path='/' render={ () => <FirstRoute myName='joe' /> } /> === The same as the basic way to insert
// a component, but now you can add props to the Component.


// By using the Switch component, we don't have to use the exact prop, because it will only show one route at a time.

// When using Switch, pay attention to order. It will search from top to bottom, and only display one item at a time.
// If you use exact on the top component, it will be as if you put the '/' path at the bottom.



// Use the Link component to navigate.



// Any component nested within HashRouter has access to the others.


// Link components will be converted to <a> tags.


// as an alternate to HashRouter ----
// Some people use Browser Router, it gets rid of the Hash.
// BUT you have to configure your server on the back-end.

// Passing Data between routes takes a few additional steps.

// Monday - we will learn the Library Redux.
// Redux is like an object that sits at the top of your routes. You can pass Data up to the redux object
// and retrieve data from there.


// NavBar -------------------- create a Nav
/*

<HashRouter>
    <div>
        <Nav />
        <Switch>
            <Route ...../>
            <Route ...../>
        </Switch>
    </div>

*/

//This makes it so the navBar is displayed on every component you're routing between.


//    ////////////////              \\\\\\\\\\\\\\\\\
// ///////////////// URL Parameters \\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\

// using /results/:color means the program is expecting SOMETHING. It's expecting a color parameter.
// :color is a placeholder

// console log props when taking in a parameter... Shows the props object. It shows the path, history (routes you've been to)
// also have access to match object: which gives us params: {color: 'blue'}


// 1. Go to app.js and tell the route it's expecting a parameter
// 2. props.match.params.{name} comes from the route path on App.js


//Sometimes, you will set up routes in a separate file, just to keep App.js a little smaller and cleaner.