"use client";

import NoteCard from "@/components/custom/notes/noteCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotesStore } from "@/store/main/useNotesStore";
import React from "react";

function Notes() {
  const notes = useNotesStore((state) => state.notes);

  return (
      <main className="grid grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </main>
  );
}

export default Notes;
