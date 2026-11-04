import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Clock, ArrowRight, RotateCcw } from 'lucide-react';

interface ExamResultsModalProps {
  isOpen: boolean;
  userName: string;
  sheetTitle: string;
  tfScore: number;
  mcqScore: number;
  essayScore: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
  timeSpentSeconds: number;
  gradeBadge: string;
  onReviewAnswers: () => void;
  onViewScoreboard: () => void;
  onRetakeExam: () => void;
}

export const ExamResultsModal: React.FC<ExamResultsModalProps> = ({
  isOpen,
  userName,
  sheetTitle,
  tfScore,
  mcqScore,
  essayScore,
  totalScore,
  maxScore,
  percentage,
  timeSpentSeconds,
  gradeBadge,
  onReviewAnswers,
  onViewScoreboard,
  onRetakeExam,
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const isPass = percentage >= 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 overflow-hidden text-center">
        {/* Badge icon */}
        <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30 mb-4">
          <Trophy className="w-8 h-8" />
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
          {isPass ? 'Congratulations, ' : 'Exam Completed, '} {userName}!
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          {sheetTitle}
        </p>

        {/* Big percentage & grade badge */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 mb-6">
          <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2">
            {percentage.toFixed(1)}%
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            {gradeBadge}
          </div>
        </div>

        {/* Breakdown grid */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">True/False</span>
            <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">{tfScore} pts</span>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">MCQ</span>
            <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">{mcqScore} pts</span>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Essay/Design</span>
            <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">{essayScore} pts</span>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Total Score</span>
            <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{totalScore}/{maxScore}</span>
          </div>
        </div>

        {/* Time spent */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
          <Clock className="w-3.5 h-3.5" />
          <span>Elapsed Time: {formatTime(timeSpentSeconds)}</span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={onReviewAnswers}
            className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors"
          >
            Review Answers
          </button>
          <button
            type="button"
            onClick={onRetakeExam}
            className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Exam</span>
          </button>
          <button
            type="button"
            onClick={onViewScoreboard}
            className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-1.5"
          >
            <span>Scoreboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
