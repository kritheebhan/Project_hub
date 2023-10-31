import React from 'react'



class About extends React.Component {
  handleClick() {
    alert('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}



export default About