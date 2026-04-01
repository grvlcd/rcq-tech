import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";

export function HeroSection() {
    const tagLine = ["Reliability", "Consistency", "Quality"];

    return (
        <section
            className="relative isolate mx-auto min-h-[calc(100svh-69px)] w-full max-w-6xl px-4 sm:px-6 lg:px-8"
            aria-label="Introduction"
        >
            <div className="relative grid min-h-[calc(100svh-69px)] md:grid-cols-2 md:items-center md:gap-8 lg:gap-12">
                <div
                    className={cn(
                        "pointer-events-auto z-0 flex items-center justify-center",
                        "absolute inset-0 md:relative md:inset-auto md:justify-center"
                    )}
                    aria-hidden
                >
                    <div
                        className={cn(
                            "relative aspect-square opacity-95",
                            "h-[min(92vmin,420px)] w-[min(92vmin,420px)]",
                            "max-md:translate-y-[4%]",
                            "md:h-[min(70vmin,480px)] md:w-[min(70vmin,480px)] lg:h-[min(72vmin,520px)] lg:w-[min(72vmin,520px)]",
                            "[mask-image:radial-gradient(circle_at_50%_50%,black_42%,transparent_74%)] md:[mask-image:radial-gradient(circle_at_45%_50%,black_38%,transparent_70%)]"
                        )}
                    >
                        <Globe />
                    </div>
                </div>

                <div className="relative z-10 flex min-h-[calc(100svh-69px)] flex-col justify-center py-16 md:col-start-2 md:min-h-0 md:py-0 max-md:pointer-events-none">
                    <div
                        className={cn(
                            "flex w-full max-w-2xl flex-col gap-6",
                            "max-md:pointer-events-auto max-md:rounded-xl max-md:bg-black/28 max-md:px-4 max-md:py-5"
                        )}
                    >
                        <p className="font-[family-name:var(--font-geist-mono)] text-xs font-medium uppercase tracking-[0.2em] text-gold max-md:[text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                            Reliability · Consistency · Quality
                        </p>
                        <h1 className="max-w-2xl font-[family-name:var(--font-sans)] text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl max-md:[text-shadow:0_2px_4px_rgba(0,0,0,0.85),0_8px_28px_rgba(0,0,0,0.55)]">
                            Turn your ideas into working software.
                        </h1>
                        <p className="max-w-xl text-base leading-relaxed text-zinc-400 max-md:text-zinc-300">
                            RCQ Tech is a development studio that builds custom apps, automates workflows, and creates websites that get results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
