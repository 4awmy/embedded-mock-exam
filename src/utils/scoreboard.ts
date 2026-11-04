export interface ScoreboardEntry {
  id: string;
  userName: string;
  studentId?: string;
  sheetId?: string;
  sheetTitle?: string;
  timestamp: number;
  mode: 'exam' | 'practice';
  tfScore: number;
  mcqScore: number;
  essayScore: number;
  totalScore: number;
  percentage: number;
  timeTakenSeconds: number;
  gradeBadge: string;
}

const STORAGE_KEY = 'embedded_mock_exam_scoreboard_v1';
const CURRENT_USER_KEY = 'embedded_mock_exam_user_v1';
const CLOUD_KV_TOPIC = 'ccs4207-embedded-scoreboard-2026';
const CLOUD_KV_URL = `https://ntfy.sh/${CLOUD_KV_TOPIC}`;

// Baseline cohort from CCIT CCS4207 class
const SEED_ENTRIES: ScoreboardEntry[] = [
  {
    id: "seed-1",
    userName: "Omar Metwally",
    studentId: "231006131",
    sheetId: "comprehensive",
    sheetTitle: "All Sheets Comprehensive Mock Exam",
    timestamp: Date.now() - 1000 * 60 * 60 * 2,
    mode: "exam",
    tfScore: 50,
    mcqScore: 49,
    essayScore: 120,
    totalScore: 219,
    percentage: 97.3,
    timeTakenSeconds: 3120,
    gradeBadge: "Distinction (A+)"
  },
  {
    id: "seed-2",
    userName: "Ahmed Mahmoud",
    studentId: "231006042",
    sheetId: "sheet-5",
    sheetTitle: "Sheet 5: ARM Architecture & TM4C123",
    timestamp: Date.now() - 1000 * 60 * 60 * 5,
    mode: "exam",
    tfScore: 10,
    mcqScore: 9,
    essayScore: 23,
    totalScore: 42,
    percentage: 93.3,
    timeTakenSeconds: 1240,
    gradeBadge: "Excellent (A)"
  },
  {
    id: "seed-3",
    userName: "Nour El-Din",
    studentId: "231006188",
    sheetId: "sheet-3",
    sheetTitle: "Sheet 3: Processors & DSPs",
    timestamp: Date.now() - 1000 * 60 * 60 * 12,
    mode: "exam",
    tfScore: 9,
    mcqScore: 10,
    essayScore: 22,
    totalScore: 41,
    percentage: 91.1,
    timeTakenSeconds: 1180,
    gradeBadge: "Very Good (B+)"
  },
  {
    id: "seed-4",
    userName: "Mariam Khaled",
    studentId: "231006095",
    sheetId: "sheet-4",
    sheetTitle: "Sheet 4: Digital Circuit Design & Optimization",
    timestamp: Date.now() - 1000 * 60 * 60 * 20,
    mode: "exam",
    tfScore: 10,
    mcqScore: 8,
    essayScore: 24,
    totalScore: 42,
    percentage: 93.3,
    timeTakenSeconds: 1450,
    gradeBadge: "Excellent (A)"
  },
  {
    id: "seed-5",
    userName: "Ziad Tarek",
    studentId: "231006220",
    sheetId: "sheet-1",
    sheetTitle: "Sheet 1: Intro to Embedded Systems",
    timestamp: Date.now() - 1000 * 60 * 60 * 24,
    mode: "practice",
    tfScore: 10,
    mcqScore: 10,
    essayScore: 25,
    totalScore: 45,
    percentage: 100.0,
    timeTakenSeconds: 980,
    gradeBadge: "Distinction (A+)"
  }
];

export function getScoreboard(): ScoreboardEntry[] {
  if (typeof window === 'undefined') return SEED_ENTRIES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ENTRIES));
      return SEED_ENTRIES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_ENTRIES;
  } catch {
    return SEED_ENTRIES;
  }
}

export function saveScoreboard(entries: ScoreboardEntry[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    console.error('Failed to save local scoreboard:', e);
  }
}

export async function broadcastScoreToCloud(entry: ScoreboardEntry): Promise<void> {
  try {
    await fetch(CLOUD_KV_URL, {
      method: 'POST',
      headers: {
        'Title': `New Score: ${entry.userName} (${entry.percentage.toFixed(1)}%)`,
        'Tags': 'mortarboard,tada',
        'X-Priority': '3',
      },
      body: JSON.stringify(entry)
    });
  } catch (e) {
    console.warn('Cloud scoreboard broadcast skipped (offline or blocked):', e);
  }
}

export function addScoreEntry(entry: ScoreboardEntry): ScoreboardEntry[] {
  const current = getScoreboard();
  const updated = [entry, ...current.filter(e => e.id !== entry.id)]
    .sort((a, b) => b.percentage - a.percentage || a.timeTakenSeconds - b.timeTakenSeconds);
  saveScoreboard(updated);
  broadcastScoreToCloud(entry);
  return updated;
}

export function getCurrentUser(): { userName: string; studentId: string } | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: { userName: string; studentId: string }): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.error('Failed to store current user:', e);
  }
}
