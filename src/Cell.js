import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      value: props.value
    }
  }

  changeColor = () => {
    this.setState({
      value: '#333'
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.value}} onClick={this.changeColor}></div>
    )
  }
}
