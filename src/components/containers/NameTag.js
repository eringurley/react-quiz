import React, { Component } from 'react';
import TextSelector from '../TextSelector';
import ColorSelector from '../ColorSelector';
import Shape from '../Shape';


export default class NameTag extends Component {
  state = {
    text: '',
    color: '',
    backgroundColor: ''
  }

  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  handleBackgroundChange = ({ target }) => {
    this.setState({ backgroundColor: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return ({ 
        text: state.text
      });
    });

  }

  render() {
    return (
      <>
        <TextSelector
          text={this.state.text}
          handleTextChange={this.handleTextChange}
          handleSubmit={this.handleSubmit}
        />

        <ColorSelector
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
          handleColorChange={this.handleColorChange}
          handleBackgroundChange={this.handleBackgroundChange}
        />

        <Shape
          text={this.state.text}
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
        />
      </>
    );
  }
}


// import React, { Component } from 'react';
// import ColorSelector from '../ColorSelector';
// import TextSelector from '../TextSelector';

// export default class NameTag extends Component {
//   state = {
//     text: '',
//     color: '',
//     backgroundColor: ''
//   }
  
//   handleTextChange = ({ target }) => {
//     this.setState({ text: target.value });
//   }

//   handleColorChange = ({ target }) => {
//     this.setState({ color: target.value });
//   }

//   handleBackgroundChange = ({ target }) => {
//     this.setState({ backgroundColor: target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     this.setState(state => {
//       return ({ 
//         text: state.text
//       });
//     });

//   }

  
//   render() {

//     return (
//       <>
//       <TextSelector
//         text={this.text.state}
//         handleTextChange={this.handleTextChange}
//         handleSubmit={this.handleSubmit}
//       />
      
//         <ColorSelector 
//           color={this.state.color}
//           backgroundColor={this.state.backgroundColor}
//           handleColorChange={this.state.handleColorChange}
//           handleBackgroundChange={this.state.handleBackgroundChange}
//         />
//       </>
//     );
//   }
// }
