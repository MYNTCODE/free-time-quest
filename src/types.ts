export type Theme = "light" | "dark";

export type Language = "th" | "en";

export type TimeOption = "quick" | "standard" | "deep";

export type EnergyLevel = "low" | "medium" | "high";

export type Intention = "restore" | "focus" | "create" | "move" | "connect" | "explore";

export type QuestCriteria = {
  time: TimeOption;
  energy: EnergyLevel;
  intention: Intention;
};

export type Activity = {
  id: string;
  minutes: number;
  energy: EnergyLevel[];
  intentions: Intention[];
  title: Record<Language, string>;
  summary: Record<Language, string>;
  steps: Record<Language, string[]>;
};

export type CompletedActivity = {
  id: string;
  completedAt: string;
  activity: Activity;
  criteria: QuestCriteria;
};
