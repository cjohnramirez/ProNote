import { diaryEntry } from "@/lib/main/diary";
import { create } from "zustand";

interface DiaryStore {
  diaryEntry: diaryEntry;
  setDiaryEntry: (diaryEntries: diaryEntry) => void;
}

export const useDiaryStore = create<DiaryStore>()((set) => ({
  diaryEntry: 
    {
      text: `<p dir="ltr"><i><em class="italic" style="white-space: pre-wrap;">Love is the only thing that has ever truly unraveled me.</em></i><br><br><sup style="white-space: pre-wrap;"><span>It arrives like a quiet guest</span></sup><span style="white-space: pre-wrap;">, sitting beside you without demand—just presence. At first, it feels simple: a smile, a voice, the way someone says your name. But then it begins to take root. It rewrites the way you see the world. Suddenly, sunsets mean something. Songs sting differently. Silence isn't empty anymore—it's heavy with longing.</span><br><br><span style="white-space: pre-wrap;">What terrifies me isn't that love fades. It's that it changes us. Irreversibly. To love someone deeply is to hand them a version of you no one else will ever meet. And if they leave, that version of you leaves too. They become a museum in your memory—a place you still visit, even if the doors are locked.</span><br><br><span style="white-space: pre-wrap;">I've come to believe that love isn't about possession, or forever, or even being loved back. </span><u><span class="underline" style="white-space: pre-wrap;">It's about expansion. It stretches your soul.</span></u><span style="white-space: pre-wrap;"> Makes you softer. Stronger. More human. And maybe that's why it hurts so much—because it shows us what we're capable of feeling, only to leave us craving it for the rest of our lives.</span><br><br><b><strong class="font-semibold" style="white-space: pre-wrap;">But even with the ache, I would choose love again. And again. </strong></b><br><b><strong class="font-semibold" style="white-space: pre-wrap;">Because for a fleeting moment, it made the world feel complete.</strong></b></p>`,
      id: 0,
      date: "2025-04-21",
      title: "Entry No. 45 - On Defense of Heartaches",
    }
  ,
  setDiaryEntry: (newDiaryEntry) =>
    set(() => ({
      diaryEntry: newDiaryEntry,
    }))
}));
