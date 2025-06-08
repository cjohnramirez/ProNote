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
  Component,
  Filter,
  LayoutDashboard,
  LayoutGridIcon,
  Plus,
  Search,
} from "lucide-react";
import React from "react";

export default function Notes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const noteGroups = useNotesStore((state) => state.noteGroups);
  const noteCreators = useNotesStore((state) => state.noteCreators);

  return (
    <main className="flex h-dvh flex-col gap-6 p-6">
      <header className="flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <article className="flex items-center gap-4">
              <p className="text-3xl font-semibold">{noteGroups[0].name}</p>
              <ChevronDown></ChevronDown>
            </article>
          </DropdownMenuTrigger>
          <DropdownMenuContent>{/* future content here */}</DropdownMenuContent>
        </DropdownMenu>
        <section className="flex space-x-2">
          <div className="flex h-10 items-center -space-x-2">
            {noteCreators.map((noteCreator) => (
              <div
                className={`bg-bright-muted-violet border-muted-violet flex aspect-square w-8 items-center justify-center rounded-full border-2`}
                key={noteCreator.name}
                style={{ backgroundColor: `#${noteCreator.color}` }}
              >
                <p className="text-xs font-semibold">
                  {noteCreator.name
                    .toUpperCase()
                    .match(/\b(\w)/g)
                    ?.slice(0, 2)}
                </p>
              </div>
            ))}
          </div>
          <article className="from-bright-violet to-bright-muted-violet flex items-center gap-2 rounded-xl bg-linear-to-t p-2 px-6 font-semibold">
            <Plus size={27} strokeWidth={1.25} />
            <p>Add Notes</p>
          </article>
        </section>
      </header>
      <nav className="flex justify-between">
        <section className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="border-muted-white flex items-center gap-4 rounded-xl border-1 px-4 py-2">
                <LayoutGridIcon size={27} strokeWidth={1.25} />
                <p className="font-semibold">Grid</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="border-muted-white flex items-center gap-4 rounded-xl border-1 px-4 py-2">
                <Search size={27} strokeWidth={1.25} />
                <p className="font-semibold">Search</p>
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
              <article className="border-muted-white flex items-center gap-4 rounded-xl border-1 px-4 py-2">
                <Component size={27} strokeWidth={1.25} />
                <p className="font-semibold">Board</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="border-muted-white flex items-center gap-4 rounded-xl border-1 px-4 py-2">
                <ArrowDownAZ size={27} strokeWidth={1.25} />
                <p className="font-semibold">Sort</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <article className="border-muted-white flex items-center gap-4 rounded-xl border-1 px-4 py-2">
                <Filter size={27} strokeWidth={1.25} />
                <p className="font-semibold">Filter</p>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </nav>
      <ScrollArea>{children}</ScrollArea>
    </main>
  );
}
