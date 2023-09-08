import { Component } from 'react';
import CreateListContact from './CreateListContact/CreateListContact';
import FormCreateContact from './Forms/FormCreateContact';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = ({ name }) => {
    this.setState({ name: name });
  };

  render() {
    console.log(this.state.name);
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
        <CreateListContact nameContact={this.state.name} />
      </div>
    );
  }
}
