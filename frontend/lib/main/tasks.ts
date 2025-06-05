import { user } from "../users";
import { tag } from "./tags";

export interface taskGroup {
  id: number,
  name: string,
}

export interface task {
  id: number,
  title: string,
  comment: string[],
  tag: tag,
  createdOn: string,
  createdBy: user,
  subtasks: subTask[],
  taskGroup: taskGroup,
}

export interface subTask {
  title: string,
  status: "Completed" | "In Progress" | "Not Started",
}