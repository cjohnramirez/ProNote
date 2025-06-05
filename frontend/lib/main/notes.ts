import { user } from "../users";
import { tag } from "./tags";

export interface noteGroup {
  id: number;
  name: string;
}

export interface note {
  id: number;
  title: string;
  text: string;
  tag: tag;
  attachedFiles: attachedFile[];
  createdBy: user;
  createdOn: string;
  noteGroup: noteGroup;
}

export interface attachedFile {
  name: string;
}

