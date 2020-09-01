import React from 'react';
import TextInput from './textInput';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleClick() {
    this.setState({ isEditable: true });
  }

  handleTitleChange(value) {
    this.setState({ isEditable: false });
    this.props.onChange(value);
  }

  render() {
    if (this.state.isEditable) {
      return (
        <TextInput
          className="todoTitle"
          value={this.props.value}
          onEnterPress={this.handleTitleChange}
        />
      );
    }
    return (
      <p
        className="todoTitle"
        onClick={this.handleClick}
        style={{ cursor: 'pointer' }}
      >
        {this.props.value}
      </p>
    );
  }
}

export default TodoTitle;
