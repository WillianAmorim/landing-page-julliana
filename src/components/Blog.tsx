import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Quando procurar um fonoaudiólogo para seu filho?",
    summary:
      "Sinais de alerta que indicam que seu filho pode precisar de acompanhamento fonoaudiológico e quando é o momento certo de buscar ajuda.",
    date: "12 Mar 2026",
    color: "bg-primary/10",
  },
  {
    title: "5 brincadeiras que estimulam a fala",
    summary:
      "Atividades lúdicas e simples que pais podem fazer em casa para ajudar no desenvolvimento da linguagem das crianças.",
    date: "28 Fev 2026",
    color: "bg-accent/60",
  },
  {
    title: "Dificuldade de leitura: é dislexia?",
    summary:
      "Entenda as diferenças entre atraso na leitura e dislexia, e saiba como identificar cada situação corretamente.",
    date: "15 Fev 2026",
    color: "bg-secondary",
  },
]

const Blog = () => (
  <section id="blog" className="bg-secondary/30 py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-14 text-center">
        <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">
          Conteúdo
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Blog
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {posts.map((p) => (
          <Card
            key={p.title}
            className="group overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className={`h-44 ${p.color} flex items-center justify-center`}>
              <span className="font-heading text-6xl font-extrabold text-primary/40 select-none">
                F
              </span>
            </div>
            <CardContent className="p-6">
              <p className="mb-2 text-xs text-muted-foreground">{p.date}</p>
              <h3 className="mb-2 font-heading leading-snug font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2">
                Ler mais <ArrowRight className="h-4 w-4" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Blog
