import React from 'react'
import PropTypes from 'prop-types';


const ContactItem = ({ contacts, filter, onDeleteContacts }) => {
    
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({name, number}) => {
            return (
            <li key={name}>{name}: {number}
              <button type='button' onClick={() => onDeleteContacts(name)}>Delete</button>
            </li>)
            
          })}
    
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired),
  filter: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
}

export default ContactItem;