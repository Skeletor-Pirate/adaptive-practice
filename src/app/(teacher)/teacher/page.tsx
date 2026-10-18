"use client";

import { useState } from "react";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Search, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function TeacherPortalPage() {
  const [selectedClass, setSelectedClass] = useState("Class IX-A");

  const students = [
    { id: "1", name: "John Student", email: "student@example.com", mastery: 82, completedSets: 14, lastActive: "Today", needsHelp: false },
    { id: "2", name: "Priya Sharma", email: "priya@example.com", mastery: 94, completedSets: 18, lastActive: "Yesterday", needsHelp: false },
    { id: "3", name: "Rohan Verma", email: "rohan@example.com", mastery: 48, completedSets: 6, lastActive: "3 days ago", needsHelp: true },
    { id: "4", name: "Ananya Iyer", email: "ananya@example.com", mastery: 76, completedSets: 12, lastActive: "Today", needsHelp: false },
    { id: "5", name: "Amit Patel", email: "amit@example.com", mastery: 52, completedSets: 8, lastActive: "2 days ago", needsHelp: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Teacher Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-purple-400 mb-1">
              <Users className="w-4 h-4" />
              <span>Teacher Portal • Classes IX-X</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Mrs. Jane Teacher's Classroom</h1>
            <p className="text-slate-400 text-sm mt-1">Manage cohorts, view student mastery, and assign targeted practice sets.</p>
          </div>

          <div className="flex items-center space-x-2">
            {["Class IX-A", "Class X-B"].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedClass(c)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedClass === c
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Class Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Total Enrolled</span>
          <span className="text-2xl font-bold text-white">32 Students</span>
          <span className="text-[10px] text-purple-400 block mt-1">Active in {selectedClass}</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Class Average Mastery</span>
          <span className="text-2xl font-bold text-emerald-400">70.4%</span>
          <span className="text-[10px] text-slate-400 block mt-1">+6% over previous week</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Attention Required</span>
          <span className="text-2xl font-bold text-rose-400">2 Students</span>
          <span className="text-[10px] text-rose-400/80 block mt-1">Struggling with Quadratic Equations</span>
        </div>
      </div>

      {/* Student Roster Table */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-white">Student Mastery Roster ({selectedClass})</h2>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search students..."
                className="bg-slate-900 border border-slate-800 rounded-xl py-1.5 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>
            <button className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center space-x-1 shadow-md shadow-purple-600/30 transition-colors">
              <Plus className="w-3.5 h-3.5" />
              <span>Assign Practice</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/60 text-slate-400 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-6">Student</th>
                <th className="py-3 px-6">Mastery Level</th>
                <th className="py-3 px-6">Practice Sets</th>
                <th className="py-3 px-6">Last Active</th>
                <th className="py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {students.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-semibold text-white block">{s.name}</span>
                    <span className="text-[10px] text-slate-500">{s.email}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${s.mastery >= 75 ? "bg-emerald-500" : s.mastery >= 60 ? "bg-indigo-500" : "bg-rose-500"}`}
                          style={{ width: `${s.mastery}%` }}
                        />
                      </div>
                      <span className="font-bold text-white">{s.mastery}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium">{s.completedSets} sets</td>
                  <td className="py-4 px-6 text-slate-400">{s.lastActive}</td>
                  <td className="py-4 px-6">
                    {s.needsHelp ? (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        <AlertCircle className="w-3 h-3" />
                        <span>Needs Attention</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>On Track</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
