import React, { Component } from 'react'

class AppClass extends Component {
  state ={
    count: 0
  }

incrementCount = () => {
  this.setState(prevState => ({
    count: prevState.count + 1
  }));
}

  render() {
    return (
      <>
      <h2>Counter</h2>
      <button onClick={this.incrementCount}> 
      I was clicked {this.state.count} times
      </button>
      <h2>Toogle Light</h2>
      <div style={{
        height: "50px",
        width: "50px",
        background: "grey",
      }}>

      </div>
      </>
    )
  }
}

export default AppClass

