import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredential(): {
  id: string;
  secret: string;
} {
  const id = process.env.GOOGLE_ID;
  const secret = process.env.GOOGLE_SECRET;

  if (!id || id.length === 0) {
    throw new Error("Missing GOOGLE_ID");
  }
  if (!secret || secret.length === 0) {
    throw new Error("Missing GOOGLE_SECRET");
  }

  return { id, secret };
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: getGoogleCredential().id,
      clientSecret: getGoogleCredential().secret,
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  // database: process.env.DATABASE_URL,
  pages: {
    // signIn: "/auth/login",
    // signOut: "/auth/logout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
