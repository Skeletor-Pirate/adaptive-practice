"use client";

import { useState } from "react";
import { MOCK_QUESTIONS } from "@/services/questions";
import { 
  ShieldCheck, 
  Database, 
  Users, 
  Server, 
  Search, 
  CheckCircle2, 
  Filter,
  FileQuestion
} from "lucide-react";

export default function AdminPortalPage() {
  const [filterSubject, setFilterSubject] = useState("all");

  const filteredQuestions = filterSubject === "all" 
    ? MOCK_QUESTIONS 
    : MOCK_QUESTIONS.filter(q => q.subject.toLowerCase() === filterSubject.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Admin Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Platform Administration</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">System & Content Management</h1>
            <p className="text-slate-400 text-sm mt-1">Curriculum item banks, CBSE standards, and system telemetry.</p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engine Status: Healthy</span>
            </span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Active Questions</span>
          <span className="text-2xl font-bold text-white">{MOCK_QUESTIONS.length} items</span>
          <span className="text-[10px] text-emerald-400 block mt-1">CBSE Class IX-X verified</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Boards Supported</span>
          <span className="text-2xl font-bold text-white">3 Boards</span>
          <span className="text-[10px] text-indigo-400 block mt-1">CBSE, JEE, NEET</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Active Users</span>
          <span className="text-2xl font-bold text-white">1,247</span>
          <span className="text-[10px] text-purple-400 block mt-1">Students & Teachers</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Average Response Time</span>
          <span className="text-2xl font-bold text-white">42ms</span>
          <span className="text-[10px] text-emerald-400 block mt-1">Zero downtime</span>
        </div>
      </div>

      {/* Question Bank Explorer */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white">Curriculum Question Bank</h2>
            <p className="text-xs text-slate-400">Inspecting adaptive item pool with full worked answers</p>
          </div>

          <div className="flex items-center space-x-2">
            {["all", "Mathematics", "Science"].map((subj) => (
              <button
                key={subj}
                onClick={() => setFilterSubject(subj)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  filterSubject === subj
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-slate-800/60">
          {filteredQuestions.map((q) => (
            <div key={q.id} className="p-6 hover:bg-slate-800/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {q.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300">
                    {q.topicName}
                  </span>
                  <span className="text-xs font-mono text-slate-500">ID: {q.id}</span>
                </div>
                <span className="text-xs font-bold text-slate-400">Level {q.difficultyScore} ({q.difficulty.name})</span>
              </div>

              <div className="text-sm font-medium text-white mb-3">
                {q.content}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {q.options?.map((opt) => (
                  <div
                    key={opt.id}
                    className={`p-2.5 rounded-lg text-xs border ${
                      opt.isCorrect 
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-semibold"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    <span>{opt.text}</span>
                    {opt.isCorrect && <span className="block text-[10px] text-emerald-400 mt-0.5 font-bold">✓ Correct</span>}
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-400 bg-slate-900/80 p-3 rounded-lg border border-slate-800 font-mono">
                <span className="text-slate-300 font-bold block mb-1">Explanation:</span>
                {q.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
