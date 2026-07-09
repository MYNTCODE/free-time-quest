import type { CompletedActivity } from "../types";

type HistoryListProps = {
  history: CompletedActivity[];
  onClear: () => void;
};

const formatter = new Intl.DateTimeFormat("th-TH", {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function HistoryList({ history, onClear }: HistoryListProps) {
  return (
    <section className="panel historyPanel" aria-labelledby="completed-history">
      <div className="history-header">
        <div>
          <h2 id="completed-history">Completed history</h2>
          <p>Saved on this device.</p>
        </div>
        {history.length > 0 ? (
          <button className="button button-secondary compactButton" type="button" onClick={onClear}>
            Clear
          </button>
        ) : null}
      </div>

      {history.length === 0 ? (
        <p className="empty-state">Complete a quest to start your history.</p>
      ) : (
        <ul className="history-list">
          {history.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.activity.title}</strong>
              <span>{formatter.format(new Date(entry.completedAt))}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
