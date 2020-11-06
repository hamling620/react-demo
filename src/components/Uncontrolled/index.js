import React, { Component, createRef } from 'react'

class Uncontrolled extends Component {
  constructor () {
    super()
    this.input = createRef()
    this.fileInput = createRef()
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>Name: <input type="text" ref={ this.input } defaultValue="hamling" /></label>
        <br />
        <label>Upload: <input type="file" ref={ this.fileInput } /></label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.input.current.value)
    console.log(this.fileInput.current.files[0])
  }
}

export default Uncontrolled
