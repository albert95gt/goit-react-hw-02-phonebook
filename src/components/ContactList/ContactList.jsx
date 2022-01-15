import React from 'react'
import ContactItem from './ContactItem'

const ContactList = ({ contacts, filter }) => {
    return (
        <ul>
            {/* {contacts.filter(contact => {
              return contact.name.toLowerCase().includes(filter.toLowerCase()) 

            }).map(({name, number}) => {
              return <li key={name}>{name}: {number}</li>
              
            })} */}
            <ContactItem contacts={contacts} filter={filter}/>
          </ul>
    )
}

export default ContactList;