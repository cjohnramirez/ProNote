export interface noteGroup {
  id: number;
  name: string;
}

export interface note {
  id: number;
  title: string;
  text: string;
  tag: tag[];
  attachedFiles: attachedFile[];
  createdBy: string;
  createdOn: string;
  noteGroup: noteGroup;
}

export interface attachedFile {
  name: string;
}

export interface tag {
  name: string;
  color: string;
}