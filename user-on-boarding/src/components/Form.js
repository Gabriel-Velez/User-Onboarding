import React from "react";
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
      <div>
        <h2>Log in!</h2>
        <div className='form'>
          <label>
            Name
            <FontAwesomeIcon icon={faUser} />
            <input value={values.first_name} onChange={onChange} name='first_name' type='text' />
            <input value={values.last_name} onChange={onChange} name='last_name' type='text' />
          </label>

          <label>
            Email
            <FontAwesomeIcon icon={faEnvelope} />
            <input value={values.email} onChange={onChange} name='email' type='text' />
          </label>
          <label>
            Password
            <FontAwesomeIcon icon={faLock} />
            <input value={values.password} onChange={onChange} name='password' type='password' />
          </label>
          <label>
            Terms of Service
            <input checked={values.tos} onChange={onChange} name='tos' type='checkbox' />
          </label>
        </div>
        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
        <button disabled={disabled}>submit</button>
      </div>
    </form>
  );
}
