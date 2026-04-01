import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Button } from "@/components/ui/button"
import { navItems } from "@/components/sections/landing/data"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          RCQ Tech
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <AnimatedThemeToggler className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-accent" />
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Get a free quote</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
