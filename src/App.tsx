import { useState, useEffect } from 'react';
import { 
  AVAILABLE_SHEETS, 
  type SheetBundle 
} from './data/examData';
import { 
  getCurrentUser, 
  getScoreboard, 
  addScoreEntry, 
  type ScoreboardEntry 
} from './utils/scoreboard';
import { ExamHeader } from './components/ExamHeader';
import { UserModal } from './components/UserModal';
import { TFSection } from './components/TFSection';
import { MCQSection } from './components/MCQSection';
import { EssaySection } from './components/EssaySection';
import { ScoreboardView } from './components/ScoreboardView';
import { ReferenceKeyView } from './components/ReferenceKeyView';
import { ExamResultsModal } from './components/ExamResultsModal';
import { 
  CheckCircle2, 
  HelpCircle, 
  FileText,
  Bookmark,
  Sparkles,
  ChevronRight,
  Layers
} from 'lucide-react';

interface SheetProgress {
  tf: Record<string, boolean>;
  mcq: Record<string, 'A' | 'B' | 'C' | 'D'>;
  essay: Record<string, string>;
  essayScores: Record<string, number>;
  bookmarks: Set<string>;
  timeRemaining: number;
  submitted: boolean;
  result: ScoreboardEntry | null;
}

const initialProgress = (timeLimitMinutes: number): SheetProgress => ({
  tf: {},
  mcq: {},
  essay: {},
  essayScores: {},
  bookmarks: new Set(),
  timeRemaining: timeLimitMinutes * 60,
  submitted: false,
  result: null
});

