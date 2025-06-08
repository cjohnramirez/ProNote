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
      tag: { name: "Psychology", color: "3746ef" },
      daysOfWeek: [2, 1, 1, 2, 1, 0, 0],
      habitGroup: { id: 1, name: "Mind" },
    },
    {
      id: 2,
      tag: { name: "Mathematics", color: "cd2d31" },
      daysOfWeek: [1, 2, 1, 0, 2, 0, 1],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 3,
      tag: { name: "Philosophy", color: "2a8d6a" },
      daysOfWeek: [0, 2, 0, 1, 0, 2, 0],
      habitGroup: { id: 1, name: "Mind" },
    },
    {
      id: 4,
      tag: { name: "Biology", color: "a42fa2" },
      daysOfWeek: [2, 1, 0, 0, 2, 1, 0],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 5,
      tag: { name: "Astronomy", color: "b2824c" },
      daysOfWeek: [0, 0, 2, 1, 0, 2, 1],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 6,
      tag: { name: "Writing", color: "b2824c" },
      daysOfWeek: [1, 0, 2, 0, 1, 0, 2],
      habitGroup: { id: 3, name: "Creativity" },
    },
    {
      id: 7,
      tag: { name: "Coding", color: "c97d3b" },
      daysOfWeek: [2, 2, 1, 2, 1, 2, 1],
      habitGroup: { id: 2, name: "STEM" },
    },
    {
      id: 8,
      tag: { name: "Work", color: "e8336f" },
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
