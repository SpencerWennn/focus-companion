import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "demo@focus.ai" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) return null;

        if (email === "demo@focus.ai" && password === "test1234") {
          const user =
            (await prisma.user.findUnique({ where: { email } })) ??
            (await prisma.user.create({ data: { email, name: "Demo User" } }));

          return {
            id: user.id,
            email: user.email,
            name: user.name ?? "Demo User",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};
