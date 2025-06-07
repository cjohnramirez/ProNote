"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useHabitsStore } from "@/store/main/useHabitsStore";
import { ChevronDown, Plus } from "lucide-react";
import React from "react";

export default function Habits({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const habitGroups = useHabitsStore((state) => state.habitGroups);

  const dateDivisions = ["Day", "Week", "Month", "Year"];

  return (
    <main className="p-6 flex flex-col gap-6">
      <header className="flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <article className="flex gap-4 items-center">
              <p className="text-3xl font-semibold">{habitGroups[0].name}</p>
              <ChevronDown></ChevronDown>
            </article>
          </DropdownMenuTrigger>
          <DropdownMenuContent>{/* future content here */}</DropdownMenuContent>
        </DropdownMenu>
        <article className="flex items-center gap-2 bg-linear-to-t from-bright-violet to-bright-muted-violet p-2 px-6 rounded-xl font-semibold">
          <Plus size={27} strokeWidth={1.25} />
          <p>Add Tasks</p>
        </article>
      </header>
      <nav className="flex space-x-2">
        {dateDivisions.map((dateDivision) => (
          <button className="flex gap-4 items-center border-1 py-2 px-4 rounded-xl focus:border-muted-white" key={dateDivision}>
            <p className="text-muted-white font-semibold">{dateDivision}</p>
          </button>
        ))}
      </nav>
      <main className="flex space-x-6">
        {children}
      </main>
    </main>
  );
}
