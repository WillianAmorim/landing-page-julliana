import { MessageSquare, BookOpen, ClipboardCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const specialties = [
  {
    icon: MessageSquare,
    title: "Atraso de Fala e Linguagem",
    description:
      "Avaliação e tratamento de crianças com atraso no desenvolvimento da fala, dificuldades de pronúncia e compreensão oral.",
  },
  {
    icon: BookOpen,
    title: "Distúrbios de Aprendizagem",
    description:
      "Intervenção especializada para dificuldades de leitura, escrita e processamento auditivo que impactam o aprendizado escolar.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação e Intervenção",
    description:
      "Avaliação completa das habilidades comunicativas e plano terapêutico individualizado para cada paciente.",
  },
]

const Especialidades = () => (
  <section id="especialidades" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-14 text-center">
        <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">
          Áreas de atuação
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Especialidades
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {specialties.map((s, i) => (
          <Card
            key={s.title}
            className={`group border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in${
              i > 0 ? `-delay-${i}` : ""
            }`}
          >
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-primary/20">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Especialidades
