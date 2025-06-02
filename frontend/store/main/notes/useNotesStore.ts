import { create } from "zustand";

// will be moved in utils
interface noteGroup {
  name: string;
}

interface notesStore {
  notesGroup: noteGroup[];
  setNoteGroup: (noteGroup: noteGroup[]) => void;
}

export const useNotesStore = create<notesStore>()((set) => ({
  notesGroup: [{ name: "Music and Movies" }, { name: "Random Thoughts" }],
  setNoteGroup: (newNoteGroup) => set(() => ({ notesGroup: newNoteGroup })),
}));
