"use client";
import getFormData from "@/lib/getFormData";
import fetcher from "@/lib/fetcher";
import fields from "./fields";
import Input from "@/components/form/input/index";
import "./styles.css";

export default function AddUserPage() {
  const handleSubmit = async (event: any) => {
    const form_data = getFormData(event);
    form_data["locale"] = navigator.language;

    // created user in DB
    fetcher({
      endpoint: "/api/users",
      method: "POST",
      data: form_data,
      success: "User created 👌",
      error: "Error user not created 😕",
      redirect: true,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form__title">Add user</h2>
      {fields.map((field) => (
        // @ts-ignore
        <Input key={field.name} {...field} />
      ))}
      <button type="submit" className="form__submit-btn">
        Submit
      </button>
    </form>
  );
}
