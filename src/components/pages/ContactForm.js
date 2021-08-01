import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';



function ContactForm() {
  //initialize the values of the state - clear input fields
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  const [labelClass, setLabelClass] = useState('input_label')

  //sync internal state of component formState with user input from DOM
  function handleChange(e) {
    //validation
    if (e.target.name === 'email') {
        setLabelClass('input_label has-value');
      const isValid = validateEmail(e.target.value);
      //isValid conditional statement
      if (!isValid) {
        setErrorMessage('your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else if (e.target.name === 'name') {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
              setLabelClass('input_label')
            } else {
                setLabelClass('input_label has-value');
            }
      } else if (e.target.name === 'message') {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
              setLabelClass('input_label')
            } else {
                setLabelClass('input_label has-value');
            }
    }
    if(!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      // console.log('errorMessage', errorMessage);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }

    return (
  
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="input_fields">
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" minLength='1' className="input_el"/>
                <label className={"input_label" && labelClass} htmlFor="name">Name:</label>
                <div class="input_underline"></div>
            </div>
            <div className="input_fields">
                <input type="text" defaultValue={email} onBlur={handleChange} name="email" minLength='1' className="input_el"/>
                <label className={"input_label" && labelClass} htmlFor="email">Email address:</label>
                <div class="input_underline"></div>
            </div>
            <div className="input_fields">
                {/* <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/> */}

                <textarea rows="3" minLength='1' defaultValue={message} onBlur={handleChange} name="message" className="input_el"/>
                <label className={"input_label" && labelClass} htmlFor="message">Message:</label>
                <div class="input_underline"></div>
            </div>
            {/* {errorMessage && (
              <div>
                <p className='error-text'>{errorMessage}</p>
              </div>
            )} */}
            <button data-testid="button" type="submit">Submit</button>
          </form>
      );
};


export default ContactForm;