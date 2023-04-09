// import getUserById from "@/lib/users/getUserById"
import { getUserById } from "@/lib/prisma/users";
import getUserPosts from "@/lib/users/getUserPosts";
import { User } from "@prisma/client";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import UserTable from "./components/UserTable";
import Link from "next/link";

type Params = {
  params: {
    user_id: string;
  };
};

export async function generateMetadata({
  params: { user_id },
}: Params): Promise<Metadata> {
  // @ts-ignore
  const user: User = await getUserById(user_id);

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { user_id } }: Params) {
  // @ts-ignore
  const user: User = await getUserById(user_id);

  if (!user) {
    notFound();
  }

  return (
    <main>
      <Link href="/users/add">
        <button className="btn">Add User</button>
      </Link>
      {/* @ts-ignore */}
      <UserTable user={user} />
      <br />s{" "}
    </main>
  );
}
