import { Card, CardContent } from "@/components/ui/card";
import tecPrompt from "@/assets/tec-prompt.jpg";
import tecDttc from "@/assets/tec-dttc.jpg";
import tecCaa from "@/assets/transtorno motor de fala.jpeg";
import tecRest from "@/assets/tec-rest.jpg";
import tecLsvt from "@/assets/tec-lsvt.jpg";

const tecnicas = [
  {
    image: tecPrompt,
    alt: "Terapeuta usando pistas táteis na face da criança — técnica PROMPT",
    sigla: "PROMPT",
    nome: "Prompts for Restructuring Oral Muscular Phonetic Targets",
    descricao:
      "Técnica tátil-cinestésica que utiliza toques específicos no rosto da criança para guiar os movimentos articulatórios corretos da fala.",
  },
  {
    image: tecDttc,
    alt: "Criança praticando repetição de sílabas com cartões",
    sigla: "DTTC",
    nome: "Dynamic Temporal and Tactile Cueing",
    descricao:
      "Abordagem indicada para apraxia de fala na infância, com pistas dinâmicas, temporais e táteis para a produção precisa de sons.",
  },
  {
    image: tecCaa,
    alt: "Criança usando tablet com símbolos de comunicação alternativa",
    sigla: "CAA",
    nome: "Comunicação Aumentativa e Alternativa",
    descricao:
      "Recursos visuais, pranchas e tecnologias assistivas que ampliam ou substituem a fala em pessoas com dificuldades de comunicação.",
  },
  {
    image: tecRest,
    alt: "Terapeuta trabalhando com criança usando espelho",
    sigla: "REST",
    nome: "Reestruturação dos Sons da Fala",
    descricao:
      "Programa estruturado de reorganização fonética e fonológica, focado em reorganizar os padrões de produção dos sons.",
  },
  {
    image: tecLsvt,
    alt: "Paciente praticando exercícios vocais com terapeuta",
    sigla: "LSVT LOUD",
    nome: "Lee Silverman Voice Treatment",
    descricao:
      "Tratamento intensivo de voz amplamente utilizado em pacientes com Doença de Parkinson e outros distúrbios neurológicos da voz.",
  },
];

const Tecnicas = () => (
  <section id="tecnicas" className="py-20 lg:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Métodos baseados em evidência</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Técnicas Utilizadas</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Abordagens reconhecidas internacionalmente que aplico de acordo com o perfil e as necessidades de cada paciente.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tecnicas.map((t) => (
          <Card
            key={t.sigla}
            className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={t.image}
                alt={t.alt}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide shadow-md">
                {t.sigla}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading text-base font-bold text-foreground mb-1">{t.nome}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.descricao}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Tecnicas;
