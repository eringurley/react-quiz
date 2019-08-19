import React, { Component } from 'react';

export default class NameTag extends Component {
  state = {
    text: '',
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.parseText();
    });
  }
  
  render() {
    const { text } = this.state;

    return (
      <>
        <form>
          <input placeholder="Type Here" name="text" value={text} onChange={this.handleChange}></input>
        </form>
      </>
    );
  }
}
