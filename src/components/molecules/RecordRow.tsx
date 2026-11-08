import type { RecordItem } from "@/types/content";
import { ThumbMock } from "./ThumbMock";

/** Card in the "proof" carousel: thumbnail + who approved + when. */
export function RecordRow({ project, version, status, person, pins, when, thumb }: RecordItem) {
  const approved = status === "Approved";
  return (
    <article className="border-line bg-surface h-full space-y-3 rounded-2xl border p-2.5">
      {thumb && <ThumbMock theme={thumb.theme} pin={thumb.pin} status={status} />}
      <div className="space-y-1 px-2">
        <p className="text-ink text-sm font-semibold">
          {project} · {version}
        </p>
        <p className="text-ink-muted text-sm">
          {approved ? `Approved by ${person}` : `Waiting for ${person}`}
        </p>
      </div>
      <div className="border-line text-ink-muted mx-2 flex justify-between border-t px-0 py-3 text-xs">
        <span>{pins} pins</span>
        <span>{when}</span>
      </div>
    </article>
  );
}
