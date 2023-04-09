"use client";
import Input from "@/components/form/input";
import getFormData from "@/lib/getFormData";
import Link from "next/link";
import { toast } from "react-hot-toast";
import fields from "./fields";

export default function Register() {
  const handleSubmit = (e: any) => {
    const data = getFormData(e);
    toast.success("form submitted look at the console");
    console.log(data);
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ maxWidth: "500px", margin: "auto", padding: "10px" }}
      >
        <h1>Register form </h1>
        {fields.map((field) => (
          // @ts-ignore
          <Input key={field.name} {...field} />
        ))}
        <button>Submit</button>
        <p
          style={{
            textAlign: "center",
            color: "var(--primary)",
            textDecoration: "underline",
          }}
        >
          <Link href="/auth/login"> try Login page</Link>
        </p>
      </form>
    </main>
  );
}
