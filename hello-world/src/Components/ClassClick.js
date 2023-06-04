import React, { Component } from 'react'

export class ClassClick extends Component {

    classClic()
    {
        console.log('class click')
    }
  render() {

    return (
      <div>
        <button onClick={this.classClic}>Click class</button>
      </div>
    )
  }
}

export default ClassClick
