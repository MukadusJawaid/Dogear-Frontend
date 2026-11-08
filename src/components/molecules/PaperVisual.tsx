import { Pin } from "@/components/atoms";

/** Stack of dog-eared pages with a pinned note — the About page's brand illustration. */
export function PaperVisual({ caption }: { caption: string }) {
  return (
    <div className="relative mx-auto h-[360px] w-[300px]">
      <span className="border-line bg-surface-2 absolute inset-0 translate-x-5 translate-y-4 rotate-3 rounded-2xl border" />
      <div className="border-line-strong bg-surface-3 absolute inset-0 -rotate-1 rounded-2xl border p-8 shadow-[0_30px_70px_-20px_rgb(0_0_0/0.8)]">
        <span className="bg-amber absolute top-0 right-0 size-12 rounded-tr-2xl [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        <span className="bg-line-strong block h-2.5 w-40 rounded-full" />
        <span className="bg-line-strong mt-3 block h-2.5 w-28 rounded-full" />
        <div className="bg-surface-4 relative mt-8 h-24 rounded-xl">
          <span className="absolute top-12 right-10">
            <Pin n={1} />
          </span>
        </div>
        <span className="bg-line-strong mt-8 block h-2.5 w-36 rounded-full" />
        <span className="bg-line-strong mt-3 block h-2.5 w-24 rounded-full" />
        <span className="border-amber/60 bg-surface-2 text-amber absolute bottom-8 left-8 rounded-lg border px-3 py-1.5 font-mono text-xs">
          {caption}
        </span>
      </div>
    </div>
  );
}
