import React from 'react'
import PropTypes from 'prop-types';
import { ContactItemCss } from './ContactItem.styled';

const ContactItem = ({ name, number, children}) => {
    
     
            return (
            
            <ContactItemCss>
              <span>{name}:</span>
              <span>{number}</span>
              {children}
            </ContactItemCss>
          )}
    
// ContactItem.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired
//   }).isRequired),
//   filter: PropTypes.string.isRequired,
//   onDeleteContacts: PropTypes.func.isRequired,
// }

export default ContactItem;