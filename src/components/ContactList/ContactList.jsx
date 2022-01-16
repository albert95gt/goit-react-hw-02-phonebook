import React from 'react'
import ContactItem from './ContactItem'
import PropTypes from 'prop-types';
import { ContactListCss } from './ContactList.styled';


const ContactList = ({ contacts, filter, onDeleteContacts }) => {
    return (
        <ContactListCss>
            <ContactItem contacts={contacts} filter={filter} onDeleteContacts={onDeleteContacts}/>
        </ContactListCss>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired),
  filter: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
}

export default ContactList;