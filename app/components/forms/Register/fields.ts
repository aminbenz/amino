interface InputProps {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
}

const inputs: InputProps[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Enter name.." },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Password" },
];

export default inputs;
