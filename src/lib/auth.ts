import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const emailLower = credentials.email.toLowerCase().trim();

        // Preset demo accounts for quick testing
        const demoUsers = [
          {
            id: "1",
            email: "student@example.com",
            name: "John Student",
            role: "student",
          },
          {
            id: "2",
            email: "teacher@example.com",
            name: "Jane Teacher",
            role: "teacher",
          },
          {
            id: "3",
            email: "admin@example.com",
            name: "Alice Admin",
            role: "admin",
          },
        ];

        const user = demoUsers.find((u) => u.email === emailLower);

        if (user) {
          // Any password accepted for demo accounts, or standard 'password123'
          return user;
        }

        // Generic fallback for any user login
        return {
          id: "custom-" + Date.now(),
          email: emailLower,
          name: emailLower.split("@")[0].replace(".", " "),
          role: emailLower.includes("teacher") ? "teacher" : emailLower.includes("admin") ? "admin" : "student",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "adaptive-practice-jwt-secret-key-32ch",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
