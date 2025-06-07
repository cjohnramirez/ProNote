import { tag } from "./tags";

// 0 and 1 indicates yes or no, 2 indicates neither
type daysOfWeekCondition = 0 | 1 | 2;
type daysOfWeek = [
  daysOfWeekCondition,
  daysOfWeekCondition,
  daysOfWeekCondition,
  daysOfWeekCondition,
  daysOfWeekCondition,
  daysOfWeekCondition,
  daysOfWeekCondition
];

export interface habit {
  id: number;
  tag: tag;
  daysOfWeek: daysOfWeek;
  habitGroup: habitGroup;
}

export interface habitGroup {
  id: number;
  name: string;
}
