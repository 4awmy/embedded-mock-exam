import React from 'react';
import type { TrueFalseQuestion } from '../data/examData';
import { CheckCircle2, XCircle, BookOpen, Bookmark, Lightbulb } from 'lucide-react';

interface TFSectionProps {
  questions: TrueFalseQuestion[];
  userAnswers: Record<string, boolean>;
  onSelectAnswer: (id: string, answer: boolean) => void;
  showFeedback: boolean;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
  isExamSubmitted?: boolean;
}

export const TFSection: React.FC<TFSectionProps> = ({
  questions,
  userAnswers,
  onSelectAnswer,
  showFeedback,
  bookmarkedIds,
  onToggleBookmark,
  isExamSubmitted = false,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Part I: True or False Questions</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
              {questions.length} Questions • {questions.length} Points
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Mark whether each statement is True (T) or False (F). In Practice Mode, feedback appears as soon as you make a choice.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {questions.map((q) => {
          const selected = userAnswers[q.id];
          const hasAnswered = selected !== undefined;
          const isCorrect = selected === q.correctAnswer;
          const isBookmarked = bookmarkedIds.has(q.id);

          return (
            <div
              key={q.id}
              id={q.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                showFeedback && hasAnswered
                  ? isCorrect
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                    : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0">
                    Q{q.num}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-900/50">
                    {q.topic}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {q.lecture}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onToggleBookmark(q.id)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isBookmarked
                      ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                  title={isBookmarked ? 'Remove bookmark' : 'Bookmark question for review'}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Question Statement */}
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed mb-4">
                {q.question}
              </p>

              {/* True / False Buttons */}
              <div className="grid grid-cols-2 gap-3 max-w-xs">
                {/* True Button */}
                <button
                  type="button"
                  disabled={isExamSubmitted}
                  onClick={() => onSelectAnswer(q.id, true)}
                  className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
                    showFeedback && hasAnswered
                      ? selected === true
                        ? isCorrect
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                          : 'bg-rose-600 border-rose-600 text-white shadow-sm'
                        : q.correctAnswer === true
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-700 dark:text-emerald-300 ring-2 ring-emerald-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 opacity-60'
                      : selected === true
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>True (T)</span>
                  {showFeedback && hasAnswered && selected === true && (
                    isCorrect ? <CheckCircle2 className="w-4 h-4 text-white" /> : <XCircle className="w-4 h-4 text-white" />
                  )}
                  {showFeedback && hasAnswered && selected === false && q.correctAnswer === true && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  )}
                </button>

                {/* False Button */}
                <button
                  type="button"
                  disabled={isExamSubmitted}
                  onClick={() => onSelectAnswer(q.id, false)}
                  className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
                    showFeedback && hasAnswered
                      ? selected === false
                        ? isCorrect
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                          : 'bg-rose-600 border-rose-600 text-white shadow-sm'
                        : q.correctAnswer === false
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-700 dark:text-emerald-300 ring-2 ring-emerald-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 opacity-60'
                      : selected === false
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>False (F)</span>
                  {showFeedback && hasAnswered && selected === false && (
                    isCorrect ? <CheckCircle2 className="w-4 h-4 text-white" /> : <XCircle className="w-4 h-4 text-white" />
                  )}
                  {showFeedback && hasAnswered && selected === true && q.correctAnswer === false && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  )}
                </button>
              </div>

              {/* Feedback & Citation Box (Only shown once answered) */}
              {showFeedback && hasAnswered && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs animate-in fade-in duration-200">
                  <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold mr-1">Explanation:</span>
                      <span>{q.explanation}</span>
                    </div>
                  </div>

                  {q.quote && (
                    <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 italic">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>&ldquo;{q.quote}&rdquo; — <strong className="not-italic text-slate-700 dark:text-slate-300">{q.slideTitle}</strong></span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
