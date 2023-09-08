import { Component } from 'react';
import CreateListContact from './CreateListContact/CreateListContact';
import FormCreateContact from './Forms/FormCreateContact';
import dataContactsDefault from 'dataFiles/dataContacts.json';

export class App extends Component {
  state = {
    contacts: dataContactsDefault,
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandler = newContact => {
    let nameArr = [];
    nameArr = this.state.contacts.map(el => el.name);
    if (!nameArr.includes(newContact.name)) {
      let newArrContacts = [
        ...this.state.contacts,
        { id: newContact.id, name: newContact.name, number: newContact.number },
      ];
      return this.setState({ ...this.state, contacts: newArrContacts });
    } else {
      alert(' Контакт вже є у телефонній книзі!');
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FormCreateContact onSubmit={this.formSubmitHandler} />
        <CreateListContact nameContact={this.state.contacts} />
      </div>
    );
  }
}
