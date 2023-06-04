import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    }
    ClickHandler()
      {
        this.setState({
            message:'GoodBye'
        })
      }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.ClickHandler.bind(this)}>Click Me</button>
      </div>
    )
  }
}

export default EventBind
