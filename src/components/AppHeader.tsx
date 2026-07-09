import type { Theme } from '../types';

type AppHeaderProps = {
  theme: Theme;
  completedCount: number;
  onToggleTheme: () => void;
};

export function AppHeader({ theme, completedCount, onToggleTheme }: AppHeaderProps) {
  return (
    <header className="heroCard">
      <div>
        <p className="eyebrow">FREE TIME QUEST</p>
        <h1>Pick your next free-time quest.</h1>
        <p className="heroSubtitle">Choose your time, energy, and mood. We’ll suggest something that fits.</p>
      </div>

      <div className="header-actions">
        <span className="badge">{completedCount} completed</span>
        <button className="button button-secondary" type="button" onClick={onToggleTheme}>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </header>
  );
}
