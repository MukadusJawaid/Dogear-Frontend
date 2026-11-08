import { Chip, Pin } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { MockTheme } from "@/types/content";

const bg: Record<MockTheme, string> = {
  cream: "bg-mock-cream",
  blue: "bg-mock-blue",
  sand: "bg-mock-sand",
  sage: "bg-mock-sage",
};

/** Abstract thumbnail of a reviewed design — shapes per theme, status chip and pin. */
export function ThumbMock({
  theme,
  pin,
  status,
}: {
  theme: MockTheme;
  pin: number;
  status: string;
}) {
  return (
    <div className={cn("relative h-36 overflow-hidden rounded-xl", bg[theme])}>
      {theme === "cream" && (
        <>
          <span className="bg-mock-green absolute top-6 left-5 h-14 w-26 rounded-md" />
          <span className="absolute top-5 right-5 size-19 rounded-full bg-[#d9a877]" />
        </>
      )}
      {theme === "blue" && (
        <>
          <span className="absolute top-4 left-4 h-5 w-[calc(100%-2rem)] rounded-md bg-white" />
          <span className="absolute top-12 left-4 h-20 w-28 rounded-md bg-[#1d3b66]" />
        </>
      )}
      {theme === "sand" && (
        <>
          <span className="absolute top-4 left-6 h-24 w-14 rounded-md bg-[#c98a4b]" />
          <span className="absolute top-8 right-4 h-16 w-32 rounded-md bg-[#e6d3b3]" />
        </>
      )}
      {theme === "sage" && (
        <>
          <span className="absolute top-5 left-5 h-4 w-35 rounded-md bg-[#1f2a24]" />
          <span className="absolute top-14 left-5 h-20 w-[calc(100%-2.5rem)] rounded-md bg-[#b6c9b9]" />
        </>
      )}
      <span className="absolute top-14 left-[48%]">
        <Pin n={pin} />
      </span>
      <Chip tone={status === "Approved" ? "success" : "amber"} className="absolute bottom-2 left-2">
        {status}
      </Chip>
    </div>
  );
}
