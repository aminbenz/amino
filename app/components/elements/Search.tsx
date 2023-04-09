"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components";

export default function Search() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const router = useRouter();

  const onSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/?q=${search}`);
  };
  return (
    <form
      className="flex justify-center md:justify-between"
      onSubmit={onSearch}
    >
      <Input
        type="search"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        // @ts-ignore
        className="bg-black p-2 rounded-md"
        placeholder="Search.."
      />
      <button className="p-2 rounded-md bg-slate-800 ml-2">🚀</button>
    </form>
  );
}
