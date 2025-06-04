export interface noteGroup {
  id: number;
  name: string;
}

export interface note {
  id: number;
  title: string;
  text: string;
  tag: string;
  attachedFiles: attachedFile[];
  createdBy: string;
  createdOn: string;
  noteGroup: noteGroup;
}

export interface attachedFile {
  name: string;
}