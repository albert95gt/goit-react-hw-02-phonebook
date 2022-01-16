import React from 'react'
import ContactItem from './ContactItem'
import PropTypes from 'prop-types';


const ContactList = ({ contacts, filter, onDeleteContacts }) => {
    return (
        <ul>
            <ContactItem contacts={contacts} filter={filter} onDeleteContacts={onDeleteContacts}/>
        </ul>
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