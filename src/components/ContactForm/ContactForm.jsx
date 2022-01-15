import React, { Component } from 'react'
import { nanoid } from 'nanoid'


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        contacts: this.props.contacts,
    }

    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const nameInput = form.elements.name.value;
        const numberInput = form.elements.number.value;
        // console.log(numberInput);
        
        this.setState(prevState => ({
            contacts:[...prevState.contacts,{id:nanoid(5), name: nameInput, number: numberInput, }],
            name: nameInput,
            number: numberInput
        }))
        this.props.onSubmit(this.state.contacts)
    }

    render() { 
        return (
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
        );
    }
}
 
export default ContactForm;