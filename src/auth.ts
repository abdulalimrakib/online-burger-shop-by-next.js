import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
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
        console.log("hello");
        if (!isMatched) throw new Error("Invalid email or password");

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
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
});
