"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  BrainCircuit, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Lock,
  Mail,
  Sparkles
} from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (res?.error) {
      setError("Invalid login credentials. Please try again.");
    } else {
      router.push("/student");
      router.refresh();
    }
  };

  const handleQuickLogin = async (roleEmail: string, rolePath: string) => {
    setIsLoading(true);
    setError(null);
    const res = await signIn("credentials", {
      email: roleEmail,
      password: "password123",
      redirect: false,
    });
    setIsLoading(false);
    if (!res?.error) {
      router.push(rolePath);
      router.refresh();
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full glass-panel rounded-2xl p-8 border border-slate-800 shadow-2xl relative">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-600/30">
            <BrainCircuit className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Sign in to Adaptive Practice</h1>
          <p className="text-sm text-slate-400 mt-1">Access your personalized learning portal</p>
        </div>

        {/* 1-Click Quick Demo Sign-in */}
        <div className="mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Quick Demo Login</span>
            <span className="text-[10px] text-indigo-400 flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Instant Access</span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickLogin("student@example.com", "/student")}
              disabled={isLoading}
              className="p-2.5 rounded-xl bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 hover:border-indigo-500/40 text-center transition-all group"
            >
              <GraduationCap className="w-5 h-5 text-indigo-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white block">Student</span>
              <span className="text-[10px] text-slate-400 block">Class IX</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickLogin("teacher@example.com", "/teacher")}
              disabled={isLoading}
              className="p-2.5 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-500/40 text-center transition-all group"
            >
              <Users className="w-5 h-5 text-purple-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white block">Teacher</span>
              <span className="text-[10px] text-slate-400 block">Classes IX-X</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickLogin("admin@example.com", "/admin")}
              disabled={isLoading}
              className="p-2.5 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 hover:border-emerald-500/40 text-center transition-all group"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white block">Admin</span>
              <span className="text-[10px] text-slate-400 block">System</span>
            </button>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleCustomLogin} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Email address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 text-sm flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
          >
            <span>{isLoading ? "Signing in..." : "Sign In with Credentials"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
