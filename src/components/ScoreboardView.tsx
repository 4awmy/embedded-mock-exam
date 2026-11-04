import React, { useState } from 'react';
import type { ScoreboardEntry } from '../utils/scoreboard';
import { Trophy, Search, RefreshCw, Play, Clock, Medal } from 'lucide-react';

interface ScoreboardViewProps {
  entries: ScoreboardEntry[];
  onTakeExam: () => void;
  onRefresh: () => void;
}

export const ScoreboardView: React.FC<ScoreboardViewProps> = ({
  entries,
  onTakeExam,
  onRefresh,
}) => {
  const [search, setSearch] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'exam' | 'practice'>('all');

  const filtered = entries.filter((entry) => {
    const matchName = entry.userName.toLowerCase().includes(search.toLowerCase()) ||
      (entry.studentId && entry.studentId.includes(search));
    const matchMode = filterMode === 'all' || entry.mode === filterMode;
    return matchName && matchMode;
  });

  const avgScore = entries.length > 0 
    ? Math.round(entries.reduce((acc, cur) => acc + cur.totalScore, 0) / entries.length) 
    : 0;
  const highScore = entries.length > 0 
    ? Math.max(...entries.map(e => e.totalScore)) 
    : 0;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="space-y-6">
      {/* Header & Stats Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-500" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              CCS4207 Embedded Systems Scoreboard & Leaderboard
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Real-time rankings and assessment results across all section sheet mock examinations.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onRefresh}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
            title="Refresh Leaderboard"
          >
            <RefreshCw className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Refresh</span>
          </button>
          <button
            type="button"
            onClick={onTakeExam}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Take An Exam Now</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">Total Submissions</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">{entries.length}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">Top Cohort Score</span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{highScore} pts</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center">
            <Medal className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">Average Score</span>
            <span className="text-2xl font-black text-slate-700 dark:text-slate-300">{avgScore} pts</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student name or ID..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
          <button
            type="button"
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              filterMode === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            All Modes
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('exam')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              filterMode === 'exam'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Exam Simulation
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('practice')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              filterMode === 'practice'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Practice Mode
          </button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/75 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider">
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Student</th>
              <th className="py-3 px-4">Module / Exam</th>
              <th className="py-3 px-4">Score</th>
              <th className="py-3 px-4">Percentage</th>
              <th className="py-3 px-4">Time Taken</th>
              <th className="py-3 px-4">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
            {filtered.map((entry, index) => {
              const isTop1 = index === 0;
              const isTop2 = index === 1;
              const isTop3 = index === 2;

              return (
                <tr
                  key={entry.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold">
                    {isTop1 ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                        🥇 1
                      </span>
                    ) : isTop2 ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                        🥈 2
                      </span>
                    ) : isTop3 ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-900/10 text-amber-800 dark:text-amber-400">
                        🥉 3
                      </span>
                    ) : (
                      <span className="text-slate-400 pl-2">#{index + 1}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    <div>{entry.userName}</div>
                    {entry.studentId && entry.studentId !== 'N/A' && (
                      <span className="text-[10px] text-slate-400 font-mono">ID: {entry.studentId}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-600 dark:text-slate-300">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {entry.sheetTitle || 'Section Assessment'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900 dark:text-white">
                    {entry.totalScore} pts
                  </td>
                  <td className="py-3.5 px-4 font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                    {entry.percentage.toFixed(1)}%
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-slate-500">
                    {formatTime(entry.timeTakenSeconds)}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {entry.gradeBadge}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
