import React from 'react';
import { 
  Cpu, 
  Timer, 
  UserCheck, 
  Trophy, 
  BookOpen, 
  CheckCircle, 
  HelpCircle,
  Moon, 
  Sun, 
  Send
} from 'lucide-react';
import { AVAILABLE_SHEETS } from '../data/examData';

interface ExamHeaderProps {
  currentUser: { userName: string; studentId: string };
  selectedSheetId: string;
  onSelectSheet: (sheetId: string) => void;
  activeTab: 'exam' | 'practice' | 'reference' | 'scoreboard';
  setActiveTab: (tab: 'exam' | 'practice' | 'reference' | 'scoreboard') => void;
  timeRemainingSeconds: number;
  isExamSubmitted: boolean;
  onOpenUserModal: () => void;
  onSubmitExam: () => void;
  answeredCount: number;
  totalQuestions: number;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  currentUser,
  selectedSheetId,
  onSelectSheet,
  activeTab,
  setActiveTab,
  timeRemainingSeconds,
  isExamSubmitted,
  onOpenUserModal,
  onSubmitExam,
  answeredCount,
  totalQuestions,
  darkMode,
  setDarkMode,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemainingSeconds <= 300 && timeRemainingSeconds > 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar: Brand, Sheet selector & User profile */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-3 gap-3 border-b border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  CCS4207
                </span>
                <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  Embedded Systems — Section Sheets & Mock Exam Portal
                </h1>
              </div>
              {/* Module & Sheet Selector Tabs */}
              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                {AVAILABLE_SHEETS.map((sheet) => {
                  const isActive = selectedSheetId === sheet.id;
                  return (
                    <button
                      key={sheet.id}
                      type="button"
                      onClick={() => onSelectSheet(sheet.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {sheet.shortTitle}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2.5 self-end lg:self-center">
            {/* Countdown Timer */}
            {activeTab === 'exam' && !isExamSubmitted && (
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono font-bold text-sm ${
                isLowTime
                  ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-800 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
              }`}>
                <Timer className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{formatTime(timeRemainingSeconds)}</span>
              </div>
            )}

            {/* Submit Exam Button */}
            {activeTab === 'exam' && !isExamSubmitted && (
              <button
                type="button"
                onClick={onSubmitExam}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Exam</span>
              </button>
            )}

            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* User pill */}
            <button
              type="button"
              onClick={onOpenUserModal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors text-xs text-slate-700 dark:text-slate-300"
            >
              <UserCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-semibold max-w-[120px] truncate">{currentUser.userName}</span>
            </button>
          </div>
        </div>

        {/* Lower bar: Navigation Tabs */}
        <div className="flex items-center justify-between py-2 overflow-x-auto">
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('exam')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'exam'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>Exam Simulation</span>
              {activeTab === 'exam' && !isExamSubmitted && (
                <span className="ml-1 px-1.5 py-0.5 rounded-md bg-emerald-700/60 text-[10px] text-white">
                  {answeredCount}/{totalQuestions}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('practice')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'practice'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Study / Practice Mode</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reference')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'reference'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Reference Answer Key</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('scoreboard')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'scoreboard'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Scoreboard & Leaderboard</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
