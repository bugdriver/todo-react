import React from 'react';
import TextInput from './textInput';
import DeleteButton from './deleteButton';

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
      <div className="todoTitle" style={{ cursor: 'pointer' }}>
        <p onClick={this.handleClick}>{this.props.value}</p>
        <DeleteButton
          className="deleteTodoBtn"
          onClick={() => this.props.deleteTodo()}
        />
      </div>
    );
  }
}

export default TodoTitle;
