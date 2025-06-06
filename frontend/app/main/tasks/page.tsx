"use client";

import TaskCard from "@/components/custom/notes/taskCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTasksStore } from "@/store/main/useTasksStore";
import React from "react";

function Tasks() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <ScrollArea>
      <main className="grid grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </main>
    </ScrollArea>
  );
}

export default Tasks;
