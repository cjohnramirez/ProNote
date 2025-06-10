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
    numOfCompleted:
      task.subtasks.findLastIndex((subtask) => subtask.status == "Completed") +
      1,
    numOfInProgress:
      task.subtasks.findLastIndex(
        (subtask) => subtask.status == "In Progress",
      ) + 1,
    numOfNotStarted:
      task.subtasks.findLastIndex(
        (subtask) => subtask.status == "Not Started",
      ) + 1,
  };

  return (
    <article className="border-muted-nocolor flex flex-col justify-between space-y-4 rounded-2xl border-1 p-4 font-sans">
      <section className="space-y-3">
        <div className="flex justify-between">
          <div
            className="border-muted-nocolor flex items-center rounded-2xl border-1 px-2 text-center text-xs"
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
        <div className="line-clamp-4 justify-start pt-2 font-medium">
          <p className="pr-8 text-lg leading-6">{task.title}</p>
          <p className="text-xs leading-5">Progress</p>
        </div>
        <div className="bg-light-muted-violet flex h-1.5 w-full overflow-hidden rounded-full">
          <div
            className="flex flex-col justify-center overflow-hidden text-center text-xs whitespace-nowrap text-white"
            style={{
              width: `${(progressObject.numOfCompleted / task.subtasks.length) * 100}%`,
              backgroundColor: `#${task.tag.color}`,
            }}
            role="progressbar"
          ></div>
          <div
            className="flex flex-col justify-center overflow-hidden text-center text-xs whitespace-nowrap text-white"
            style={{
              width: `${
                ((progressObject.numOfInProgress +
                  progressObject.numOfCompleted) /
                  task.subtasks.length) *
                100
              }%`,
              backgroundColor: `#${task.tag.color}`,
              opacity: "20%",
            }}
          ></div>
        </div>
      </section>
      <section className="flex gap-4">
        <article className="flex w-full items-center justify-start gap-1">
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
