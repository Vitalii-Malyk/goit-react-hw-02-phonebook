import { Component } from 'react';
// import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid';

class CreateListContact extends Component {
  state = {
    contacts: [],
  };

  createContactItem = () => {
    return this.props.nameContact.map(contact => {
      return (
        <li key={nanoid()} id={contact.id}>
          {`${contact.name} ${contact.number}`}
          <button
            data-id={contact.id}
            // onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createContactItem()}</ul>;
  }
}

export default CreateListContact;
