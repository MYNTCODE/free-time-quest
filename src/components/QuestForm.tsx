import {
  energyOptions,
  intentionOptions,
  timeOptions,
} from '../data/activities';
import type {
  Language,
  QuestCriteria,
} from '../types';
import { OptionGroup } from './OptionGroup';

type QuestFormProps = {
  language: Language;
  criteria: QuestCriteria;
  onChange: (criteria: QuestCriteria) => void;
  onGenerate: () => void;
};

const copy = {
  th: {
    title: "เลือกข้อจำกัด",
    description: "ให้ใกล้กับสิ่งที่ทำได้จริงในตอนนี้",
    time: "เวลาที่มี",
    energy: "พลังงาน",
    intention: "อารมณ์หรือความตั้งใจ",
    generate: "สุ่มเควสต์",
  },
  en: {
    title: "Choose your constraints",
    description: "Keep it close to what you can actually do right now.",
    time: "Available time",
    energy: "Energy level",
    intention: "Mood or intention",
    generate: "Generate quest",
  },
} satisfies Record<Language, Record<string, string>>;

export function QuestForm({ language, criteria, onChange, onGenerate }: QuestFormProps) {
  const text = copy[language];

  return (
    <section className="controlsPanel" aria-labelledby="quest-controls">
      <div className="controlsHeader">
        <h2 id="quest-controls">{text.title}</h2>
        <p>{text.description}</p>
      </div>

      <div className="form-grid">
        <OptionGroup
          label={text.time}
          tone="time"
          value={criteria.time}
          options={timeOptions.map((option) => ({ ...option, label: option.label[language] }))}
          onChange={(time) => onChange({ ...criteria, time })}
        />
        <OptionGroup
          label={text.energy}
          tone="energy"
          value={criteria.energy}
          options={energyOptions.map((option) => ({ ...option, label: option.label[language] }))}
          onChange={(energy) => onChange({ ...criteria, energy })}
        />
        <OptionGroup
          label={text.intention}
          tone="intention"
          value={criteria.intention}
          options={intentionOptions.map((option) => ({ ...option, label: option.label[language] }))}
          onChange={(intention) => onChange({ ...criteria, intention })}
        />
      </div>

      <button className="primaryButton full-width" type="button" onClick={onGenerate}>
        {text.generate}
      </button>
    </section>
  );
}
