// "use client";
// import Link from "next/link";
// import { useSession } from "next-auth/react";

import Link from "next/link";

// export default function Welcome() {
//   const { data: session, status } = useSession({ required: true });

//   if (status === "loading") {
//     return "Loading or not authenticated...";
//   }

//   return (
//     <>
//       <p className="max-w-lg text-3xl font-semibold leading-relaxed">
//         Welcome, {session?.user?.name}.
//       </p>
//       <Link href="/">Go Home</Link>
//     </>
//   );
// }


export default function Welcome() {
  return (
    <>
      <p className="max-w-lg text-3xl font-semibold leading-relaxed">
        Welcome, Change ME PLEASE.
      </p>
      <Link href="/">Go Home</Link>
    </>
  );
}