// JavaScript Review 4 April 2018

//Toy Problem

// Over a few toy problems we will be building out a class that constructs a cart object and also includes a few methods to manipulate the data, things like adding to the cart and calculating the total.
// To start you will want to make a class called Cart that includes a constructor function. Have the constructor function take in a single parameter that will be the items in the cart. Set that value equal to a value called this.cart
// Second we will want to create a method that will take in an id and then remove the item from the cart with the matching id
//Test your class by creating a your own Cart object and invoking your method that removes an item. 
// You will want to save this because we will be adding to it in the future.

let testItems = [{
    id: 1,
    product: 'Bob Ross/Thomas Kinkade Paint Kit',
    price: 45.99,
    quantity: 2
  }, {
    id: 2,
    product: 'Paint Palette',
    price: 7.99,
    quantity: 3
  }, {
    id: 3,
    product: 'Paint Thinner',
    price: 15.99,
    quantity: 2
  }];
  
  
  class Cart {
    constructor ( items ) {
      this.cart = items;
    }
    
    remove( id ) {
      this.cart.forEach( (val, i) => {
        if( val.id === id){
          this.cart.splice(i, 1);
        }
      });
      return this.cart;
    }
    
  /*  remove( id ) {
        for(let i = 0; i < this.cart.length; i++ ){
        if( id === this.cart[i].id ){
          this.cart.splice(i,1);
        }  
      }
      return this.cart;
    }  
  */
  }
  
  
  paulsCart = new Cart(testItems);
  
  
  paulsCart.remove(3);
  
  

let obj = {
    name: 'Paul',
    age: 28
}

let obj2 = obj;
// This doesn't create a new object copy... It just references the same data location as obj.

let obj3 = Object.assign( {}, obj1 )

// This will make a brand new data location, so if I change obj1, obj3 will not follow.
// I can also add additional objects after obj1 (separated by commas) to mash pieces together or even override
// what was on obj1.

//Planning App:

// Think about what the views will be first.
// Then dissect those views into functional things.
// Then start thinking about the components.  

// Main App will do routing.

// Same Header for each page? (Universal Header - 1 separate component)
// Or different header on each page? (reusable subcomponent for each page)

// If user.role === admin, show: (..............)
// If user.role === endUser, show: (..................)



