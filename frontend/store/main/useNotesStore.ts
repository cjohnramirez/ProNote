import { create } from "zustand";
import { noteGroup, note } from "@/lib/main/notes";

interface notesStore {
  notes: note[];
  noteGroups: noteGroup[];
  setNoteGroups: (noteGroups: noteGroup[]) => void;
  setNotes: (notes: note[]) => void;
}

export const useNotesStore = create<notesStore>()((set) => ({
  notes: [
    {
      id: 1,
      title: "Even Black Holes Die",
      text: "And after countless eons of cosmic destruction and death, the remnants of the ages gone by remain as voids of silence. Even black holes, once thought immortal, slowly evaporate through Hawking radiation. Eventually, not even darkness remains.",
      tag: "Astronomy",
      attachedFiles: [
        { name: "black_holes.pdf" },
        { name: "hawking_radiation_notes.txt" },
      ],
      createdBy: "KG",
      createdOn: "2025-03-17",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 2,
      title: "We Are Colonies",
      text: "A human is not a single organism, but a walking ecosystem — trillions of microbial passengers shaping your digestion, mood, and immunity. These symbiotic microorganisms outnumber our own cells and play a critical role in our health. In essence, we are never truly alone.",
      tag: "Biology",
      attachedFiles: [
        { name: "microbiome_chart.jpg" },
        { name: "gut_health_study.pdf" },
        { name: "colony_slides.pptx" },
      ],
      createdBy: "DR",
      createdOn: "2025-02-09",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 3,
      title: "You Can Never Step Into the Same Now Twice",
      text: "By the time you process the present, it’s already the past. Consciousness is a delayed reconstruction of reality, always catching up to what has just happened. In a way, every moment is already a memory.",
      tag: "Philosophy",
      attachedFiles: [{ name: "present_moment.md" }],
      createdBy: "SG",
      createdOn: "2025-04-21",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 4,
      title: "Mathematics as Art",
      text: "Mathematics is not just logic and rigor; it’s also about elegance, symmetry, and patterns. The best proofs have a sense of aesthetic beauty, much like a well-composed painting. We often feel them before we understand them.",
      tag: "Mathematics",
      attachedFiles: [
        { name: "elegant_proofs.pdf" },
        { name: "beauty_of_math.png" },
      ],
      createdBy: "AL",
      createdOn: "2025-05-10",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 5,
      title: "The Illusion of Free Will",
      text: "Every decision we make may already be determined by prior causes — genetics, environment, neural patterns. Free will might be a convincing illusion crafted by our brains to preserve a narrative of agency. Does that make our lives any less meaningful?",
      tag: "Psychology",
      attachedFiles: [{ name: "free_will_debate.pdf" }],
      createdBy: "NM",
      createdOn: "2025-05-30",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
  ],
  noteGroups: [
    { id: 0, name: "Random Thoughts" },
    { id: 1, name: "Music and Movies" },
  ],
  setNoteGroups: (newNoteGroups) => set(() => ({ noteGroups: newNoteGroups })),
  setNotes: (newNotes) => set(() => ({ notes: newNotes})),
}));
