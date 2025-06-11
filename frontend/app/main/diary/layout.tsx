import { Plus } from "lucide-react";
import React from "react";

export default function DiaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-6 p-6">
      <header className="flex justify-between">
        <article className="flex items-center gap-4">
          <p className="text-3xl font-semibold">Diary</p>
        </article>
        <article className="from-bright-violet to-bright-muted-violet flex items-center gap-2 rounded-xl bg-linear-to-t p-2 px-6 font-semibold">
          <Plus size={27} strokeWidth={1.25} />
          <p>Add Entry</p>
        </article>
      </header>
      <main>{children}</main>
    </main>
  );
}
