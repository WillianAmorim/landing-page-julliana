import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Agendamento = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve para confirmar seu horário.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Agende</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Pré-Agendamento</h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Preencha o formulário abaixo e entraremos em contato para confirmar a consulta.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-2xl shadow-lg p-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" name="name" placeholder="Seu nome" required maxLength={100} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="seu@email.com" required maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" required maxLength={20} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="complaint">Queixa principal</Label>
              <Textarea
                id="complaint"
                name="complaint"
                placeholder="Descreva brevemente o motivo da consulta..."
                required
                maxLength={1000}
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full font-semibold" disabled={loading}>
              {loading ? "Enviando..." : "Solicitar agendamento"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Agendamento;
