import { redirect } from "next/navigation";
import { getAllNotes } from "@/lib/notes";

export default function NotesIndex() {
  const notes = getAllNotes();
  if (notes.length > 0) {
    redirect(`/notes/${notes[0].slug}`);
  }
  return null;
}
