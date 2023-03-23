
import getUserById from "@/lib/users/getUserById"
import getUserPosts from "@/lib/users/getUserPosts"
import type { Metadata } from "next"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"

type Params = {
    params: {
        user_id: string
    }
}

export async function generateMetadata({ params: { user_id } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUserById(user_id)
    const user: User = await userData

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage({ params: { user_id } }: Params) {
    const userData: Promise<User> = getUserById(user_id)
    const userPostsData: Promise<Post[]> = getUserPosts(user_id)

    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData
    return (
        <main>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </main>
    )
}
