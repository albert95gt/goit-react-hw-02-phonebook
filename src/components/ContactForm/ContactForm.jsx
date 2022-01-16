import React, { Component } from 'react'
import PropTypes from 'prop-types';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handdleChange = (event) => {
        const name = event.currentTarget.name;
        const inputValue = event.currentTarget.value;

        this.setState({ [name]: inputValue });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state)
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
        onChange={this.handdleChange}

      />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handdleChange}
        />
          <button type='submit'>Add contact</button>
    </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
 
export default ContactForm;