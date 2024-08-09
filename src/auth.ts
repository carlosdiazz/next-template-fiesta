import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      authorize(credentials) {
        console.log(credentials);
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
});
