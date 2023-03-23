"use client"
import React, { useState } from "react";
import inputs from "./fields"
import "./styles.scss"

interface FormValues {
  [key: string]: string;
  name: string;
  email: string;
  password: string;
}
interface FormErrors {
  [key: string]: string;
}

const RegistrationForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleErrors = (values: FormValues) => {
    const errors = new Map();

    // trim text
    for (let key in values) {
      values[key] = values[key].trim();
    }

    switch (true) {
      case !values.name:
        errors.set("name", "Name is required")
        break
      case !values.email:
        errors.set("email", "Email is required")
        break
      case !/\S+@\S+\.\S+/.test(values.email):
        errors.set("email", "Email is invalid")
        break
      case !values.password:
        errors.set("password", "Password is required")
        break
    }

    if (errors.size > 0) {
      setErrors(Object.fromEntries(errors));
      return true
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const has_errors = handleErrors(values)

    if (has_errors) return

    console.log(values);

  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]:
        event.target.value,
    });
  };

  return (
    <form className="form-register" onSubmit={handleSubmit}>
      {inputs.map(({ name, label, placeholder, type }) => (
        <div key={name}>
          {label && <label htmlFor={name}>{label}</label>}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={values[name]}
            onChange={handleChange}
          />
          {errors[name] && <span>{errors[name]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
