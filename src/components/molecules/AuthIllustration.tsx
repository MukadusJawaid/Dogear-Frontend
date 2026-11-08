import { Check } from "lucide-react";

/** Decorative artwork for the auth panel: a dog-eared page with a pin, an approved card and floating shapes. */
export function AuthIllustration() {
  return (
    <div
      aria-hidden
      className="relative h-full w-full overflow-hidden bg-[linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* big amber disc with ring */}
      <span className="bg-amber absolute -top-10 left-[48%] size-[520px] rounded-full" />
      <span className="border-canvas absolute top-[100px] left-[56%] size-[330px] rounded-full border-2" />
      {/* dots + triangle */}
      <span className="absolute top-24 left-10 h-56 w-72 bg-[radial-gradient(circle,rgb(255_180_84/0.6)_1.5px,transparent_2px)] [mask-image:linear-gradient(135deg,#000,transparent_70%)] bg-[size:24px_24px]" />
      <span className="border-b-mock-cream absolute top-[300px] left-11 size-0 border-x-[14px] border-b-[24px] border-x-transparent" />
      {/* paper */}
      <div className="bg-mock-cream absolute top-[160px] left-[18%] h-[440px] w-[400px] -rotate-6 rounded-md p-8 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] [clip-path:polygon(0_0,72%_0,100%_17%,100%_100%,0_100%)]">
        <span className="bg-mock-ink block h-3 w-28 rounded-full" />
        <span className="bg-mock-ink mt-6 block h-10 w-44 rounded-lg" />
        <span className="bg-mock-ink mt-3 block h-10 w-36 rounded-lg" />
        <span className="bg-mock-green mt-6 block h-8 w-28 rounded-full" />
        <span className="mt-6 block h-2.5 w-28 rounded-full bg-[#d4c7a8]" />
        <span className="mt-2 block h-2.5 w-20 rounded-full bg-[#d4c7a8]" />
        <div className="bg-mock-green absolute top-[190px] left-[170px] grid size-[190px] place-items-center rounded-2xl">
          <span className="grid size-20 place-items-center rounded-full bg-white">
            <span className="size-9 rounded-full bg-[#c97a2b]" />
          </span>
          <span className="bg-success border-canvas text-canvas absolute right-3 bottom-8 grid size-9 place-items-center rounded-full border-2">
            <Check className="size-5" strokeWidth={3} />
          </span>
        </div>
        <span className="absolute bottom-6 left-6 h-10 w-[300px] rounded-lg bg-[#e8dcc6]" />
      </div>
      <span className="bg-amber border-canvas text-amber-ink absolute top-[262px] left-[calc(18%+125px)] grid size-9 place-items-center rounded-full border-2 font-mono text-sm font-bold">
        1
      </span>
      {/* floating chip */}
      <div className="border-amber bg-canvas absolute right-6 bottom-[168px] flex w-[200px] items-center gap-3 rounded-2xl border-2 p-4">
        <span className="size-8 rounded-full bg-[#e0c9a6]" />
        <div className="space-y-2">
          <span className="block h-2.5 w-24 rounded-full bg-white" />
          <span className="bg-periwinkle block h-2.5 w-16 rounded-full" />
        </div>
      </div>
      <span className="border-mock-cream/70 absolute top-[430px] left-[58%] size-12 rotate-12 rounded-xl border-2" />
      {/* bottom shapes */}
      <span className="border-amber absolute bottom-[118px] left-10 grid size-24 place-items-center rounded-full border-2">
        <span className="bg-amber size-12 rounded-full" />
      </span>
      <span className="absolute bottom-0 left-0 h-24 w-[64%] bg-[repeating-linear-gradient(135deg,#8a6a3c_0_9px,transparent_9px_22px)]" />
      <span className="bg-mock-green absolute -right-10 -bottom-24 size-[260px] rounded-full" />
    </div>
  );
}
