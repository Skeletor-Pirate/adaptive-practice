"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { 
  Flame, 
  Target, 
  Trophy, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  BrainCircuit, 
  BookOpen, 
  Sparkles,
  BarChart2
} from "lucide-react";

export default function StudentDashboardPage() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "John Student";

  const topics = [
    { id: "t-linear", name: "Linear Equations", subject: "Mathematics", mastery: 85, total: 30, solved: 26, status: "Mastered" },
    { id: "t-quad", name: "Quadratic Equations", subject: "Mathematics", mastery: 70, total: 25, solved: 18, status: "Proficient" },
    { id: "t-motion", name: "Motion & Kinematics", subject: "Science", mastery: 60, total: 20, solved: 12, status: "In Progress" },
    { id: "t-light", name: "Light - Reflection & Refraction", subject: "Science", mastery: 40, total: 20, solved: 8, status: "Needs Practice" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 mb-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 text-xs font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>CBSE Class IX • Mathematics & Science</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Welcome back, {userName}!
            </h1>
            <p className="text-slate-400 text-sm max-w-xl">
              You're on track for your weekly goals. Practise 5 more questions today to keep your streak active!
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/practice"
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Resume Practice</span>
            </Link>
            <Link
              href="/diagnostic"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 flex items-center space-x-2 transition-colors"
            >
              <Target className="w-4 h-4 text-purple-400" />
              <span>Diagnostic</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-medium">Daily Streak</span>
            <Flame className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">5 Days</div>
          <span className="text-[10px] text-amber-400/90 font-medium">🔥 Personal best this month</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-medium">Questions Solved</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">64 / 95</div>
          <span className="text-[10px] text-emerald-400/90 font-medium">67% completion</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-medium">Average Accuracy</span>
            <Target className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">82.5%</div>
          <span className="text-[10px] text-indigo-400/90 font-medium">+4% from last week</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-medium">Mastery Points</span>
            <Trophy className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">1,240 XP</div>
          <span className="text-[10px] text-purple-400/90 font-medium">Level 4 Scholar</span>
        </div>
      </div>

      {/* Curriculum Mastery Breakdown */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Curriculum Topic Mastery</h2>
            <p className="text-xs text-slate-400">Adaptive diagnosis across key CBSE chapters</p>
          </div>
          <Link
            href="/practice"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
          >
            <span>Practice all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {topics.map((t) => (
            <div key={t.id} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300">
                    {t.subject}
                  </span>
                  <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      t.mastery >= 80 ? "bg-emerald-500" : t.mastery >= 60 ? "bg-indigo-500" : "bg-amber-500"
                    }`}
                    style={{ width: `${t.mastery}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end space-x-6 text-xs">
                <div className="text-left md:text-right">
                  <span className="font-bold text-white block">{t.mastery}% Mastery</span>
                  <span className="text-slate-500 text-[10px]">{t.solved} / {t.total} Questions</span>
                </div>
                <Link
                  href={`/practice?topicId=${t.id}`}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white font-medium text-xs transition-colors"
                >
                  Practise
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
