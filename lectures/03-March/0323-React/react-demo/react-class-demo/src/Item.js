import React, {Component} from 'react';

//Only use Component in Class components. And this will be functional.

// a functional component doesn't have state, the constructor method or the render method... it just returns JSX. You still need to import React above though

class Item extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.save}>Add Item</button>
            </div>
        )
    }
}

/*function Item(props) {
    return (
      <div>
        <h1>TO DO:</h1>
        <h2>{ props.string }</h2>
      </div>
    )
  }
  // it also still needs to be exported
*/

export default Item;
