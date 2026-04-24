"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Note } from "@/lib/notes";

interface NoteContentProps {
  note: Note;
}

export function NoteContent({ note }: NoteContentProps) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* top bar */}
      <div
        className="h-10 border-b flex items-center px-4 shrink-0"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          {new Date(note.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      {/* content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-[640px] mx-auto note-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {note.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
