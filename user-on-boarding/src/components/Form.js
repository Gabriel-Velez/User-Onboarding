import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function FriendForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-wrapper'>
        <h1>Log in!</h1>
        <div className='form'>
          <label>Name</label>
          <div className='input-line'>
            <FontAwesomeIcon className='form-icon' icon={faUser} />
            <input
              value={values.first_name}
              onChange={onChange}
              name='first_name'
              type='text'
              placeholder='First'
            />
            <input
              value={values.last_name}
              onChange={onChange}
              name='last_name'
              type='text'
              placeholder='Last'
            />
          </div>
          <label>Email</label>
          <div className='input-line'>
            <FontAwesomeIcon className='form-icon' icon={faEnvelope} />
            <input value={values.email} onChange={onChange} name='email' type='text' />
          </div>
          <label>Password</label>
          <div className='input-line'>
            <FontAwesomeIcon className='form-icon' icon={faLock} />
            <input value={values.password} onChange={onChange} name='password' type='password' />
          </div>
          <div className='input-line tos'>
            <label>Terms of Service</label>
            <input checked={values.tos} onChange={onChange} name='tos' type='checkbox' />
          </div>
        </div>
        <button id='submitBtn' disabled={disabled}>
          submit
        </button>
        <div className='errors'>
          <div id='firstNameError'>{errors.first_name}</div>
          <div id='lastNameError'>{errors.last_name}</div>
          <div id='emailError'>{errors.email}</div>
          <div id='passwordError'>{errors.password}</div>
          <div id='tosError'>{errors.tos}</div>
        </div>
      </div>
    </form>
  );
}
