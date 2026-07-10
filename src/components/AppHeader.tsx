import type {
  Language,
  Theme,
} from '../types';

type AppHeaderProps = {
  theme: Theme;
  language: Language;
  completedCount: number;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
};

const copy = {
  th: {
    title: "เลือกเควสต์สำหรับเวลาว่าง",
    subtitle: "เลือกเวลา พลังงาน และอารมณ์ตอนนี้ แล้วเราจะมาสุ่มกิจกรรมกัน",
    completed: "เสร็จแล้ว",
    language: "EN",
    theme: { dark: "Light mode", light: "Dark mode" },
  },
  en: {
    title: "Pick your next free-time quest.",
    subtitle: "Choose your time, energy, and mood. We'll suggest something that fits.",
    completed: "completed",
    language: "TH",
    theme: { dark: "Light mode", light: "Dark mode" },
  },
} satisfies Record<Language, {
  title: string;
  subtitle: string;
  completed: string;
  language: string;
  theme: Record<Theme, string>;
}>;

export function AppHeader({ theme, language, completedCount, onToggleLanguage, onToggleTheme }: AppHeaderProps) {
  const text = copy[language];

  return (
    <header className="heroCard">
      <div>
        <p className="eyebrow">FREE TIME QUEST</p>
        <h1>{text.title}</h1>
        <p className="heroSubtitle">{text.subtitle}</p>
      </div>

      <div className="header-actions">
        <span className="badge">
          {completedCount} {text.completed}
        </span>
        <button className="button button-secondary" type="button" onClick={onToggleLanguage}>
          {text.language}
        </button>
        <button className="button button-secondary" type="button" onClick={onToggleTheme}>
          {text.theme[theme]}
        </button>
      </div>
    </header>
  );
}
