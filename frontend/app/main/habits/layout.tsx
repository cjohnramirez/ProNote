"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    <main className="flex flex-col gap-6 p-6">
      <header className="flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <article className="flex items-center gap-4">
              <p className="text-3xl font-semibold">{habitGroups[0].name}</p>
              <ChevronDown></ChevronDown>
            </article>
          </DropdownMenuTrigger>
          <DropdownMenuContent>{/* future content here */}</DropdownMenuContent>
        </DropdownMenu>
        <article className="from-bright-violet to-bright-muted-violet flex items-center gap-2 rounded-xl bg-linear-to-t p-2 px-6 font-semibold">
          <Plus size={27} strokeWidth={1.25} />
          <p>Add Tasks</p>
        </article>
      </header>
      <nav className="flex space-x-2">
        {dateDivisions.map((dateDivision) => (
          <button
            className="focus:border-muted-white flex items-center gap-4 rounded-xl border-1 px-4 py-2"
            key={dateDivision}
          >
            <p className="font-semibold">{dateDivision}</p>
          </button>
        ))}
      </nav>
      <main className="flex space-x-6">{children}</main>
    </main>
  );
}
