import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const initialValues = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
class App extends Component {
  state = {
    contacts: initialValues,
    filter: '',
  }
  
  onSubmitForm = (data) => {
    this.setState({contacts: data})
  }

  handleChange = event => {
    const filterInputValue = event.currentTarget.value;
    const trimedFilterInputValue = filterInputValue.trim();
    

    this.setState({filter: trimedFilterInputValue});
    }

  
  render() { 
    const { contacts, filter } = this.state;
    
    return (
      <div>
        <h1>Phonebook</h1>

          <ContactForm contacts={contacts}
            onSubmit={this.onSubmitForm}
          />
          <h2>Contacts</h2>
          
          <Filter onChange={this.handleChange}/>
          
          <ContactList contacts={contacts} filter={filter}/>
      </div>
    );
  }
}
 
export default App;



