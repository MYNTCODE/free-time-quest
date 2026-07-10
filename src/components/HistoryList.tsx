import type {
  CompletedActivity,
  Language,
} from '../types';
import { getActivityTitle } from '../utils/localize';

type HistoryListProps = {
  language: Language;
  history: CompletedActivity[];
  onClear: () => void;
};

const copy = {
  th: {
    title: "ประวัติที่ทำเสร็จ",
    description: "บันทึกไว้บนอุปกรณ์นี้",
    clear: "ล้างประวัติ",
    empty: "ทำเควสต์ให้เสร็จเพื่อเริ่มบันทึกประวัติ",
    locale: "th-TH",
  },
  en: {
    title: "Completed history",
    description: "Saved on this device.",
    clear: "Clear",
    empty: "Complete a quest to start your history.",
    locale: "en-US",
  },
} satisfies Record<Language, Record<string, string>>;

export function HistoryList({ language, history, onClear }: HistoryListProps) {
  const text = copy[language];
  const formatter = new Intl.DateTimeFormat(text.locale, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="panel historyPanel" aria-labelledby="completed-history">
      <div className="history-header">
        <div>
          <h2 id="completed-history">{text.title}</h2>
          <p>{text.description}</p>
        </div>
        {history.length > 0 ? (
          <button className="button button-secondary compactButton" type="button" onClick={onClear}>
            {text.clear}
          </button>
        ) : null}
      </div>

      {history.length === 0 ? (
        <p className="empty-state">{text.empty}</p>
      ) : (
        <ul className="history-list">
          {history.map((entry) => (
            <li key={entry.id}>
              <strong>{getActivityTitle(entry.activity, language)}</strong>
              <span>{formatter.format(new Date(entry.completedAt))}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
