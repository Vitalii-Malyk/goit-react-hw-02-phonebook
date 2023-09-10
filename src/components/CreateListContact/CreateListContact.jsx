import { Component } from 'react';
import { nanoid } from 'nanoid';

class CreateListContact extends Component {
  deleteId = Id => {
    this.props.deleted(Id);
  };

  createContactItem = () => {
    return this.props.contact.map(contact => {
      return (
        <li key={nanoid()} id={contact.id}>
          {`${contact.name} : ${contact.number}`}
          <button
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
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
