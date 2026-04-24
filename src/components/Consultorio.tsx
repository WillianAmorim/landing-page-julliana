import { MapPin, Phone, Clock } from "lucide-react";
// import consultorio1 from "@/assets/consultorio-1.jpg";
import consultorio1 from "@/assets/clinica01melhorada.png";
import consultorio2 from "@/assets/consultorio-2.jpg";
import consultorio3 from "@/assets/consultorio-3.jpg";
import consultorio4 from "@/assets/consultorio-4.jpg";

const fotos = [
  { src: consultorio1, alt: "Sala de espera acolhedora com paredes azul claro" },
  { src: consultorio2, alt: "Sala de atendimento infantil com mesa, cadeiras e espelho" },
  { src: consultorio3, alt: "Estante com materiais terapêuticos e livros" },
  { src: consultorio4, alt: "Espaço lúdico com tapete, almofadas e decoração infantil" },
];

const Consultorio = () => (
  <section id="consultorio" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Espaço</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Consultório</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4">
          {fotos.map((f) => (
            <div key={f.src} className="aspect-square rounded-2xl overflow-hidden shadow-md group">
              <img
                src={f.src}
                alt={f.alt}
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Um espaço acolhedor e lúdico, pensado especialmente para crianças. Salas equipadas
            com materiais terapêuticos modernos e ambiente seguro para o melhor desenvolvimento
            do seu filho.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Endereço</p>
                <p className="text-sm text-muted-foreground">Rua Indiana, n3, qd.2, parque smithland, São Luís-MA </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Telefone</p>
                <p className="text-sm text-muted-foreground">(98) 982217849</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Horário</p>
                <p className="text-sm text-muted-foreground">Seg a Sex — 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Consultorio;