export function App() {
  // Dark mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Current user state
  const [currentUser, setUserState] = useState<{ userName: string; studentId: string } | null>(() => getCurrentUser());
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(!currentUser);

  // Active Sheet selection
  const [selectedSheetId, setSelectedSheetId] = useState<string>('comprehensive');
  const currentBundle: SheetBundle = AVAILABLE_SHEETS.find(s => s.id === selectedSheetId) || AVAILABLE_SHEETS[0];

  // Navigation state - Default to 'mcq' so MCQ questions are front-and-center!
  const [activeTab, setActiveTab] = useState<'exam' | 'practice' | 'reference' | 'scoreboard'>('exam');
  const [activeExamSection, setActiveExamSection] = useState<'all' | 'mcq' | 'essay' | 'tf'>('mcq');

  // Multi-sheet progress state map
  const [progressMap, setProgressMap] = useState<Record<string, SheetProgress>>(() => {
    const map: Record<string, SheetProgress> = {};
    AVAILABLE_SHEETS.forEach(sheet => {
      map[sheet.id] = initialProgress(sheet.metadata.timeLimitMinutes);
    });
    return map;
  });

  const currentProgress = progressMap[selectedSheetId] || initialProgress(currentBundle.metadata.timeLimitMinutes);

  const [showResultsModal, setShowResultsModal] = useState<boolean>(false);
  const [scoreboardEntries, setScoreboardEntries] = useState<ScoreboardEntry[]>(() => getScoreboard());

  // Timer countdown for exam mode
  useEffect(() => {
    if (activeTab !== 'exam' || currentProgress.submitted) return;

    const interval = setInterval(() => {
      setProgressMap(prev => {
        const cur = prev[selectedSheetId];
        if (!cur || cur.submitted) return prev;
        if (cur.timeRemaining <= 1) {
          clearInterval(interval);
          handleAutoSubmit(selectedSheetId);
          return {
            ...prev,
            [selectedSheetId]: { ...cur, timeRemaining: 0 }
          };
        }
        return {
          ...prev,
          [selectedSheetId]: { ...cur, timeRemaining: cur.timeRemaining - 1 }
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTab, selectedSheetId, currentProgress.submitted]);

  // Handlers for user interactions
  const handleSelectTF = (id: string, answer: boolean) => {
    setProgressMap(prev => {
      const cur = prev[selectedSheetId];
      return {
        ...prev,
        [selectedSheetId]: {
          ...cur,
          tf: { ...cur.tf, [id]: answer }
        }
      };
    });
  };

  const handleSelectMCQ = (id: string, option: 'A' | 'B' | 'C' | 'D') => {
    setProgressMap(prev => {
      const cur = prev[selectedSheetId];
      return {
        ...prev,
        [selectedSheetId]: {
          ...cur,
          mcq: { ...cur.mcq, [id]: option }
        }
      };
    });
  };

  const handleUpdateEssay = (id: string, text: string) => {
    setProgressMap(prev => {
      const cur = prev[selectedSheetId];
      return {
        ...prev,
        [selectedSheetId]: {
          ...cur,
          essay: { ...cur.essay, [id]: text }
        }
      };
    });
  };

  const handleUpdateEssayScore = (id: string, score: number) => {
    setProgressMap(prev => {
      const cur = prev[selectedSheetId];
      return {
        ...prev,
        [selectedSheetId]: {
          ...cur,
          essayScores: { ...cur.essayScores, [id]: score }
        }
      };
    });
  };

  const handleToggleBookmark = (id: string) => {
    setProgressMap(prev => {
      const cur = prev[selectedSheetId];
      const nextBookmarks = new Set(cur.bookmarks);
      if (nextBookmarks.has(id)) {
        nextBookmarks.delete(id);
      } else {
        nextBookmarks.add(id);
      }
      return {
        ...prev,
        [selectedSheetId]: {
          ...cur,
          bookmarks: nextBookmarks
        }
      };
    });
  };

  // Submit and grade logic
  const calculateResult = (sheetId: string, progress: SheetProgress): ScoreboardEntry => {
    const bundle = AVAILABLE_SHEETS.find(s => s.id === sheetId) || AVAILABLE_SHEETS[0];
    let tfScore = 0;
    bundle.tf.forEach(q => {
      if (progress.tf[q.id] === q.correctAnswer) tfScore += 1;
    });

    let mcqScore = 0;
    bundle.mcq.forEach(q => {
      if (progress.mcq[q.id] === q.correctOption) mcqScore += 1;
    });

    let essayScore = 0;
    bundle.essay.forEach(q => {
      essayScore += progress.essayScores[q.id] ?? 0;
    });

    const totalScore = tfScore + mcqScore + essayScore;
    const maxScore = bundle.metadata.totalPoints;
    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    let gradeBadge = "Pass (C)";
    if (percentage >= 95) gradeBadge = "Distinction (A+)";
    else if (percentage >= 90) gradeBadge = "Excellent (A)";
    else if (percentage >= 85) gradeBadge = "Very Good (B+)";
    else if (percentage >= 75) gradeBadge = "Good (B)";
    else if (percentage < 60) gradeBadge = "Fail (F)";

    const timeTaken = (bundle.metadata.timeLimitMinutes * 60) - progress.timeRemaining;

    return {
      id: `res-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      userName: currentUser?.userName || 'Anonymous Student',
      studentId: currentUser?.studentId || 'N/A',
      sheetId,
      sheetTitle: bundle.title,
      timestamp: Date.now(),
      mode: 'exam',
      tfScore,
      mcqScore,
      essayScore,
      totalScore,
      percentage,
      timeTakenSeconds: Math.max(10, timeTaken),
      gradeBadge
    };
  };

  const handleSubmitExam = () => {
    if (!currentUser) {
      setIsUserModalOpen(true);
      return;
    }

    const unattempted = (currentBundle.tf.length - Object.keys(currentProgress.tf).length) +
      (currentBundle.mcq.length - Object.keys(currentProgress.mcq).length);

    if (unattempted > 0) {
      if (!confirm(`You still have ${unattempted} unanswered question(s). Are you sure you want to finalize and submit?`)) {
        return;
      }
    }

    const result = calculateResult(selectedSheetId, currentProgress);
    const updatedScoreboard = addScoreEntry(result);
    setScoreboardEntries(updatedScoreboard);

    setProgressMap(prev => ({
      ...prev,
      [selectedSheetId]: {
        ...prev[selectedSheetId],
        submitted: true,
        result
      }
    }));

    setShowResultsModal(true);
  };

  const handleAutoSubmit = (sheetId: string) => {
    setProgressMap(prev => {
      const cur = prev[sheetId];
      if (cur.submitted) return prev;
      const result = calculateResult(sheetId, cur);
      const updatedScoreboard = addScoreEntry(result);
      setScoreboardEntries(updatedScoreboard);
      return {
        ...prev,
        [sheetId]: {
          ...cur,
          submitted: true,
          result
        }
      };
    });
    setShowResultsModal(true);
  };

  const handleRetakeExam = () => {
    setProgressMap(prev => ({
      ...prev,
      [selectedSheetId]: initialProgress(currentBundle.metadata.timeLimitMinutes)
    }));
    setShowResultsModal(false);
  };

  // Answered counter
  const answeredCount = Object.keys(currentProgress.tf).length + Object.keys(currentProgress.mcq).length;
  const totalQuestions = currentBundle.tf.length + currentBundle.mcq.length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <ExamHeader
        currentUser={currentUser || { userName: 'Guest Student', studentId: 'N/A' }}
        selectedSheetId={selectedSheetId}
        onSelectSheet={(sheetId) => {
          setSelectedSheetId(sheetId);
        }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        timeRemainingSeconds={currentProgress.timeRemaining}
        isExamSubmitted={currentProgress.submitted}
        onOpenUserModal={() => setIsUserModalOpen(true)}
        onSubmitExam={handleSubmitExam}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* VIEW: REFERENCE KEY */}
        {activeTab === 'reference' && (
          <ReferenceKeyView
            selectedSheetId={selectedSheetId}
            onSelectSheet={(id) => setSelectedSheetId(id)}
          />
        )}

        {/* VIEW: SCOREBOARD */}
        {activeTab === 'scoreboard' && (
          <ScoreboardView
            entries={scoreboardEntries}
            onTakeExam={() => setActiveTab('exam')}
            onRefresh={() => setScoreboardEntries(getScoreboard())}
          />
        )}

        {/* VIEW: EXAM SIMULATION OR PRACTICE MODE */}
        {(activeTab === 'exam' || activeTab === 'practice') && (
          <div className="space-y-6">
            {/* Context Notice / Mode Banner */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between flex-wrap gap-3 ${
              activeTab === 'exam'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60'
                : 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800/60'
            }`}>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${activeTab === 'exam' ? 'bg-emerald-500 animate-pulse' : 'bg-teal-500'}`} />
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                    {activeTab === 'exam' ? 'Timed Exam Simulation Mode' : 'Interactive Practice & Study Mode'}
                  </h2>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                  {activeTab === 'exam'
                    ? `Simulating official AAST examination conditions (${currentBundle.metadata.timeLimitMinutes} min countdown). Submit when completed.`
                    : 'Practice Mode is active. Questions remain untinted until you make your selection, after which instant explanations and model answers will appear!'}
                </p>
              </div>

              {/* Section Segment Tabs: MCQ / Essay / TF / All */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                <button
                  type="button"
                  onClick={() => setActiveExamSection('mcq')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    activeExamSection === 'mcq'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>MCQ ({currentBundle.mcq.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveExamSection('essay')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    activeExamSection === 'essay'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Essay & Design ({currentBundle.essay.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveExamSection('tf')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    activeExamSection === 'tf'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>True / False ({currentBundle.tf.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveExamSection('all')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                    activeExamSection === 'all'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>All Sections</span>
                </button>
              </div>
            </div>

            {/* Quick Question Jump Navigator */}
            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm no-print">
              <div className="flex items-center justify-between mb-2 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  Question Quick Jump:
                </span>
                <div className="flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded bg-emerald-600" /> Answered
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700" /> Unattempted
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-3 h-3 text-amber-500 fill-current" /> Bookmarked
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {(activeExamSection === 'mcq' || activeExamSection === 'all') && (
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10px] font-bold uppercase text-slate-400 mr-1">MCQ:</span>
                    {currentBundle.mcq.map((q) => {
                      const isAnswered = currentProgress.mcq[q.id] !== undefined;
                      const isBookmarked = currentProgress.bookmarks.has(q.id);
                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => {
                            const el = document.getElementById(q.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all relative flex items-center justify-center ${
                            isAnswered
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {q.num}
                          {isBookmarked && (
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {(activeExamSection === 'essay' || activeExamSection === 'all') && (
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10px] font-bold uppercase text-slate-400 mx-1">Essay:</span>
                    {currentBundle.essay.map((q) => {
                      const isAnswered = (currentProgress.essay[q.id] && currentProgress.essay[q.id].trim().length > 0) || currentProgress.essayScores[q.id] !== undefined;
                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => {
                            const el = document.getElementById(q.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                            isAnswered
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          Q{q.num}
                        </button>
                      );
                    })}
                  </div>
                )}

                {(activeExamSection === 'tf' || activeExamSection === 'all') && (
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10px] font-bold uppercase text-slate-400 mx-1">T/F:</span>
                    {currentBundle.tf.map((q) => {
                      const isAnswered = currentProgress.tf[q.id] !== undefined;
                      const isBookmarked = currentProgress.bookmarks.has(q.id);
                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => {
                            const el = document.getElementById(q.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all relative flex items-center justify-center ${
                            isAnswered
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {q.num}
                          {isBookmarked && (
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Render Sections */}
            {(activeExamSection === 'mcq' || activeExamSection === 'all') && (
              <MCQSection
                questions={currentBundle.mcq}
                userAnswers={currentProgress.mcq}
                onSelectOption={handleSelectMCQ}
                showFeedback={activeTab === 'practice' || currentProgress.submitted}
                bookmarkedIds={currentProgress.bookmarks}
                onToggleBookmark={handleToggleBookmark}
                isExamSubmitted={currentProgress.submitted}
              />
            )}

            {(activeExamSection === 'essay' || activeExamSection === 'all') && (
              <EssaySection
                questions={currentBundle.essay}
                userAnswers={currentProgress.essay}
                onUpdateAnswer={handleUpdateEssay}
                essayScores={currentProgress.essayScores}
                onUpdateScore={handleUpdateEssayScore}
                showFeedback={activeTab === 'practice' || currentProgress.submitted}
                isExamSubmitted={currentProgress.submitted}
              />
            )}

            {(activeExamSection === 'tf' || activeExamSection === 'all') && (
              <TFSection
                questions={currentBundle.tf}
                userAnswers={currentProgress.tf}
                onSelectAnswer={handleSelectTF}
                showFeedback={activeTab === 'practice' || currentProgress.submitted}
                bookmarkedIds={currentProgress.bookmarks}
                onToggleBookmark={handleToggleBookmark}
                isExamSubmitted={currentProgress.submitted}
              />
            )}

            {/* Bottom Submit Banner in Exam Mode */}
            {activeTab === 'exam' && !currentProgress.submitted && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h3 className="text-base font-extrabold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                    <span>Ready to submit your examination?</span>
                  </h3>
                  <p className="text-xs text-emerald-100 mt-1">
                    Answered: <strong>{answeredCount} of {totalQuestions}</strong> questions. Your answers will be graded instantly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSubmitExam}
                  className="px-6 py-3 rounded-2xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-sm shadow-md transition-all flex items-center gap-2 shrink-0"
                >
                  <span>Submit & View Results</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-center text-xs text-slate-500 dark:text-slate-400 no-print">
        <p>
          CCS4207 Embedded Systems Programming • Arab Academy for Science, Technology & Maritime Transport (AASTMT)
        </p>
        <p className="mt-1 text-[11px] text-slate-400">
          Source Material: Dr. Ehab Elsehely • Interactive Portal Built for Practice & Revision
        </p>
      </footer>

      {/* User Login Modal */}
      <UserModal
        isOpen={isUserModalOpen}
        onClose={(user) => {
          setUserState(user);
          setIsUserModalOpen(false);
        }}
        currentUser={currentUser}
      />

      {/* Exam Results Modal */}
      {currentProgress.result && (
        <ExamResultsModal
          isOpen={showResultsModal}
          userName={currentProgress.result.userName}
          sheetTitle={currentProgress.result.sheetTitle || currentBundle.title}
          tfScore={currentProgress.result.tfScore}
          mcqScore={currentProgress.result.mcqScore}
          essayScore={currentProgress.result.essayScore}
          totalScore={currentProgress.result.totalScore}
          maxScore={currentBundle.metadata.totalPoints}
          percentage={currentProgress.result.percentage}
          timeSpentSeconds={currentProgress.result.timeTakenSeconds}
          gradeBadge={currentProgress.result.gradeBadge}
          onReviewAnswers={() => {
            setShowResultsModal(false);
            setActiveTab('exam');
          }}
          onViewScoreboard={() => {
            setShowResultsModal(false);
            setActiveTab('scoreboard');
          }}
          onRetakeExam={handleRetakeExam}
        />
      )}
    </div>
  );
}

export default App;
