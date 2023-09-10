import React, { Component } from 'react';

class FilterContacts extends Component {
  state = {
    filter: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value });
    this.props.filterContacts(value);
  };

  render() {
    return (
      <div>
        <label htmlFor={this.nameInputId}>FilterContacts</label>
        <input
          onChange={this.handleChange}
          id={this.nameInputId}
          type="text"
          name="name"
          value={this.state.filter}
        />
      </div>
    );
  }
}

export default FilterContacts;
