import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { NotesSidebar } from "@/components/NotesSidebar";
import { NoteContent } from "@/components/NoteContent";

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  return {
    title: note ? `${note.emoji} ${note.title} — rodrigo casanova-aleman` : "not found",
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  const allNotes = getAllNotes();

  return (
    <div className="notes-app flex h-dvh overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
      <NotesSidebar notes={allNotes} selectedSlug={slug} />
      <NoteContent note={note} />
    </div>
  );
}
