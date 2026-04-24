"use client";

import Link from "next/link";
import { Note } from "@/lib/notes";

interface NoteItemProps {
  note: Note;
  isSelected: boolean;
}

export function NoteItem({ note, isSelected }: NoteItemProps) {
  const displayDate = new Date(note.date).toLocaleDateString("en-US");

  return (
    <li>
      <Link
        href={`/notes/${note.slug}`}
        className="block h-[70px] w-full px-4 py-2 flex flex-col justify-center rounded-md"
        style={
          isSelected
            ? { backgroundColor: "var(--note-selected)" }
            : undefined
        }
      >
        <h2 className="text-sm font-bold break-words line-clamp-1">
          {note.emoji} {note.title}
        </h2>
        <p className="text-xs flex items-baseline overflow-hidden text-[var(--muted-foreground)] mt-0.5">
          <span
            className="text-[var(--foreground)] shrink-0 mr-1 tabular-nums whitespace-nowrap"
          >
            {displayDate}
          </span>
          <span className="block w-0 min-w-0 flex-1 truncate">
            {note.preview}
          </span>
        </p>
      </Link>
      {!isSelected && (
        <div className="mx-4 border-t border-[var(--border)]" />
      )}
    </li>
  );
}
