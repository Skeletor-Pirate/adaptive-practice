"use client";

import Link from "next/link";
import { 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Target, 
  Zap, 
  BarChart3,
  Award
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Curriculum-Linked Mastery Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Practise the right skill at the{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              exact right level
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Personalized adaptive learning for CBSE Classes IX-XII and JEE/NEET foundation.
            Diagnose knowledge gaps, master concepts through step-by-step worked solutions, and retain what you learn.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/practice"
              className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 flex items-center space-x-2 transition-all hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              <span>Start Adaptive Practice</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/diagnostic"
              className="px-6 py-3.5 glass-panel glass-panel-hover text-slate-200 font-semibold rounded-xl border border-slate-700/60 flex items-center space-x-2 transition-all hover:scale-105"
            >
              <Target className="w-4 h-4 text-purple-400" />
              <span>Take Diagnostic Test</span>
            </Link>
          </div>
        </div>

        {/* Role Portals Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Explore by Role</h2>
            <p className="text-slate-400 text-sm">Experience the platform from different perspectives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Student Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Student Experience</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Personalized practice questions, real-time hints, difficulty adjustment, and streak trackers.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    <span>CBSE Class IX & X Mathematics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    <span>Physics & Chemistry Foundations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    <span>Spaced Repetition & Daily Streaks</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/student"
                className="w-full py-2.5 px-4 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white font-medium text-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Go to Student Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Teacher Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Teacher Portal</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Monitor student mastery across classes, assign custom practice sets, and spot struggling learners.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Class IX-A and Class X-B Rosters</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Accuracy & Diagnostic Breakdown</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Targeted Intervention Tools</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/teacher"
                className="w-full py-2.5 px-4 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white font-medium text-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Go to Teacher Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Admin Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Administrator Panel</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Curriculum item bank management, board standards alignment (CBSE/JEE/NEET), and system analytics.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Curriculum Question Repository</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Board & Difficulty Level Config</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Platform Telemetry & Audit</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/admin"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white font-medium text-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Go to Admin Panel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800/80">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Real-time Adaptation</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                If a student solves correctly, difficulty progressively advances. If an error occurs, instant micro-hints and worked steps restore confidence.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Spaced Repetition</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Concepts are revisited at mathematically optimized intervals to move understanding from short-term memory to long-term exam retention.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Board & JEE/NEET Tracks</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                CBSE-first foundation with parallel tracks for students aiming for competitive examinations without curriculum fragmentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
