import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contato via WhatsApp"
    className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[hsl(142,70%,40%)] hover:shadow-xl"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
)

export default WhatsAppButton
