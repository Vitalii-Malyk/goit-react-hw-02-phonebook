import { Component } from 'react';
import { nanoid } from 'nanoid';

class FormCreateContact extends Component {
  state = {
    name: '',
    id: '',
  };

  nameInputId = nanoid();

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  resetForm = () => {
    this.setState({
      name: '',
    });
  };

  сreateСontact = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.сreateСontact}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          onChange={this.handleChange}
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormCreateContact;
