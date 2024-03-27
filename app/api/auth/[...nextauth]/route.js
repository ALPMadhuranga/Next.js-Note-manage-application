import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import connect from "@/utils/db";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        id: "credentials",
        username: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          try {
            await connect(); // Move this outside if possible
            const user = await User.findOne({email: credentials.email});

            if (!user) {
              throw new Error("No user found with this email.");
            }

            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (!isPasswordCorrect) {
              throw new Error("Incorrect password.");
            }

            return user;
            
          } catch (err) {
            throw new Error(`Authentication failed: ${err.message}`);
          }
        },
      }),
    ],
    callbacks: {
        async jwt({ token, user, session }) {
          // console.log("jwt callback", { token, user, session });
          if (user) {
            return {
              ...token,
              id: user._id,
              name:user.username
            };
          }
          return token;
        },
        async session({ session, token, user }) {
          // console.log("session callback", { token, user, session });
          return {
            ...session,
            user: {
              ...session.user,
              id: token.id,
              name:token.name
            },
          };
        },
      },
      session: {
        strategy: "jwt",
      },
    };
    

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };