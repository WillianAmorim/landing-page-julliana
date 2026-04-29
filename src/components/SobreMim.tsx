import { GraduationCap, Award, Briefcase, Heart } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    title: "Graduação em Fonoaudiologia",
    place: "Universidade Ceuma, UNICEUMA, Brasil.",
    year: "2018",
  },
  {
    icon: Award,
    title: "Especialização em andamento em Distúrbios de Fala e Linguagem",
    place: "UNYLEYA EDITORA E CURSOS S/A, Unyleya, Brasil",
    year: "2018",
  },
  {
    icon: Briefcase,
    title: "La Ponte PROMPT BRIDGING.",
    place: "Prompt Institute, PROMPT, Estados Unidos",
    year: "2023",
  },
  {
    icon: Heart,
    title: "Curso on-line DTTC - teoria e prática.",
    place: "Abrapraxia, ABRAPRAXIA, Brasil",
    year: "2024",
  },
]

const SobreMim = () => (
  <section id="sobre" className="bg-secondary/30 py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-14 text-center">
        <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">
          Conheça
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Sobre Mim
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2">
        {/* Texto descritivo */}
        <div className="space-y-5">
          <p className="leading-relaxed text-muted-foreground">
            Sou a{" "}
            <strong className="text-foreground">Julliana Borges</strong>,
              fonoaudióloga há 8 anos e completamente apaixonada pelo que faço. 
              Sempre busquei me aprofundar na área para oferecer o melhor para meus pacientes e suas famílias. Algumas formações marcaram muito minha trajetória, como PROMPT, com Gabriela Sanchez, clínica de fala, DTTC básico e avançado com a própria idealizadora Edythe Strand, além da pós-graduação em Comunicação Almentativa e estudos em fotobiomodulação.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Minha abordagem é centrada na criança e na família: acredito que o
            envolvimento dos pais é essencial para o sucesso terapêutico.
            Utilizo métodos lúdicos e baseados em evidências científicas para
            tornar cada sessão produtiva e prazerosa.
          </p>
          {/* <p className="leading-relaxed text-muted-foreground">
            Além da clínica, atuo como supervisora de estágio e participo de
            congressos nacionais, mantendo-me sempre atualizada com as melhores
            práticas da fonoaudiologia.
          </p> */}

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="rounded-xl bg-card p-4 text-center shadow-sm">
              <p className="font-heading text-2xl font-extrabold text-primary">
                +8
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Anos de experiência
              </p>
            </div>
            <div className="rounded-xl bg-card p-4 text-center shadow-sm">
              <p className="font-heading text-2xl font-extrabold text-primary">
                +500
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Pacientes atendidos
              </p>
            </div>
            <div className="rounded-xl bg-card p-4 text-center shadow-sm">
              <p className="font-heading text-2xl font-extrabold text-primary">
                4
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Especializações
              </p>
            </div>
          </div>
        </div>

        {/* Timeline de formação */}
        <div>
          <h3 className="mb-6 font-heading text-lg font-bold text-foreground">
            Formação e Certificações
          </h3>
          <div className="relative space-y-6 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-0.5 before:bg-border">
            {timeline.map((item) => (
              <div key={item.title} className="relative">
                <div className="absolute top-0 -left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="pl-4">
                  <p className="text-xs font-semibold text-primary">
                    {item.year}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SobreMim
