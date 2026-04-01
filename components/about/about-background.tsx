import { cn } from "@/lib/utils";

export function AboutBackground() {
  return (
    <div
      className="pointer-events-none absolute -inset-x-24 -top-24 bottom-0 opacity-[0.35]"
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(rgba(196,154,0,0.14)_1px,transparent_1px)]",
          "[background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        )}
      />
      <div className="absolute inset-0 bg-linear-to-b from-gold/[0.06] via-transparent to-transparent" />
    </div>
  );
}
