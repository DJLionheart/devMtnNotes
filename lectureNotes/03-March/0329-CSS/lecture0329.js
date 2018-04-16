/////////////////// Lecture 29 March - CSS Position and Layout Notes ///////////////////////////

//Height 100% won't work unless the body and html have a height 100%

//FOR CIRCLES: border-radius: try %



// Pseudo-selector: .circle:nth-child(1) - the first child after the parent element
//Top, left, right, and bottom will tell you where to position itself on the screen.
//These words push away from the side you type.

//If a child has position absolute, it will check above it for the first parent that has position relative.

///////////////////////////////////
//Why to use position: absolute;//
//
//Sometimes you'll have a feature that needs to break outside the box and sit somewhere else.
//Anytime you're animating something, if you use position: absolute, it will go smoother.
//There's just a lot of maintenance with position absolute. You'll modify the positions alot more than with position: relative;


//position: fixed;
//The ultimate rebel child. The element will not move.


///////////////
//BY DEFAULT//
/////////////
//  ALL elements will have position: static.
/////////////
//  If you want things to stay in a container, you have to use position: relative.
///////////


// We're using padding to grow the header.

// With flex, you're usually just dealing with the parent, and the children will follow suit.
// With inline-block, you have to adjust the children too.

// If you set a width on a child, flex will override the width and shrink everything together.

// When an image hangs over, you can remove the height of the container, and it will allow the
// container to grow as the content grows.


//  Layout: how things line up on the page...
//  You can have nested flex, and different flex direction.
//  Main container has flex, and flex-wrap, but in the product, we want flex-direction to be column.

// flex-grow: (I want you to grow up to this much, then stop)
// flex-grow: 1 (or 2 - twice as much)



//When you are looking for a job, a good portfolio is super important.
// Don't even bother with something you can't put in your portfolio when you're a student.

// Awesome portfolio is the loophole...

//Front-End Advice:
//Everything you see, client-facing.
//Animating, everything.

//Back-End:
//

// PORTFOLIO ADVICE //
// Spend your time refining your projects.
// Check out awwwards for inspiration.

/*
li::hover {
    flex-grow: 2;
}
*/

//Flex grow can be used for animation, but also for responsiveness as you shrink and grow the page.

//It's harder to design in the console/code first... Usually sketch something out first. Not super-high fidelity, just basic.

//MVP - Minimum Viable Product
//The bare minimum to make my project work:


//Things will take 5 times longer than expected.
//You will run out of time. Decide first what needs to happen.
//Get that done first, and then work on all the other cool stuff.