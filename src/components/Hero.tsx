import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import ImageJuliana from '../assets/juliana-melhorada.png'

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-secondary/40 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative">
              <div className="w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={ImageJuliana}
                  alt="Dra. Carolina Mendes, fonoaudióloga, sorrindo com criança em sessão"
                  width={896}
                  height={1120}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/30 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-accent blur-xl" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 animate-fade-in-delay-1">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Fonoaudióloga</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
              Dra. Julliana Borges<br />Mendes
            </h1>
            <p className="text-lg text-muted-foreground mb-2 font-medium">CRFa 2-12345</p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Especialista em fala e linguagem infantil, com mais de 10 anos de experiência ajudando crianças a se comunicarem com confiança. Formada pela USP, com especialização em Linguagem pelo CFFa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 font-semibold" onClick={() => scrollTo("#contato")}>
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
