"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export function Auth() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Signed in as {session.user?.email}
        </span>
        <button
          onClick={() => signOut()}
          disabled={isLoading}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          Sign out
        </button>
      </div>
    );
  }

  const handleSignIn = async (provider?: string) => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleSignIn()}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    </div>
  );
}