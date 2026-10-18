"use client";

import Link from "next/link";
import { 
  Target, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Zap
} from "lucide-react";

export default function DiagnosticQuizPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 text-center">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-6 text-purple-400">
          <Target className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-4">
          CBSE Knowledge Gap Diagnostic
        </h1>

        <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          This 10-minute diagnostic test dynamically calibrates to find your exact baseline in Class IX-X Mathematics & Science. It identifies concepts you have mastered and highlights weak areas.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-8 text-left">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <Clock className="w-4 h-4 text-purple-400 mb-1" />
            <span className="text-xs text-slate-400 block">Duration</span>
            <span className="text-sm font-semibold text-white">10 Minutes</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <BrainCircuit className="w-4 h-4 text-indigo-400 mb-1" />
            <span className="text-xs text-slate-400 block">Questions</span>
            <span className="text-sm font-semibold text-white">7 Adaptive Items</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-xs text-slate-400 block">Feedback</span>
            <span className="text-sm font-semibold text-white">Instant Report</span>
          </div>
        </div>

        <Link
          href="/practice"
          className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/30 inline-flex items-center space-x-2 transition-all hover:scale-105"
        >
          <Zap className="w-4 h-4" />
          <span>Begin Diagnostic Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
