"use client";

import DiaryTextEditor from "@/components/main/diary/DiaryTextEditor";
import { useDiaryStore } from "@/store/main/useDiaryStore";
import { DateTime } from "luxon";
import React from "react";

function Diary() {
  const diaryEntry = useDiaryStore((state) => state.diaryEntry);

  return (
    <section className="border-muted-white rounded-2xl border-1">
      <div className="flex space-x-20 p-8">
        <article>
          <p>Day and Date</p>
          <p className="text-xl font-semibold">
            {DateTime.fromISO(diaryEntry.date).toFormat("cccc, LLLL dd yyyy")}
          </p>
        </article>
        <article>
          <p>Title</p>
          <p className="text-xl font-semibold">{diaryEntry.title}</p>
        </article>
      </div>
      <DiaryTextEditor diaryEntry={diaryEntry} />
    </section>
  );
}

export default Diary;
