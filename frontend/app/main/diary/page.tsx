"use client";

import { DiaryTextEditorMemo } from "@/components/main/diary/DiaryTextEditor";
import { useDiaryStore } from "@/store/main/useDiaryStore";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";

function Diary() {
  const diaryEntry = useDiaryStore((state) => state.diaryEntry);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(diaryEntry.text);
  }, []);

  //console.log(value);

  return (
    <section className="border-muted-white rounded-2xl border-1">
      <section className="flex space-x-20 p-8">
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
      </section>
      <DiaryTextEditorMemo
        placeholder="Enter your diary entry..."
        name="diaryEntry"
        value={diaryEntry.text}
        onChange={(newValue) => setValue(newValue)}
      />
    </section>
  );
}

export default Diary;
