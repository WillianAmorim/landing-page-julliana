import { MessageSquare, BookOpen, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import espFala from "../assets/esp-fala.jpg";
import espAprendizagem from "../assets/esp-aprendizagem.jpg";
import espAvaliacao from "../assets/esp-avaliacao.jpg";

const specialties = [
  {
    icon: MessageSquare,
    image: espFala,
    alt: "Criança aprendendo palavras com cartões coloridos",
    title: "Atraso de Fala e Linguagem",
    description:
      "Avaliação e tratamento de crianças com atraso no desenvolvimento da fala, dificuldades de pronúncia e compreensão oral.",
  },
  {
    icon: BookOpen,
    image: espAprendizagem,
    alt: "Criança lendo livro com letras sobre a mesa",
    title: "Distúrbios de Aprendizagem",
    description:
      "Intervenção especializada para dificuldades de leitura, escrita e processamento auditivo que impactam o aprendizado escolar.",
  },
  {
    icon: ClipboardCheck,
    image: espAvaliacao,
    alt: "Fonoaudióloga avaliando criança com prancheta",
    title: "Avaliação e Intervenção",
    description:
      "Avaliação completa das habilidades comunicativas e plano terapêutico individualizado para cada paciente.",
  },
];

const Especialidades = () => (
  <section id="especialidades" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Áreas de atuação</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Especialidades</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {specialties.map((s, i) => (
          <Card
            key={s.title}
            className={`group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in${
              i > 0 ? `-delay-${i}` : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.alt}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 mx-auto -mt-14 mb-4 rounded-2xl bg-card shadow-md flex items-center justify-center relative z-10 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Especialidades;
