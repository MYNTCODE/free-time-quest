import type { Activity } from "../types";

type ActivityCardProps = {
  activity: Activity;
  onComplete: () => void;
};

export function ActivityCard({ activity, onComplete }: ActivityCardProps) {
  return (
    <section className="resultCard" aria-labelledby="current-quest">
      <div className="badge">{activity.minutes} นาที</div>
      <h2 id="current-quest">{activity.title}</h2>
      <p>{activity.summary}</p>

      <div className="steps">
        <h3>How to do it</h3>
        <ol>
          {activity.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <button className="primaryButton" type="button" onClick={onComplete}>
        Completed
      </button>
    </section>
  );
}
