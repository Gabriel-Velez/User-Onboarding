import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  tos: false,
};
const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  tos: false,
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        // console.log(res);
        setUsers([res.data, ...users]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className='App'>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      <div className='users-wrapper'>
        {users.map((user, idx) => {
          return <User key={idx} details={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
