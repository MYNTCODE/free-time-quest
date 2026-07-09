import type { CompletedActivity, Theme } from "../types";

const historyKey = "free-time-quest:history";
const themeKey = "free-time-quest:theme";

export function loadTheme(): Theme {
  const savedTheme = localStorage.getItem(themeKey);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "dark";
}

export function saveTheme(theme: Theme): void {
  localStorage.setItem(themeKey, theme);
}

export function loadHistory(): CompletedActivity[] {
  const rawHistory = localStorage.getItem(historyKey);

  if (!rawHistory) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawHistory);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveHistory(history: CompletedActivity[]): void {
  localStorage.setItem(historyKey, JSON.stringify(history.slice(0, 20)));
}
