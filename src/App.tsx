import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ActivityCard } from './components/ActivityCard';
import { AppHeader } from './components/AppHeader';
import { HistoryList } from './components/HistoryList';
import { QuestForm } from './components/QuestForm';
import {
  activities,
  timeOptions,
} from './data/activities';
import type {
  Activity,
  CompletedActivity,
  QuestCriteria,
  Theme,
} from './types';
import {
  loadHistory,
  loadTheme,
  saveHistory,
  saveTheme,
} from './utils/storage';

const defaultCriteria: QuestCriteria = {
  time: "standard",
  energy: "medium",
  intention: "focus",
};

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
  const [criteria, setCriteria] = useState<QuestCriteria>(defaultCriteria);
  const [activity, setActivity] = useState<Activity>(() => pickRandomActivity(defaultCriteria));
  const [history, setHistory] = useState<CompletedActivity[]>(loadHistory);

  const matchingCount = useMemo(() => getActivityPool(criteria).length, [criteria]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

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

  return (
    <div className="page">
      <div className="appFrame">
        <AppHeader theme={theme} completedCount={history.length} onToggleTheme={toggleTheme} />

        <main className="layout">
          <div className="primary-column">
            <QuestForm criteria={criteria} onChange={setCriteria} onGenerate={generateQuest} />
            <ActivityCard activity={activity} onComplete={completeActivity} />
          </div>

          <aside className="side-column">
            <section className="panel statCard">
              <h2>Current match</h2>
              <dl>
                <div>
                  <dt>Pool</dt>
                  <dd>{matchingCount || activities.length} activities</dd>
                </div>
                <div>
                  <dt>Completed</dt>
                  <dd>{history.length} completed</dd>
                </div>
              </dl>
            </section>
            <HistoryList history={history} onClear={clearHistory} />
          </aside>
        </main>

        <footer className="appFooter">Created by MYNTP</footer>
      </div>
    </div>
  );
}
