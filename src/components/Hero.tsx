import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center bg-secondary/40 pt-20"
    >
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative">
              <div className="mx-auto flex aspect-[4/5] w-full max-w-md items-end justify-center overflow-hidden rounded-3xl bg-accent/60">
                <div className="h-4/5 w-3/4 rounded-t-3xl bg-primary/20" />
              </div>
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary/30 blur-2xl" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-accent blur-xl" />
            </div>
          </div>

          {/* Text */}
          <div className="animate-fade-in-delay-1 order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
              Fonoaudióloga
            </p>
            <h1 className="mb-4 font-heading text-4xl leading-tight font-extrabold text-foreground md:text-5xl lg:text-6xl">
              Julliana Borges
              <br />
            </h1>
            <p className="mb-2 text-lg font-medium text-muted-foreground">
              CRFa 2-12345
            </p>
            <p className="mb-8 max-w-lg leading-relaxed text-muted-foreground">
              Especialista em fala e linguagem infantil, com mais de 10 anos de
              experiência ajudando crianças a se comunicarem com confiança.
              Formada pela USP, com especialização em Linguagem pelo CFFa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 font-semibold"
                onClick={() => scrollTo("#contato")}
              >
                Agendar consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-semibold"
                onClick={() => scrollTo("#especialidades")}
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
