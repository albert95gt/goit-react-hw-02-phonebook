import React from 'react'

const ContactItem = ({ contacts, filter }) => {
    
        return   contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase()) 

          }).map(({name, number}) => {
            return <li key={name}>{name}: {number}</li>
            
          })}
    


export default ContactItem;