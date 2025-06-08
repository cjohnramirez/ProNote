import React from "react";
import { note } from "@/lib/main/notes";
import { Calendar, Ellipsis, Paperclip } from "lucide-react";
import { DateTime } from "luxon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NoteCard({ note }: { note: note }) {
  const dt = DateTime.fromISO(note.createdOn);

  return (
    <article className="border-muted-nocolor rounded-2xl border-1 p-4 font-sans">
      <section className="flex justify-between">
        <div
          className="border-muted-nocolor flex items-center rounded-2xl border-1 px-2 text-center text-xs"
          style={{ backgroundColor: `#${note.tag.color} ` }}
        >
          <p>{note.tag.name}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis size={27} strokeWidth={1.25} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>{/* future content here */}</DropdownMenuContent>
        </DropdownMenu>
      </section>
      <section className="line-clamp-4 pt-6 font-medium">
        <p className="pr-8 pb-2 text-lg leading-6">{note.title}</p>
        <p className="text-xs leading-5">{note.text}</p>
      </section>
      <hr className="my-4" />
      <section className="flex gap-4">
        <article
          className="bg-bright-muted-violet flex aspect-square w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: `#${note.createdBy.color}` }}
        >
          <p className="text-xs">
            {note.createdBy.name
              .toUpperCase()
              .match(/\b(\w)/g)
              ?.slice(0, 2)}
          </p>
        </article>
        <article className="flex items-center gap-1">
          <Paperclip size={27} strokeWidth={1.25} />
          <p className="text-xs">{note.attachedFiles.length}</p>
        </article>
        <article className="flex w-full items-center justify-end gap-1">
          <Calendar size={27} strokeWidth={1.25} />
          <p className="text-xs">{dt.toLocaleString(DateTime.DATE_FULL)}</p>
        </article>
      </section>
    </article>
  );
}

export default NoteCard;
