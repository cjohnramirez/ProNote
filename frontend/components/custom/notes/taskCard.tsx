import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { task } from "@/lib/main/tasks";
import {
  Calendar,
  CheckCircle2,
  Ellipsis,
  MessageSquareMore,
} from "lucide-react";
import { DateTime } from "luxon";
import React from "react";

function TaskCard({ task }: { task: task }) {
  const dt = DateTime.fromISO(task.createdOn);

  // logic for progress bar
  const progressObject = {
    numOfCompleted: task.subtasks.findLastIndex(
      (subtask) => subtask.status == "Completed"
    ) + 1,
    numOfInProgress: task.subtasks.findLastIndex(
      (subtask) => subtask.status == "In Progress"
    ) + 1,
    numOfNotStarted: task.subtasks.findLastIndex(
      (subtask) => subtask.status == "Not Started"
    ) + 1,
  };

  return (
    <article className="flex flex-col border-1 border-muted-nocolor rounded-2xl p-4 font-sans space-y-4 justify-between">
      <section className="space-y-3">
        <div className="flex justify-between">
          <div
            className="border-1 border-muted-nocolor text-xs rounded-2xl text-center flex items-center px-2"
            style={{ backgroundColor: `#${task.tag.color} ` }}
          >
            <p>{task.tag.name}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis size={27} strokeWidth={1.5} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* future content here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-muted-white pt-2 font-medium line-clamp-4 justify-start">
          <p className="text-lg pr-8 leading-6">{task.title}</p>
          <p className="text-xs leading-5">Progress</p>
        </div>
        <div className="flex w-full h-1.5 rounded-full overflow-hidden bg-light-muted-violet">
          <div
            className="flex flex-col justify-center overflow-hidden text-xs text-white text-center whitespace-nowrap"
            style={{
              width: `${(progressObject.numOfCompleted / task.subtasks.length) * 100}%`,
              backgroundColor: `#${task.tag.color}`,
            }}
            role="progressbar"
          ></div>
          <div
            className="flex flex-col justify-center overflow-hidden text-xs text-white text-center whitespace-nowrap "
            style={{
              width: `${
                ((progressObject.numOfInProgress +
                  progressObject.numOfCompleted) /
                task.subtasks.length) * 100
              }%`,
              backgroundColor: `#${task.tag.color}`,
              opacity: "20%",
            }}
          ></div>
        </div>
      </section>
      <section className="flex gap-4">
        <article className="flex items-center gap-1 w-full justify-start">
          <Calendar size={27} strokeWidth={1.25} />
          <p className="text-xs">{dt.toLocaleString(DateTime.DATE_FULL)}</p>
        </article>
        <div className="flex gap-4">
          <article className="flex items-center gap-1">
            <CheckCircle2 size={27} strokeWidth={1.25} />
            <p className="text-xs">{task.subtasks.length}</p>
          </article>
          <article className="flex items-center gap-1">
            <MessageSquareMore size={27} strokeWidth={1.25} />
            <p className="text-xs">{task.comment.length}</p>
          </article>
        </div>
      </section>
    </article>
  );
}

export default TaskCard;
