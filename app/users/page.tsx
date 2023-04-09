import type { Metadata } from "next";
import Link from "next/link";
import { getAllUsers } from "@/lib/prisma/users";
import { getSession } from "@/lib/auth";
import { AuthRequiredError } from "@/lib/exceptions";

export const metadata: Metadata = {
  title: "Users",
};

interface Request {
  status: number;
  msg: string;
  users: User[];
  error?: any;
}

export default async function UsersPage() {
  const usersData: any = await getAllUsers();
  const session = await getSession();

  if (!session) throw new AuthRequiredError();

  return (
    <main>
      <h2>
        <Link href="/">Back to Home</Link>
        <br />
        <button className="btn">
          {" "}
          <Link href="/users/add">Add user</Link>
        </button>
      </h2>
      <br />
      {usersData.map((user: User) => {
        return (
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
    </main>
  );
}
