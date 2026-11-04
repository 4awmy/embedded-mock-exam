import React, { useState } from 'react';
import type { EssayQuestion } from '../data/examData';
import { BookOpen, CheckSquare, ChevronDown, ChevronUp, Award, PenLine } from 'lucide-react';

interface EssaySectionProps {
  questions: EssayQuestion[];
  userAnswers: Record<string, string>;
  onUpdateAnswer: (id: string, text: string) => void;
  essayScores: Record<string, number>;
  onUpdateScore: (id: string, score: number) => void;
  showFeedback: boolean;
  isExamSubmitted?: boolean;
}

export const EssaySection: React.FC<EssaySectionProps> = ({
  questions,
  userAnswers,
  onUpdateAnswer,
  essayScores,
  onUpdateScore,
  showFeedback: _showFeedback,
  isExamSubmitted: _isExamSubmitted = false,
}) => {
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  const toggleSolution = (id: string) => {
    setExpandedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Part III: Short Essay, Problem Solving & Design Questions</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
              {questions.length} Questions • {questions.reduce((a, b) => a + b.maxPoints, 0)} Points Total
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Formulate your response below. Once answered, toggle the official model answer and grading rubric to self-evaluate your solution.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q) => {
          const currentAnswer = userAnswers[q.id] || '';
          const currentScore = essayScores[q.id] ?? 0;
          const isExpanded = !!expandedSolutions[q.id];
          const hasWritten = currentAnswer.trim().length > 0;

          return (
            <div
              key={q.id}
              id={q.id}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    Q{q.num}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/50">
                    {q.topic}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {q.lecture}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold shrink-0">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>Max: {q.maxPoints} pts</span>
                </div>
              </div>

              {/* Question text */}
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed mb-4">
                {q.question}
              </h3>

              {/* Student answer area */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <PenLine className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your Written Response:</span>
                  </span>
                  {hasWritten && (
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      ✓ Response saved
                    </span>
                  )}
                </label>
                <textarea
                  value={currentAnswer}
                  onChange={(e) => onUpdateAnswer(q.id, e.target.value)}
                  placeholder="Type your explanation, logic design steps, or equations here..."
                  rows={4}
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono leading-relaxed resize-y"
                />
              </div>

              {/* Toggle Model Answer */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => toggleSolution(q.id)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1.5 transition-colors py-1.5 px-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isExpanded ? 'Hide Official Model Answer & Rubric' : 'Reveal Official Model Answer & Rubric'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {hasWritten && !isExpanded && (
                    <span className="text-[11px] text-slate-500 italic">
                      Click reveal to compare your written response with the professor's solution.
                    </span>
                  )}
                </div>

                {isExpanded && (
                  <div className="mt-4 space-y-4 text-xs animate-in fade-in duration-200">
                    {/* Model Answer Box */}
                    <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 text-slate-800 dark:text-slate-200">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-1.5">
                        <CheckSquare className="w-4 h-4" />
                        <span>Official Model Answer:</span>
                      </div>
                      <div className="whitespace-pre-line font-mono text-[11px] sm:text-xs leading-relaxed text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                        {q.modelAnswer}
                      </div>
                    </div>

                    {/* Key Evaluation Points */}
                    {q.keyPoints && q.keyPoints.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                        <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                          Essential Key Points Required:
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                          {q.keyPoints.map((kp, idx) => (
                            <li key={idx} className="leading-relaxed">{kp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Self Scoring Rubric */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          Self-Scoring Criteria:
                        </span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          Current Score: {currentScore} / {q.maxPoints} pts
                        </span>
                      </div>
                      <div className="space-y-1.5 mb-3">
                        {q.rubric.map((r, rIdx) => (
                          <div key={rIdx} className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                            <span>• {r.criteria}</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200 shrink-0 ml-2">
                              {r.points} pt{r.points > 1 ? 's' : ''}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Score slider/buttons */}
                      <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-slate-200 dark:border-slate-700">
                        <span className="text-[11px] font-semibold text-slate-500 mr-1">Award Points:</span>
                        {Array.from({ length: q.maxPoints + 1 }, (_, i) => i).map((pt) => (
                          <button
                            key={pt}
                            type="button"
                            onClick={() => onUpdateScore(q.id, pt)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                              currentScore === pt
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                            }`}
                          >
                            {pt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
