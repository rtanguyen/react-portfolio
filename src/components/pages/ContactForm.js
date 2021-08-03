import React, { useState, useEffect } from 'react';
import { validateEmail } from '../utils/helpers';



function ContactForm() {
  //initialize the values of the state - clear input fields
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');
  const [nameHasValue, setNameHasValue ] = useState(false);
  const [emailHasValue, setEmailHasValue ] = useState(false);
  const [messageHasValue, setMessageHasValue ] = useState(false);
  const [nameInvalid, setNameInvalid ] = useState(false);
  const [emailInvalid, setEmailInvalid ] = useState(false);
  const [messageInvalid, setMessageInvalid ] = useState(false);


  useEffect(() => {
    let nameValueEmpty = formState.name.length === 0;
    setNameHasValue(!nameValueEmpty)

    const emailValueEmpty = formState.email.length === 0;
    setEmailHasValue(!emailValueEmpty)
    
    const messageValueEmpty = formState.message.length === 0;
    setMessageHasValue(!messageValueEmpty)

  }, [formState])

  //sync internal state of component formState with user input from DOM
  function handleChange(e) {
    //validation
    if (e.target.name === 'email') {
      const isEmailValid = validateEmail(e.target.value);
      console.log(emailInvalid);
      if (!isEmailValid) {
        setEmailErrorMessage('Please enter a valid email.');
        setEmailInvalid(!isEmailValid);
      } else {
        setEmailErrorMessage('');
        setEmailInvalid(!isEmailValid);
      }
    } else if (e.target.name === 'name') {
      // let nameValueEmpty = formState.name.length === 0;
      if (!e.target.value.length) {
      console.log(nameErrorMessage);
      console.log(e.target.value.length);
        setNameErrorMessage('Please fill out this field.');
        setNameInvalid(true);
      } else { 
        setNameErrorMessage('');
        setNameInvalid(false);
      }
    } else if (e.target.name === 'message') {
      if (!e.target.value.length) {
        setMessageErrorMessage('Please fill out this field.');
        setMessageInvalid(true);
      } else {
        setMessageErrorMessage('')
        setMessageInvalid(false);
      }
    }
    setFormState({...formState, [e.target.name]: e.target.value })

    
    // if(!errorMessage) {
    //     setFormState({...formState, [e.target.name]: e.target.value })
    //   }
      // console.log('errorMessage', errorMessage);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }

    console.log(nameErrorMessage);


    return (
  
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="input_fields">
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" minLength='1' className="input_el"/>
                <label className={`input_label ${nameHasValue ? 'has-value' : ''}`} htmlFor="name">Name:</label>
                <div class={`input_underline ${nameInvalid ? 'invalidInput' : ''}`}></div>
                </div>
              {nameErrorMessage && (
                  <p className='error-text'> <i class="bi bi-exclamation-triangle" /> {nameErrorMessage}</p>
              )}

            
            <div className="input_fields">
                <input type="text" defaultValue={email} onBlur={handleChange} name="email" minLength='1' className="input_el"/>
                <label className={`input_label ${emailHasValue ? 'has-value' : '' }`} htmlFor="email">Email address:</label>
                <div class={`input_underline ${emailInvalid ? 'invalidInput' : ''}`}></div>
                </div>

                {emailErrorMessage && (
                  <p className='error-text'> <i class="bi bi-exclamation-triangle" /> {emailErrorMessage}</p>
                )}

            <div className="input_fields">
                <textarea rows="3" minLength='1' defaultValue={message} onBlur={handleChange} name="message" className="input_el"/>
                <label className={`input_label ${messageHasValue ? 'has-value' : '' }`} htmlFor="message">Message:</label>
                <div class={`input_underline ${messageInvalid ? 'invalidInput' : ''}`}></div>
                </div>
                {messageErrorMessage && (
                  <p className='error-text'> <i class="bi bi-exclamation-triangle" /> {messageErrorMessage}</p>
                )}

          
            <button className="email-btn" type="submit">
              <span>send</span>
            </button>
          </form>
      );
};


export default ContactForm;