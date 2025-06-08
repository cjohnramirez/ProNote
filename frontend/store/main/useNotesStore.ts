import { create } from "zustand";
import { noteGroup, note } from "@/lib/main/notes";
import { user } from "@/lib/users";

interface notesStore {
  notes: note[];
  noteGroups: noteGroup[];
  noteCreators: user[];
  setNoteGroups: (noteGroups: noteGroup[]) => void;
  setNotes: (notes: note[]) => void;
}

export const useNotesStore = create<notesStore>()((set) => ({
  notes: [
    {
      id: 1,
      title: "Even Black Holes Die",
      text: "And after countless eons of cosmic destruction and death, the remnants of the ages gone by remain as voids of silence. Even black holes, once thought immortal, slowly evaporate through Hawking radiation. Eventually, not even darkness remains.",
      tag: { name: "Astronomy", color: "b2824c" },
      attachedFiles: [
        { name: "black_holes.pdf" },
        { name: "hawking_radiation_notes.txt" },
      ],
      createdBy: { name: "Katherine Graham", color: "50a2ff" },
      createdOn: "2025-03-17",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 2,
      title: "We Are Colonies",
      text: "A human is not a single organism, but a walking ecosystem — trillions of microbial passengers shaping your digestion, mood, and immunity. These symbiotic microorganisms outnumber our own cells and play a critical role in our health. In essence, we are never truly alone.",
      tag: { name: "Biology", color: "a42fa2" },
      attachedFiles: [
        { name: "microbiome_chart.jpg" },
        { name: "gut_health_study.pdf" },
        { name: "colony_slides.pptx" },
      ],
      createdBy: { name: "David Robinson", color: "fb64b6" },
      createdOn: "2025-02-09",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 3,
      title: "You Can Never Step Into the Same Now Twice",
      text: "By the time you process the present, it's already the past. Consciousness is a delayed reconstruction of reality, always catching up to what has just happened. In a way, every moment is already a memory.",
      tag: { name: "Philosophy", color: "2a8d6a" },
      attachedFiles: [{ name: "present_moment.md" }],
      createdBy: { name: "Sarah Green", color: "ff637e" },
      createdOn: "2025-04-21",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 4,
      title: "Mathematics as Art",
      text: "Mathematics is not just logic and rigor; it's also about elegance, symmetry, and patterns. The best proofs have a sense of aesthetic beauty, much like a well-composed painting. We often feel them before we understand them.",
      tag: { name: "Mathematics", color: "cd2d31" },
      attachedFiles: [
        { name: "elegant_proofs.pdf" },
        { name: "beauty_of_math.png" },
      ],
      createdBy: { name: "Alice Lee", color: "f4a8ff" },
      createdOn: "2025-05-10",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
    {
      id: 5,
      title: "The Illusion of Free Will",
      text: "Every decision we make may already be determined by prior causes — genetics, environment, neural patterns. Free will might be a convincing illusion crafted by our brains to preserve a narrative of agency. Does that make our lives any less meaningful?",
      tag: { name: "Psychology", color: "3746ef" },
      attachedFiles: [{ name: "free_will_debate.pdf" }],
      createdBy: { name: "Natalie Moore", color: "ff637e" },
      createdOn: "2025-05-30",
      noteGroup: { id: 0, name: "Random Thoughts" },
    },
  ],
  noteGroups: [
    { id: 0, name: "Random Thoughts" },
    { id: 1, name: "Music and Movies" },
  ],
  noteCreators: [
    { name: "Katherine Graham", color: "50a2ff" },
    { name: "David Robinson", color: "fb64b6" },
    { name: "Sarah Green", color: "ff637e" },
    { name: "Alice Lee", color: "f4a8ff" },
    { name: "Natalie Moore", color: "ff637e" },
  ],
  setNoteGroups: (newNoteGroups) => set(() => ({ noteGroups: newNoteGroups })),
  setNotes: (newNotes) => set(() => ({ notes: newNotes })),
}));
