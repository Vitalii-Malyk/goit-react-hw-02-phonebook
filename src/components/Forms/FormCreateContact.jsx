import { Component } from 'react';
import { nanoid } from 'nanoid';

import { FormElementStyle } from 'components/Forms/FormCreateContact.styled';

class FormCreateContact extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value, id: nanoid() });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  сreateСontact = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      <FormElementStyle onSubmit={this.сreateСontact}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          onChange={this.handleChange}
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={this.state.name}
          required
        />
        <label htmlFor={this.telInputId}>Number</label>
        <input
          type="tel"
          id={this.telInputId}
          onChange={this.handleChange}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          value={this.state.number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
        <button type="submit">Add contact</button>
      </FormElementStyle>
    );
  }
}

export default FormCreateContact;
