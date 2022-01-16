import React from 'react'
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { ContactItemCss, DeleteContactBtn } from './ContactItem.styled';

const ContactItem = ({ contacts, filter, onDeleteContacts }) => {
    
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({name, number}) => {
            return (
            <ContactItemCss key={name}>{name}: {number}
              <DeleteContactBtn type='button' onClick={() => onDeleteContacts(name)}>Delete <MdDeleteForever color='#f69d3c' size={22}/></DeleteContactBtn>
            </ContactItemCss>)
            
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