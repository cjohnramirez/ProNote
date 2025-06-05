"use client";

import NoteCard from "@/components/custom/notes/noteCard";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotesStore } from "@/store/main/useNotesStore";
import {
  ArrowDownAZ,
  ChevronDown,
  Filter,
  LayoutDashboard,
  LayoutGridIcon,
  Plus,
  Search,
} from "lucide-react";
import React from "react";

function Notes() {
  const noteGroups = useNotesStore((state) => state.noteGroups);
  const notes = useNotesStore((state) => state.notes);

  return (
    <div className="p-6 flex flex-col gap-6">
      <header className="flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <article className="flex gap-4 items-center">
              <p className="text-3xl font-semibold">{noteGroups[0].name}</p>
              <ChevronDown></ChevronDown>
            </article>
          </DropdownMenuTrigger>
          <DropdownMenuContent>{/* future content here */}</DropdownMenuContent>
        </DropdownMenu>
        <section className="flex space-x-2">
          <div className="flex -space-x-2 h-10 items-center">
            {notes.map((note) => (
              <div className={`rounded-full bg-bright-muted-violet w-8 aspect-square flex items-center justify-center border-muted-violet border-2`} key={note.createdBy}>
                <p className="text-xs font-semibold">
                  {note.createdBy
                    .toUpperCase()
                    .match(/\b(\w)/g)
                    ?.slice(0, 2)}
                </p>
              </div>
            ))}
          </div>
          <article className="flex items-center gap-2 bg-linear-to-t from-bright-violet to-bright-muted-violet p-2 px-6 rounded-xl font-semibold">
            <Plus size={27} strokeWidth={1.25} />
            <p>Add Notes</p>
          </article>
        </section>
      </header>
      <nav className="flex justify-between">
        <section className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="flex gap-4 items-center border-1 border-muted-white py-2 px-4 rounded-xl">
                <LayoutGridIcon size={27} strokeWidth={1.25} />
                <p className="text-muted-white font-semibold">Grid</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="flex gap-4 items-center border-1 border-muted-white py-2 px-4 rounded-xl">
                <Search size={27} strokeWidth={1.25} />
                <p className="text-muted-white font-semibold">Search</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
        <section className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="flex gap-4 items-center border-1 border-muted-white py-2 px-4 rounded-xl">
                <LayoutDashboard size={27} strokeWidth={1.25} />
                <p className="text-muted-white font-semibold">Board</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="flex gap-4 items-center border-1 border-muted-white py-2 px-4 rounded-xl">
                <ArrowDownAZ size={27} strokeWidth={1.25} />
                <p className="text-muted-white font-semibold">Sort</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="flex gap-4 items-center border-1 border-muted-white py-2 px-4 rounded-xl">
                <Filter size={27} strokeWidth={1.25} />
                <p className="text-muted-white font-semibold">Filter</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </nav>
      <main className="grid grid-cols-3 gap-6">
        {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </main>
    </div>
  );
}

export default Notes;
