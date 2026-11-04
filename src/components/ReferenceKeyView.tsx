import React, { useState } from 'react';
import { AVAILABLE_SHEETS } from '../data/examData';
import { BookOpen, Search, Printer, CheckCircle2, FileText, CheckSquare } from 'lucide-react';

interface ReferenceKeyViewProps {
  selectedSheetId: string;
  onSelectSheet: (id: string) => void;
}

export const ReferenceKeyView: React.FC<ReferenceKeyViewProps> = ({
  selectedSheetId,
  onSelectSheet,
}) => {
  const [search, setSearch] = useState('');
  const [sectionFilter, setSectionFilter] = useState<'all' | 'tf' | 'mcq' | 'essay'>('all');

  const currentBundle = AVAILABLE_SHEETS.find(s => s.id === selectedSheetId) || AVAILABLE_SHEETS[0];
  const { metadata, mcq, tf, essay } = currentBundle;

  const filteredTF = tf.filter(q => {
    if (sectionFilter !== 'all' && sectionFilter !== 'tf') return false;
    if (!search) return true;
    const term = search.toLowerCase();
    return q.question.toLowerCase().includes(term) ||
      q.explanation.toLowerCase().includes(term) ||
      q.topic.toLowerCase().includes(term);
  });

  const filteredMCQ = mcq.filter(q => {
    if (sectionFilter !== 'all' && sectionFilter !== 'mcq') return false;
    if (!search) return true;
    const term = search.toLowerCase();
    return q.question.toLowerCase().includes(term) ||
      q.explanation.toLowerCase().includes(term) ||
      q.topic.toLowerCase().includes(term);
  });

  const filteredEssay = essay.filter(q => {
    if (sectionFilter !== 'all' && sectionFilter !== 'essay') return false;
    if (!search) return true;
    const term = search.toLowerCase();
    return q.question.toLowerCase().includes(term) ||
      q.modelAnswer.toLowerCase().includes(term) ||
      q.topic.toLowerCase().includes(term);
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Official Reference Answer Key & Master Cheat Sheet
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {metadata.courseCode} — {metadata.examTitle} ({metadata.sourceDoc})
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
          >
            <Printer className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Print Study Guide</span>
          </button>
        </div>
      </div>

      {/* Sheet selection pills */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-slate-500 mr-1">Select Module:</span>
        {AVAILABLE_SHEETS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelectSheet(s.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedSheetId === s.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Filter and Search controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between no-print">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions, topics, formulas..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
          <button
            type="button"
            onClick={() => setSectionFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              sectionFilter === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            All Questions ({tf.length + mcq.length + essay.length})
          </button>
          <button
            type="button"
            onClick={() => setSectionFilter('tf')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              sectionFilter === 'tf'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            True/False ({tf.length})
          </button>
          <button
            type="button"
            onClick={() => setSectionFilter('mcq')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              sectionFilter === 'mcq'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            MCQ ({mcq.length})
          </button>
          <button
            type="button"
            onClick={() => setSectionFilter('essay')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              sectionFilter === 'essay'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Essay ({essay.length})
          </button>
        </div>
      </div>

      {/* Printable / View List */}
      <div className="space-y-6">
        {/* TF Section */}
        {filteredTF.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Part I: True/False Official Answers ({filteredTF.length})</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredTF.map((q) => (
                <div
                  key={q.id}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs space-y-2 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      Q{q.num}. {q.question}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md font-extrabold text-[11px] shrink-0 ${
                      q.correctAnswer
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {q.correctAnswer ? 'TRUE (T)' : 'FALSE (F)'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>Reason:</strong> {q.explanation}
                  </p>
                  <div className="text-[10px] text-slate-500 italic bg-slate-50 dark:bg-slate-800/50 p-1.5 rounded-md">
                    &ldquo;{q.quote}&rdquo; — {q.slideTitle} ({q.lecture})
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MCQ Section */}
        {filteredMCQ.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              <span>Part II: Multiple Choice Official Answers ({filteredMCQ.length})</span>
            </h3>
            <div className="space-y-3">
              {filteredMCQ.map((q) => (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs space-y-2.5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                      Q{q.num}. {q.question}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-extrabold text-xs shrink-0">
                      Option {q.correctOption}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-semibold">
                    ✓ {q.correctText}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>Explanation:</strong> {q.explanation}
                  </p>
                  <div className="text-[10px] text-slate-500 italic bg-slate-50 dark:bg-slate-800/50 p-1.5 rounded-md">
                    &ldquo;{q.quote}&rdquo; — {q.slideTitle} ({q.lecture})
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Essay Section */}
        {filteredEssay.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Part III: Essay & Problem Solving Model Answers ({filteredEssay.length})</span>
            </h3>
            <div className="space-y-4">
              {filteredEssay.map((q) => (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs space-y-3 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      Q{q.num}. {q.question}
                    </h4>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold shrink-0">
                      {q.maxPoints} pts
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1.5">
                      Model Answer:
                    </span>
                    <div className="whitespace-pre-line font-mono text-[11px] sm:text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      {q.modelAnswer}
                    </div>
                  </div>
                  {q.keyPoints && q.keyPoints.length > 0 && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                      <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Key Grading Criteria:
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400 text-[11px]">
                        {q.keyPoints.map((kp, i) => (
                          <li key={i}>{kp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
