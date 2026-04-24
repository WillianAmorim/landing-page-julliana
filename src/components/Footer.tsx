import { Instagram, Phone, Mail } from "lucide-react"

const Footer = () => (
  <footer className="bg-foreground py-12 text-background/80">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid items-start gap-8 md:grid-cols-3">
        <div>
          <p className="mb-2 font-heading text-lg font-bold text-background">
            Julliana Borges
          </p>
          <p className="text-sm">CRFa 2-12345</p>
          <p className="mt-1 text-sm">Fonoaudióloga — Fala e Linguagem</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-background">Contato</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (11) 99999-9999
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> contato@carolinafono.com.br
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-background">
            Redes Sociais
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/jullianaborges.fono/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-background/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Julliana Borges — Todos os direitos
        reservados.
      </div>
    </div>
  </footer>
)

export default Footer
