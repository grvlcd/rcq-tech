import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <MagicCard mode="orb" className="rounded-3xl">
        <div className="rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold">Let&apos;s build something together.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            Have a project in mind? Tell us about it. We will get back to you within 24 hours with a free consultation.
          </p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2" placeholder="Name" />
            <input className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2" placeholder="Email" type="email" />
            <input className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2 md:col-span-2" placeholder="Service needed" />
            <textarea className="min-h-36 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2 md:col-span-2" placeholder="Project description" />
            <input className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2 md:col-span-2" placeholder="Budget range" />
            <div className="md:col-span-2">
              <Button size="lg" className="w-full md:w-auto" type="button">
                Send inquiry
              </Button>
            </div>
          </form>
        </div>
      </MagicCard>
    </section>
  )
}
