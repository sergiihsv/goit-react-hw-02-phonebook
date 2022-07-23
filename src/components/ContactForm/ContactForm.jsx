import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { AddButton } from './ContactFormStyled';

export class ContactForm extends Component {
  handleSubmit = ({ name, number }, { resetForm }) => {
    const nameInContacts = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    this.props.onSubmit(contact);
    resetForm();
    console.log(nameInContacts);
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Name</label>
            <div>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <div>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
          </div>
          <AddButton type="submit">Add contact</AddButton>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
