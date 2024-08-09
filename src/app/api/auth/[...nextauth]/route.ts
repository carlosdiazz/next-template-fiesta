import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        const { username, password } = credentials;

        if (username === "pablo@orkapi.com" && password === "Pabl0Vidal99") {
          const user = {
            id: "1",
            name: "Pablo",
            username: username,
          };
          return user;
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
