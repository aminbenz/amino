const pattern = {
  name: `^[a-zA-Z ,.'-]+$`,
  email: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`,
  password: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$`,
  phone: `^[0-9]{3}-[0-9]{2}-[0-9]{3}$`,
};

interface ValidationsProps {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  title?: string;
  errMsg?: string;
}

export class Validations {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  title?: string;
  errMsg?: string;

  constructor({
    required,
    minLength,
    maxLength,
    pattern,
    title,
    errMsg,
  }: ValidationsProps) {
    this.required = required || false;
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.pattern = pattern;
    this.title = title || errMsg;
    this.errMsg = errMsg;
  }
}

export const nameValidations = new Validations({
  required: true,
  minLength: 3,
  maxLength: 20,
  pattern: pattern.name,
  errMsg:
    "Name should be 3-16 characters and shouldn't include any special character!",
});

export const firstNameValidations = new Validations({
  ...nameValidations,
  errMsg:
    "First Name should be 3-16 characters and shouldn't include any special character!",
});

export const lastNameValidations = new Validations({
  ...nameValidations,
  errMsg:
    "Last name should be 3-16 characters and shouldn't include any special character!",
});

export const emailValidations = new Validations({
  required: true,
  pattern: pattern.email,
  errMsg: "It should be a valid email address!",
});

export const passwordValidations = new Validations({
  required: true,
  minLength: 8,
  maxLength: 32,
  pattern: pattern.password,
  errMsg:
    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
});

export const phoneValidations = new Validations({
  minLength: 8,
  maxLength: 32,
  pattern: pattern.phone,
  errMsg:
    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
});
