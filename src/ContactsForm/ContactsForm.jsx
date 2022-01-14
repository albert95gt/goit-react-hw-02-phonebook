// import React, { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';

// // const validationSchema = Yup.object({
// //     name: Yup.string().required(),
// //     number: Yup.number().required(),
// //   });

// const initialValues = {
//     name: '',
//     number: '',
//   };
// class ContactsForm extends Component {
//     handleSubmit = (event) => {
//         event.preventDefault();
//     } 
//     render() {
//         return (
//             <Formik
//             initialValues={initialValues}
//             onSubmit={this.handleSubmit}
//             >
//                 <Form>
//                     <label htmlFor="">Name</label>
//                     <Field name={name}/>
//                     <button type="submit">Add contact</button>
//                 </Form>
//             </Formik>    
//         )
//     }
    
// }

// export default ContactsForm;