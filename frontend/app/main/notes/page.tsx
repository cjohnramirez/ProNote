"use client";

import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { useNotesStore } from "@/store/main/useNotesStore";
import { ChevronDown } from "lucide-react";
import React from "react";

function Notes() {
  const noteGroups = useNotesStore((state) => state.noteGroups);
  console.log(noteGroups);

  return (
    <header className="px-6">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <article className="flex gap-4 items-center">
            <p className="text-3xl font-semibold">{noteGroups[0].name}</p>
            <ChevronDown></ChevronDown>
          </article>
        </DropdownMenuTrigger>
        <DropdownMenuContent></DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Notes;
