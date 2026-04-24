import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Note {
  slug: string;
  title: string;
  emoji: string;
  date: string;
  preview: string;
  content: string;
  pinned?: boolean;
}

const contentDir = path.join(process.cwd(), "src/content");

export function getAllNotes(): Note[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  const notes = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data, content } = matter(raw);

    const plainPreview = content
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[#*_~`>+\-]/g, "")
      .replace(/\n+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 120);

    return {
      slug,
      title: data.title ?? slug,
      emoji: data.emoji ?? "📝",
      date: data.date ?? "2025-01-01",
      preview: plainPreview,
      content,
      pinned: data.pinned ?? false,
    };
  });

  return notes.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getAllNotes().find((n) => n.slug === slug);
}
