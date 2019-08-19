import React, { Component } from 'react';
import PropType from 'prop-types';

export default class NameTag extends Component {
  static propTypes = {
    maxChar: PropType.number
  }

  static defaultProps = {
    maxChar: 40
  }

  state = {
    charInput: '',
    totalChar: 0
  };

  handleNumberChange = ({ target }) => {
    this.setState({ charInput: Number.parseInt(target.value) });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return {
        totalChar: state.charInput + state.totalChar,
        charInput: ''
      };
    });
  }

  render() {
    return (
    <>
    <NameTag
      char={this.state.charInput}
      handleNumberChange={this.handleNumberChange}
      handleSubmit={this.handleSubmit} />
    </>
    );
  } 
}
