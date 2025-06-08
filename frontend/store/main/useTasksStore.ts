import { task, taskGroup } from "@/lib/main/tasks";
import { create } from "zustand";
import { user } from "@/lib/users";

interface tasksStore {
  tasks: task[];
  taskGroups: taskGroup[];
  taskCreators: user[];
  setTaskGroups: (taskGroups: taskGroup[]) => void;
  setTasks: (tasks: task[]) => void;
}

export const useTasksStore = create<tasksStore>()((set) => ({
  tasks: [
    {
      id: 0,
      title: "Paper Final Revision",
      comment: [],
      tag: { name: "Writing", color: "b2824c" },
      createdOn: "2025-03-17",
      createdBy: { name: "David Robinson", color: "fb64b6" },
      subtasks: [],
      taskGroup: { id: 0, name: "Main Tasks" },
    },
    {
      id: 1,
      title: "Draft Introduction Section",
      comment: [],
      tag: { name: "Mathematics", color: "cd2d31" },
      createdOn: "2025-04-06",
      createdBy: { name: "Katherine Graham", color: "50a2ff" },
      subtasks: [
        { title: "Research background", status: "Completed" },
        { title: "Write intro draft", status: "In Progress" },
        { title: "Review with peers", status: "Not Started" },
      ],
      taskGroup: { id: 0, name: "Main Tasks" },
    },
    {
      id: 2,
      title: "Review Thermo. Notes",
      comment: [],
      tag: { name: "Astronomy", color: "b2824c" },
      createdOn: "2025-04-12",
      createdBy: { name: "Natalie Moore", color: "ff637e" },
      subtasks: [
        { title: "Summarize Ch 1-3", status: "Completed" },

      ],
      taskGroup: { id: 0, name: "Main Tasks" },
    },
    {
      id: 3,
      title: "Fix API Bug in Booking Page",
      comment: ["Check error logs for more details."],
      tag: { name: "Coding", color: "c97d3b" },
      createdOn: "2025-05-02",
      createdBy: { name: "Sarah Green", color: "ff637e" },
      subtasks: [
        { title: "Debug API response", status: "Completed" },
        { title: "Fix error handling", status: "In Progress" },
      ],
      taskGroup: { id: 0, name: "Main Tasks" },
    },
    {
      id: 4,
      title: "Redesign Mobile UI for Booking",
      comment: ["Coordinate with UX designer."],
      tag: { name: "Coding", color: "c97d3b" },
      createdOn: "2025-05-15",
      createdBy: { name: "Sarah Green", color: "ff637e" },
      subtasks: [
        { title: "Update Figma mockups", status: "Completed" },
        { title: "Implement layout changes", status: "In Progress" },
        { title: "Mobile testing", status: "Not Started" },
      ],
      taskGroup: { id: 0, name: "Main Tasks" },
    },
    {
      id: 5,
      title: "Urgent Assignments (Cram)",
      comment: [],
      tag: { name: "Mathematics", color: "cd2d31" },
      createdOn: "2025-05-27",
      createdBy: { name: "Alice Lee", color: "f4a8ff" },
      subtasks: [
        { title: "Chemistry worksheet", status: "In Progress" },
        { title: "History essay", status: "Not Started" },
        { title: "Math problem set", status: "Not Started" },
      ],
      taskGroup: { id: 0, name: "Main Tasks" },
    },
    {
      id: 6,
      title: "Prepare Slides for Team Sync",
      comment: ["Include Q&A section."],
      tag: { name: "Work", color: "35530e" },
      createdOn: "2025-06-01",
      createdBy: { name: "Natalie Moore", color: "ff637e" },
      subtasks: [
        { title: "Gather updates from team", status: "Completed" },
        { title: "Design slide deck", status: "In Progress" },
      ],
      taskGroup: { id: 0, name: "Main Tasks" },
    },
  ],
  taskGroups: [
    { id: 0, name: "Main Tasks" },
    { id: 1, name: "Hobbies" },
  ],
  taskCreators: [
    { name: "David Robinson", color: "fb64b6" },
    { name: "Katherine Graham", color: "50a2ff" },
    { name: "Natalie Moore", color: "ff637e" },
    { name: "Sarah Green", color: "ff637e" },
    { name: "Alice Lee", color: "f4a8ff" },
  ],
  setTaskGroups: (newTaskGroups) => set(() => ({
    taskGroups: newTaskGroups,
  })),
  setTasks: (newTasks) => set(() => ({
    tasks: newTasks,
  })),
}));
