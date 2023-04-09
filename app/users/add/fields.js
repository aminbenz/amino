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
    helperText:
      "Your password should be at least 8 characters long and include a mix of letters, numbers, and symbols.",
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone",
    placeholder: "Enter your phone number",
    validation: {
      required: true,
      pattern: /^\+\d{3}\s\d{2}-\d{4}-\d{4}$/,
      error: "Please enter your phone number in the format +xxx xx-xxx-xxx.",
    },
    helperText: "Please enter your phone number in the format +xxx xx-xxx-xxx.",
  },
  {
    name: "birthdate",
    type: "date",
    label: "Birthdate",
    placeholder: "Enter your birthdate",
  },
  {
    name: "gender",
    type: "radio",
    label: "Gender",
    options: [
      { value: "MALE", label: "Male" },
      { value: "FEMALE", label: "Female" },
    ],
  },
  // {
  //   name: "emailUpdates",
  //   type: "checkbox",
  //   label: "Receive Email Updates",
  //   caption: "Would you like to receive email updates?",
  // },
  {
    // name: "user_type",
    name: "type",
    type: "select",
    label: "User Type",
    placeholder: "Select your user type",
    options: [
      { value: "MEMBER", label: "Member" },
      { value: "EMPLOYEE", label: "Employee" },
      { value: "EMPLOYER", label: "Employeer" },
    ],
  },
  {
    name: "hobbies[]",
    type: "select",
    options: ["Gaming", "Reading", "TV", "Music"],
    validation: {
      required: true,
      minItems: 1,
    },
    label: "Hobbies",
  },
  {
    name: "position",
    type: "text",
    placeholder: "Position",
    validation: {
      maxLength: 100,
    },
    label: "Position",
  },
  {
    name: "bio",
    type: "textarea",
    placeholder: "Bio",
    validation: {
      maxLength: 500,
    },
  },
  {
    name: "address.city",
    type: "text",
    placeholder: "City",
    validation: {
      minLength: 2,
      maxLength: 50,
    },
    label: "City",
  },
  {
    name: "address.street",
    type: "text",
    placeholder: "Street",
    validation: {
      minLength: 2,
      maxLength: 100,
    },
  },
  {
    name: "address.state",
    type: "text",
    placeholder: "State",
    validation: {
      minLength: 2,
      maxLength: 50,
    },
  },
  {
    name: "address.zip",
    type: "text",
    placeholder: "Zip",
    validation: {
      pattern: /^\d{5}(-\d{4})?$/,
    },
  },
];

export default fields;
