import type { Metadata } from "next"
import Link from "next/link"
import getAllUsers from "@/lib/users/getAllUsers"

export const metadata: Metadata = {
    title: "Users"
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    return <section>
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>
        <br />
        {users.map(user => {
            return (
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
            )
        })}
    </section>
}