import { energyOptions, intentionOptions, timeOptions } from "../data/activities";
import type { QuestCriteria } from "../types";
import { OptionGroup } from "./OptionGroup";

type QuestFormProps = {
  criteria: QuestCriteria;
  onChange: (criteria: QuestCriteria) => void;
  onGenerate: () => void;
};

export function QuestForm({ criteria, onChange, onGenerate }: QuestFormProps) {
  return (
    <section className="controlsPanel" aria-labelledby="quest-controls">
      <div className="controlsHeader">
        <h2 id="quest-controls">Choose your constraints</h2>
        <p>Keep it close to what you can actually do right now.</p>
      </div>

      <div className="form-grid">
        <OptionGroup
          label="Available time"
          tone="time"
          value={criteria.time}
          options={timeOptions}
          onChange={(time) => onChange({ ...criteria, time })}
        />
        <OptionGroup
          label="Energy level"
          tone="energy"
          value={criteria.energy}
          options={energyOptions}
          onChange={(energy) => onChange({ ...criteria, energy })}
        />
        <OptionGroup
          label="Mood or intention"
          tone="intention"
          value={criteria.intention}
          options={intentionOptions}
          onChange={(intention) => onChange({ ...criteria, intention })}
        />
      </div>

      <button className="primaryButton full-width" type="button" onClick={onGenerate}>
        Generate quest
      </button>
    </section>
  );
}
