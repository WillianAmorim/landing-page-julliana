import { useState, useEffect } from "react"
import { Menu, X, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Blog", href: "#blog" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Contato", href: "#contato" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <button
          onClick={() => handleClick("#inicio")}
          className="font-heading text-xl font-bold text-primary"
        >
          Julliana Borges
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </button>
          ))}
          <div className="ml-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/jullianaborges.fono/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-foreground/60 transition-colors hover:text-primary" />
            </a>
            <a 
              href="https://wa.me/5598982217849" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Phone className="h-5 w-5 text-foreground/60 transition-colors hover:text-primary" />
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="space-y-3 border-t bg-background px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="block w-full py-2 text-left text-sm font-medium text-foreground/70 hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
