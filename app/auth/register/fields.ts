const fields = [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "Enter your first name",
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Enter your last name",
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email address",
    validation: {
      required: true,
      pattern: /^\S+@\S+\.\S+$/,
      error: "Please enter a valid email address.",
    },
    error: "Please enter a valid email address.",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter a strong password",
    validation: {
      required: true,
      minLength: 8,
      maxLength: 50,
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      error:
        "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one number.",
    },
  },
];

export default fields;
