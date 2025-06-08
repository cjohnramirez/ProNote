import { habit } from "@/lib/main/habits";
import React, { useState } from "react";

function HabitCard({ habit, checked }: { habit: habit; checked: boolean }) {
  const [clicked, setClicked] = useState<boolean>(checked);

  return (
    <div
      className="flex w-full flex-col items-start gap-2 rounded-xl border-1 border-l-6 p-4 font-sans text-sm"
      style={{ borderColor: `#${habit.tag.color}` }}
    >
      <p>{habit.tag.name}</p>
      <button
        onClick={() => {
          setClicked(!clicked);
        }}
        className="border-muted-white max-w-48 rounded-xl border-1 p-1 px-4"
        style={{
          backgroundColor: clicked ? "#05df72" : undefined,
          color: clicked ? "#080813" : "white",
        }}
      >
        Mark as Done
      </button>
    </div>
  );
}

export default HabitCard;
