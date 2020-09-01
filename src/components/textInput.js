import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyUp(event) {
    const value = event.target.value.trim();
    if (event.keyCode === 13 && value !== '') {
      this.props.onEnterPress(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        value={this.state.value}
        onKeyUp={this.handleKeyUp}
        onChange={this.handleChange}
      />
    );
  }
}

export default TextInput;
