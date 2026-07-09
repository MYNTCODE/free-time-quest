export type Theme = "light" | "dark";

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
  title: string;
  minutes: number;
  energy: EnergyLevel[];
  intentions: Intention[];
  summary: string;
  steps: string[];
};

export type CompletedActivity = {
  id: string;
  completedAt: string;
  activity: Activity;
  criteria: QuestCriteria;
};
