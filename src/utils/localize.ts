import type { Activity, Language } from "../types";

type LegacyActivity = Omit<Activity, "title" | "summary" | "steps"> & {
  title: Activity["title"] | string;
  summary: Activity["summary"] | string;
  steps: Activity["steps"] | string[];
};

export function getActivityTitle(activity: Activity | LegacyActivity, language: Language): string {
  return typeof activity.title === "string" ? activity.title : activity.title[language];
}

export function getActivitySummary(activity: Activity | LegacyActivity, language: Language): string {
  return typeof activity.summary === "string" ? activity.summary : activity.summary[language];
}

export function getActivitySteps(activity: Activity | LegacyActivity, language: Language): string[] {
  return Array.isArray(activity.steps) ? activity.steps : activity.steps[language];
}

export function getNumberLocale(language: Language): string {
  return language === "th" ? "th-TH-u-nu-latn" : "en-US";
}

export function formatNumber(value: number, language: Language): string {
  return new Intl.NumberFormat(getNumberLocale(language)).format(value);
}
