import { Checkbox } from "@/components/ui/checkbox";
import { habit } from "@/lib/main/habits";
import { DateTime } from "luxon";
import React from "react";
import HabitCheckbox from "./habitCheckbox";

function HabitSelectors({ habit }: { habit: habit }) {
  return (
    <div
      className="flex items-center justify-between gap-6 rounded-xl border-1 border-l-6 p-4"
      style={{ borderColor: `#${habit.tag.color}` }}
    >
      <p className="font-semibold">{habit.tag.name}</p>
      <div className="flex gap-7">
        {habit.daysOfWeek.map((dayOfWeek, index) => (
          <HabitCheckbox
            disabled={dayOfWeek == 2}
            color={habit.tag.color}
            key={
              DateTime.fromObject({ day: index }).toFormat("ccc") +
              "-" +
              habit.tag.name
            }
          />
        ))}
      </div>
    </div>
  );
}

export default HabitSelectors;
