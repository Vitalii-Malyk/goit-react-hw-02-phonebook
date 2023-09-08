import { Component } from 'react';
import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid';

class CreateListContact extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  createContactItem = () => {
    this.setState({
      name: this.props.nameContact,
    });
  };

  // handleDelete = id => {
  //   this.setState(prev => ({
  //     contacts: prev.contacts.filter(el => el.id !== id),
  //   }));
  // };

  addContactList = body => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...body, id: nanoid() }],
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Phonebook</h1>
        <ul className="contact-list">
          {this.state.contacts.map(el => (
            <Contact contact={el} key={el.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default CreateListContact;
