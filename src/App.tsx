import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ActivityCard } from './components/ActivityCard';
import { AppHeader } from './components/AppHeader';
import { CustomCursor } from './components/CustomCursor';
import { HistoryList } from './components/HistoryList';
import { QuestForm } from './components/QuestForm';
import {
  activities,
  timeOptions,
} from './data/activities';
import type {
  Activity,
  CompletedActivity,
  Language,
  QuestCriteria,
  Theme,
} from './types';
import {
  loadHistory,
  loadLanguage,
  loadTheme,
  saveHistory,
  saveLanguage,
  saveTheme,
} from './utils/storage';

const defaultCriteria: QuestCriteria = {
  time: "standard",
  energy: "medium",
  intention: "focus",
};

const copy = {
  th: {
    currentMatch: "กิจกรรมที่ตรงเงื่อนไข",
    pool: "ตัวเลือกทั้งหมด",
    activities: "กิจกรรม",
    completed: "ทำแล้ว",
    completedUnit: "รายการ",
  },
  en: {
    currentMatch: "Current match",
    pool: "Pool",
    activities: "activities",
    completed: "Completed",
    completedUnit: "completed",
  },
} satisfies Record<Language, Record<string, string>>;

function getActivityPool(criteria: QuestCriteria): Activity[] {
  const selectedTime = timeOptions.find((option) => option.value === criteria.time);
  const maxMinutes = selectedTime?.maxMinutes ?? 30;

  const strictMatches = activities.filter(
    (activity) =>
      activity.minutes <= maxMinutes &&
      activity.energy.includes(criteria.energy) &&
      activity.intentions.includes(criteria.intention),
  );

  if (strictMatches.length > 0) {
    return strictMatches;
  }

  return activities.filter(
    (activity) => activity.minutes <= maxMinutes && activity.intentions.includes(criteria.intention),
  );
}

function pickRandomActivity(criteria: QuestCriteria): Activity {
  const pool = getActivityPool(criteria);
  const fallbackPool = pool.length > 0 ? pool : activities;
  return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(loadTheme);
  const [language, setLanguage] = useState<Language>(loadLanguage);
  const [criteria, setCriteria] = useState<QuestCriteria>(defaultCriteria);
  const [activity, setActivity] = useState<Activity>(() => pickRandomActivity(defaultCriteria));
  const [history, setHistory] = useState<CompletedActivity[]>(loadHistory);

  const matchingCount = useMemo(() => getActivityPool(criteria).length, [criteria]);
  const text = copy[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    saveLanguage(language);
  }, [language]);

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  function generateQuest() {
    setActivity(pickRandomActivity(criteria));
  }

  function completeActivity() {
    const completedActivity: CompletedActivity = {
      id: `${activity.id}-${Date.now()}`,
      completedAt: new Date().toISOString(),
      activity,
      criteria,
    };

    setHistory((currentHistory) => [completedActivity, ...currentHistory].slice(0, 20));
    setActivity(pickRandomActivity(criteria));
  }

  function clearHistory() {
    setHistory([]);
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "th" : "en"));
  }

  return (
    <div className="page">
      <CustomCursor />
      <div className="appFrame">
        <AppHeader
          theme={theme}
          language={language}
          completedCount={history.length}
          onToggleLanguage={toggleLanguage}
          onToggleTheme={toggleTheme}
        />

        <main className="layout">
          <div className="primary-column">
            <QuestForm language={language} criteria={criteria} onChange={setCriteria} onGenerate={generateQuest} />
            <ActivityCard language={language} activity={activity} onComplete={completeActivity} />
          </div>

          <aside className="side-column">
            <section className="panel statCard">
              <h2>{text.currentMatch}</h2>
              <dl>
                <div>
                  <dt>{text.pool}</dt>
                  <dd>
                    {matchingCount || activities.length} {text.activities}
                  </dd>
                </div>
                <div>
                  <dt>{text.completed}</dt>
                  <dd>
                    {history.length} {text.completedUnit}
                  </dd>
                </div>
              </dl>
            </section>
            <HistoryList language={language} history={history} onClear={clearHistory} />
          </aside>
        </main>

        <footer className="appFooter">Created by MYNTP</footer>
      </div>
    </div>
  );
}
