import { MapPin, Phone, Clock } from "lucide-react"

const Consultorio = () => (
  <section id="consultorio" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-14 text-center">
        <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">
          Espaço
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Consultório
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-2xl bg-accent/50 font-heading text-2xl font-bold text-primary/30"
            >
              Foto {n}
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <p className="leading-relaxed text-muted-foreground">
            Um espaço acolhedor e lúdico, pensado especialmente para crianças.
            Salas equipadas com materiais terapêuticos modernos e ambiente
            seguro para o melhor desenvolvimento do seu filho.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Endereço
                </p>
                <p className="text-sm text-muted-foreground">
                  Rua das Flores, 123 — Sala 45, Jardim Paulista, São Paulo — SP
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Telefone
                </p>
                <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Horário</p>
                <p className="text-sm text-muted-foreground">
                  Seg a Sex — 8h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Consultorio
