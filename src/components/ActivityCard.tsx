import type { Activity, Language } from "../types";
import {
  getActivitySteps,
  getActivitySummary,
  getActivityTitle,
} from "../utils/localize";

type ActivityCardProps = {
  language: Language;
  activity: Activity;
  onComplete: () => void;
};

const copy = {
  th: {
    minute: "นาที",
    stepsTitle: "วิธีทำ",
    completed: "ทำเสร็จแล้ว",
  },
  en: {
    minute: "min",
    stepsTitle: "How to do it",
    completed: "Completed",
  },
} satisfies Record<Language, Record<string, string>>;

export function ActivityCard({ language, activity, onComplete }: ActivityCardProps) {
  const text = copy[language];
  const steps = getActivitySteps(activity, language);

  return (
    <section className="resultCard" aria-labelledby="current-quest">
      <div className="badge">
        {activity.minutes} {text.minute}
      </div>
      <h2 id="current-quest">{getActivityTitle(activity, language)}</h2>
      <p>{getActivitySummary(activity, language)}</p>

      <div className="steps">
        <h3>{text.stepsTitle}</h3>
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <button className="primaryButton" type="button" onClick={onComplete}>
        {text.completed}
      </button>
    </section>
  );
}
