import { habit, habitGroup } from "@/lib/main/habits";
import { create } from "zustand";

interface habitsStore {
  habits: habit[];
  habitGroups: habitGroup[];
  setHabitGroups: (habitGroups: habitGroup[]) => void;
  setHabits: (habits: habit[]) => void;
}

export const useHabitsStore = create<habitsStore>()((set) => ({
  habits: [
    {
      id: 1,
      tag: { name: "Psychology", color: "82181a" },
      daysOfWeek: [1, 1, 1, 1, 1, 0, 0],
      habitGroup: { id: 1, name: "Mind" },
    },
    {
      id: 2,
      tag: { name: "Mathematics", color: "8a0194" },
      daysOfWeek: [1, 0, 1, 0, 1, 0, 1],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 3,
      tag: { name: "Philosophy", color: "372aac" },
      daysOfWeek: [0, 1, 0, 1, 0, 1, 0],
      habitGroup: { id: 1, name: "Mind" },
    },
    {
      id: 4,
      tag: { name: "Biology", color: "973c00" },
      daysOfWeek: [1, 1, 0, 0, 1, 1, 0],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 5,
      tag: { name: "Astronomy", color: "005f5a" },
      daysOfWeek: [0, 0, 1, 1, 0, 1, 1],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 6,
      tag: { name: "Writing", color: "005f5a" },
      daysOfWeek: [1, 0, 1, 0, 1, 0, 1],
      habitGroup: { id: 3, name: "Creativity" },
    },
    {
      id: 7,
      tag: { name: "Coding", color: "a3004c" },
      daysOfWeek: [1, 1, 1, 1, 1, 1, 1],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 8,
      tag: { name: "Work", color: "35530e" },
      daysOfWeek: [1, 1, 1, 1, 1, 0, 0],
      habitGroup: { id: 4, name: "Productivity" },
    },
  ],
  habitGroups: [
    { id: 1, name: "Mind" },
    { id: 2, name: "STEM" },
    { id: 3, name: "Creativity" },
    { id: 4, name: "Productivity" },
  ],
  setHabitGroups: (newHabitGroups) =>
    set(() => ({
      habitGroups: newHabitGroups,
    })),
  setHabits: (newHabits) =>
    set(() => ({
      habits: newHabits,
    })),
}));
