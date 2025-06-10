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
    <article className="border-1 border-muted-nocolor rounded-2xl p-4 font-sans">
      <section className="flex justify-between">
        <div
          className="border-1 border-muted-nocolor text-xs rounded-2xl text-center flex items-center px-2"
          style={{ backgroundColor: `#${note.tag.color} ` }}
        >
          <p>{note.tag.name}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis size={27} strokeWidth={1.25} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* future content here */}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <section className="pt-6 font-medium line-clamp-4">
        <p className="text-lg pr-8 leading-6 pb-2">{note.title}</p>
        <p className="text-xs leading-5">{note.text}</p>
      </section>
      <hr className="my-4" />
      <section className="flex gap-4">
        <article
          className="rounded-full bg-bright-muted-violet w-10 aspect-square flex items-center justify-center"
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
        <article className="flex items-center gap-1 w-full justify-end">
          <Calendar size={27} strokeWidth={1.25} />
          <p className="text-xs">{dt.toLocaleString(DateTime.DATE_FULL)}</p>
        </article>
      </section>
    </article>
  );
}

export default NoteCard;
