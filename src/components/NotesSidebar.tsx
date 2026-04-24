"use client";

import { Note } from "@/lib/notes";
import { NoteItem } from "./NoteItem";
import { WindowControls } from "./WindowControls";

interface NotesSidebarProps {
  notes: Note[];
  selectedSlug: string | null;
}

export function NotesSidebar({ notes, selectedSlug }: NotesSidebarProps) {
  const pinned = notes.filter((n) => n.pinned);
  const rest = notes.filter((n) => !n.pinned);

  return (
    <div
      className="w-[260px] h-full flex flex-col border-r shrink-0"
      style={{
        backgroundColor: "var(--sidebar-bg)",
        borderColor: "var(--border)",
      }}
    >
      {/* top nav */}
      <div
        className="flex items-center justify-between border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <WindowControls />
        <span className="text-xs font-semibold pr-3" style={{ color: "var(--muted-foreground)" }}>
          Notes
        </span>
      </div>

      {/* notes list */}
      <div className="overflow-y-auto flex-1 py-2">
        {pinned.length > 0 && (
          <section>
            <h3
              className="py-1 text-xs font-bold ml-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              Pinned
            </h3>
            <ul>
              {pinned.map((note) => (
                <NoteItem
                  key={note.slug}
                  note={note}
                  isSelected={note.slug === selectedSlug}
                />
              ))}
            </ul>
          </section>
        )}
        {rest.length > 0 && (
          <section>
            {pinned.length > 0 && (
              <h3
                className="py-1 text-xs font-bold ml-2"
                style={{ color: "var(--muted-foreground)" }}
              >
                Notes
              </h3>
            )}
            <ul>
              {rest.map((note) => (
                <NoteItem
                  key={note.slug}
                  note={note}
                  isSelected={note.slug === selectedSlug}
                />
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
