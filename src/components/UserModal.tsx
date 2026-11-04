import React, { useState } from 'react';
import { User, Cpu, ArrowRight, BookOpen } from 'lucide-react';
import { setCurrentUser } from '../utils/scoreboard';

interface UserModalProps {
  isOpen: boolean;
  onClose: (user: { userName: string; studentId: string }) => void;
  currentUser?: { userName: string; studentId: string } | null;
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, currentUser }) => {
  const [name, setName] = useState(currentUser?.userName || '');
  const [studentId, setStudentId] = useState(currentUser?.studentId || '');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name or student nickname');
      return;
    }
    const user = { userName: name.trim(), studentId: studentId.trim() || 'N/A' };
    setCurrentUser(user);
    onClose(user);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-inner">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Embedded Mastery</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">CCS4207 Embedded Systems Programming</p>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-4 mb-6 text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-3">
          <BookOpen className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span>
            Enter your name to launch the mock exam and practice portal. Your test attempts and scores will be recorded on the cohort leaderboard!
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Full Name / Nickname <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(''); }}
                placeholder="e.g. Omar Metwally"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                autoFocus
              />
            </div>
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Student ID (Optional)
            </label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="e.g. 231006131"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
          >
            <span>Enter Examination Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
