"use client";

import { useState } from "react";
import { MOCK_QUESTIONS, MockQuestion } from "@/services/questions";
import { 
  BrainCircuit, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Sparkles,
  Zap,
  ChevronRight
} from "lucide-react";

export default function PracticeEnginePage() {
  const [questions, setQuestions] = useState<MockQuestion[]>(MOCK_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (text: string) => {
    if (isAnswered) return;
    setSelectedOption(text);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswered) return;

    const correct = selectedOption === currentQ.correctAnswer;
    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + (currentQ.difficultyScore * 10));
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleResetSession = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-indigo-500/30 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6 text-indigo-400">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2">Practice Session Complete!</h2>
          <p className="text-slate-400 text-sm mb-8">
            You successfully completed all adaptive practice questions for this set.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Total Score</span>
              <span className="text-2xl font-bold text-indigo-400">+{score} XP</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Max Streak</span>
              <span className="text-2xl font-bold text-amber-400">{streak} In a Row</span>
            </div>
          </div>

          <button
            onClick={handleResetSession}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 inline-flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Practise Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Engine Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-400 mb-1">
            <BrainCircuit className="w-4 h-4" />
            <span>Adaptive Engine • {currentQ.subject}</span>
          </div>
          <h1 className="text-xl font-bold text-white">{currentQ.topicName}</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">Score</span>
            <span className="text-sm font-bold text-indigo-400">{score} XP</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">Streak</span>
            <span className="text-sm font-bold text-amber-400">🔥 {streak}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-8">
        <div 
          className="bg-indigo-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
            currentQ.difficultyScore === 1
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : currentQ.difficultyScore === 3
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
          }`}>
            {currentQ.difficulty.name} (L{currentQ.difficultyScore})
          </span>
        </div>

        {/* Content */}
        <div className="text-lg sm:text-xl font-medium text-white mb-8 leading-relaxed">
          {currentQ.content}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQ.options?.map((opt, idx) => {
            const isSelected = selectedOption === opt.text;
            let optStyle = "bg-slate-900/60 border-slate-800 text-slate-200 hover:border-slate-700";

            if (isAnswered) {
              if (opt.text === currentQ.correctAnswer) {
                optStyle = "bg-emerald-500/15 border-emerald-500/50 text-emerald-200 font-semibold";
              } else if (isSelected && !isCorrect) {
                optStyle = "bg-rose-500/15 border-rose-500/50 text-rose-200";
              } else {
                optStyle = "bg-slate-900/30 border-slate-850 text-slate-500 opacity-60";
              }
            } else if (isSelected) {
              optStyle = "bg-indigo-600/20 border-indigo-500 text-white font-medium ring-1 ring-indigo-500";
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.text)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all ${optStyle}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-semibold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm">{opt.text}</span>
                </div>
                {isAnswered && opt.text === currentQ.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hint Section */}
        {currentQ.hint && !isAnswered && (
          <div className="mb-6">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Need a hint?</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start space-x-2">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{currentQ.hint}</span>
              </div>
            )}
          </div>
        )}

        {/* Worked Explanation after answering */}
        {isAnswered && (
          <div className={`p-4 sm:p-5 rounded-2xl mb-6 border ${
            isCorrect 
              ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-200" 
              : "bg-indigo-950/20 border-indigo-500/20 text-indigo-200"
          }`}>
            <div className="flex items-center space-x-2 mb-2 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Step-by-Step Worked Solution:</span>
            </div>
            <div className="text-xs leading-relaxed whitespace-pre-line text-slate-300 font-mono bg-slate-950/50 p-3 rounded-lg border border-slate-800/80">
              {currentQ.explanation}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-end">
          {!isAnswered ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02]"
            >
              <span>Submit Answer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition-all hover:scale-105"
            >
              <span>{currentIndex + 1 < questions.length ? "Next Question" : "Finish Practice"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
