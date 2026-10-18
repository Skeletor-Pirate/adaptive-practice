"use client";

import { useSession } from "next-auth/react";
import { LoadingSpinner } from "./LoadingSpinner";

export function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in</h1>
          <p className="text-gray-600">Access your learning dashboard</p>
        </div>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome, {user.name}!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {user.role === "student" && "Your Learning Dashboard"}
              {user.role === "teacher" && "Teacher Dashboard"}
              {user.role === "admin" && "Admin Dashboard"}
            </p>
          </div>

          {user.role === "student" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Progress
                </h3>
                <p className="text-3xl font-bold text-blue-600">75%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Completed topics
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Practice Questions
                </h3>
                <p className="text-3xl font-bold text-green-600">24</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Attempted this week
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Streak
                </h3>
                <p className="text-3xl font-bold text-purple-600">5</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Days in a row
                </p>
              </div>
            </div>
          )}

          {user.role === "teacher" && (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  My Classes
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You are teaching 3 classes. View student progress and assign practice problems.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Recent Student Activity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  12 students completed practice questions today
                </p>
              </div>
            </div>
          )}

          {user.role === "admin" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                  System Status
                </h3>
                <p className="text-xl font-bold text-red-600">All Systems Operational</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  1,247 active users
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  Content Management
                </h3>
                <p className="text-xl font-bold text-yellow-600">456 questions</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Total questions in database
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}