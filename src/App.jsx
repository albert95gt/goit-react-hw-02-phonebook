import React, { Component } from 'react';
import { nanoid } from 'nanoid'


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.name.value;
    const numberInput = form.elements.number.value;
    console.log(numberInput);
    
    this.setState(prevState => ({
      contacts:[...prevState.contacts,{name: nameInput, number: numberInput, id:nanoid(5)}],
      name: nameInput,
      number: numberInput
    }))
  }

  handleChange = event => {
    const filterInput = event.currentTarget.value;
    this.setState({filter: filterInput})
    
  }
  render() { 
    const { contacts, filter } = this.state;
    return (
      <div>
          <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
        type="text"
        name="name"
        
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
          <button type='submit'>Add contact</button>
        </form>
          <h2>Contacts</h2>
          <label htmlFor="filter">Find contacts by name</label>
          <input type="text"
          name='filter'
          onChange={this.handleChange}
          />
          <ul>
            {contacts.map(({name, number}) => {
              return <li key={name}>{name}: {number}</li>
              
            })}
          </ul>
      </div>
    );
  }
}
 
export default App;



