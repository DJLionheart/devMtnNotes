import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';



// PropTypes checks the properties you're passing into a component, to check their types.

const Test = (props) => {
  return(
      <div>
        <h1>{ props.str }</h1>
        <h1>{ (props.bool ? 'bool' : 'no bool') }</h1>
        <h1>{ props.strOrNum }</h1>
        <div>
          {
            props.arr.map( val => {
              return(<li key={ val }>{val}</li>)
            })
          }
        </div>
        <div>
          {
            props.arrOfObj.map( val => {
              return(<li key={ val.age }>{val.name}</li>)
            })
          }
        </div>
        <h1>{props.children}</h1>
      </div>
  )
}

Test.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool,
  strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arr: PropTypes.arrayOf(PropTypes.number),
  arrOfObj: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string,
      age: PropTypes.number
    } 
  )),
  children: PropTypes.element.isRequired
}


class Button extends Component {
  render() {
    const { type, children } = this.props;
    const styleChoice = styles[type ? type : 'default']
    return(<button style={Object.assign({}, btnBase, styleChoice)}>{children}</button>)
  }
}

Button.propTypes = {
  type: PropTypes.string
}

let btnBase = {
  borderRadius: 5,
  padding: 8
}

let primaryStyle = {
  backgroundColor: '#188fff',
  color: 'white'
}
// On hover: '#46AAFF'

let dangerStyle = {
  backgroundColor: '#f5f5f5',
  borderColor: 'lightGray',
  color: '#f5242e'
}

let dashedStyle = {
  borderWidth: 1,
  borderStyle: 'dashed',
  borderColor: 'lightGray'
}

let defaultStyle = {
  borderWidth: 1,
  borderColor: 'lightGray'
}

let styles = {
  default: defaultStyle,
  primary: primaryStyle,
  dashed: dashedStyle,
  danger: dangerStyle
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Test 
          str={ 'djlpauldx' }
          bool
          strOrNum={ 10 }
          arr={[1, 2, 3]}
          arrOfObj={[{name: 'John', age: 22}, {name: 'Peter', age: 16}]}
        ></Test>
        <hr/>
        <div className="btn-showcase">
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button>Default</Button>
        </div>
      </div>
    );
  }
}

export default App;
