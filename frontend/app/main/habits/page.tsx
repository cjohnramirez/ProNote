"use client";

import HabitCard from "@/components/custom/habits/habitCard";
import HabitSelectors from "@/components/custom/habits/habitSelectors";
import { useHabitsStore } from "@/store/main/useHabitsStore";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { DateTime } from "luxon";
import React from "react";

function Habits() {
  const habits = useHabitsStore((state) => state.habits);
  const habitGroups = useHabitsStore((state) => state.habitGroups);

  const today = DateTime.now().weekday;
  console.log(today);

  const todayDay = DateTime.now().toFormat("cccc");
  const todayDate = DateTime.now().toFormat("LLLL dd yyyy");

  const todayWeek = DateTime.now().toFormat("WW");
  const todayYear = DateTime.now().toFormat("yyyy");

  const dt = DateTime.fromObject({
    weekYear: Number(todayYear),
    weekNumber: Number(todayWeek),
  });

  const weekRange =
    dt.startOf("week").toFormat("LLLL dd") +
    " to " +
    dt.endOf("week").toFormat("LLLL dd");

  var completedCounter = 0;
  var notIncludedCounter = 0;

  habits.map((habit) => {
    habit.daysOfWeek.map((dayOfWeek) => {
      if (dayOfWeek == 1) {
        completedCounter++;
      } else if (dayOfWeek == 2) {
        notIncludedCounter++;
      }
    });
  });

  const completed =
    (completedCounter / (habits.length * 7 - notIncludedCounter)) * 100;

  const daysOfWeek = ["M", "T", "W", "Th", "F", "Sa", "Su"];

  return (
    <>
      <section className="border-muted-white w-2/3 space-y-4 rounded-xl border-1 p-6">
        <section className="flex items-center gap-2">
          <button className="rounded-full border-1 p-2">
            <ChevronLeft />
          </button>
          <button className="rounded-full border-1 p-2">
            <ChevronRight />
          </button>
          <button className="border-muted-white ml-4 rounded-xl border-1 p-2 px-6 font-semibold">
            <p>{weekRange}</p>
          </button>
        </section>
        <section className="pt-4">
          <div className="bg-light-muted-violet flex h-1.5 w-full overflow-hidden rounded-full">
            <div
              className="flex flex-col justify-center overflow-hidden bg-green-400 text-center text-xs whitespace-nowrap text-white"
              style={{
                width: `${completed}%`,
              }}
              role="progressbar"
            ></div>
          </div>
        </section>
        <section className="flex justify-between pb-5 font-medium">
          <article className="flex gap-2">
            <ArrowUp className="stroke-green-400" />
            <p>Up 25% a week before</p>
          </article>
          <p>{completed.toFixed(0)}% complete</p>
        </section>
        <section className="-mx-6 border-t-1">
          <div className="mr-6 flex justify-end gap-[41px] p-6 pb-0 text-sm font-semibold">
            {daysOfWeek.map((dayOfWeek) => (
              <p key={dayOfWeek}>{dayOfWeek}</p>
            ))}
          </div>
          <div className="space-y-4 p-6">
            {habits.map((habit) => (
              <HabitSelectors key={habit.tag.name} habit={habit} />
            ))}
          </div>
        </section>
      </section>
      <aside className="border-muted-white flex w-1/3 flex-col items-center justify-start gap-4 rounded-xl border-1 ">
        <section className="flex w-full flex-col justify-start p-6 pb-0 font-semibold ">
          <p className="text-3xl">{todayDay}</p>
          <p>{todayDate}</p>
        </section>
        <section className="flex w-full justify-start p-6 pt-3">
          <div className="space-x-2">
            <button className="rounded-full border-1 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full border-1 p-2">
              <ChevronRight />
            </button>
          </div>
          <div>
            
          </div>
        </section>
        <section className="-mx-6 w-full border-t-1 p-6">
          <div className="space-y-4">
            {habits
              .filter((habit) => habit.daysOfWeek[Number(today)] != 2)
              .map((habit) => (
                <HabitCard
                  habit={habit}
                  checked={habit.daysOfWeek[Number(today)] == 1}
                  key={
                    DateTime.fromObject({ day: today }).toFormat("ccc") +
                    "-" +
                    habit.tag.name
                  }
                />
              ))}
          </div>
        </section>
      </aside>
    </>
  );
}

export default Habits;
