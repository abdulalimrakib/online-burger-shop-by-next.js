import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        if (!email || !password)
          throw new Error("Please provide both email & password");

        await connectDB();

        const user = await User.findOne({ email }).select("+password +role");
        if (!user) throw new Error("Invalid email or password");

        const isMatched = await compare(password, user.password);
        if (!isMatched) throw new Error("Invalid email or password");

        const userData = {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ session, token, user }) {
      // console.log(user);
      
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token, user }) {
      // console.log(user);
      
      if (user) {
        token.role = user.role;
      }

      return token;
    },

    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const { email, name, image, id } = user;

          await connectDB();

          const isAlreadyExist = await User.findOne({ email });
          if (!isAlreadyExist) {
           await User.create({
              email: email,
              name: name,
              image: image,
              authProviderId: id,
            });
          } else {
            return true;
          }
        } catch (error) {
          console.error("Error while creating user:", error);
          return false
        }
      }

      if (account.provider === "credentials") {
        return true;
      }

      return true
    },
  },
});
