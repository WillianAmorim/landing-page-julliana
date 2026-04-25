import Header from "@/components/Header"
import Hero from "@/components/Hero"
import SobreMim from "@/components/SobreMim"
import Especialidades from "@/components/Especialidades"
import Blog from "@/components/Blog"
import Consultorio from "@/components/Consultorio"
import Agendamento from "@/components/Agendamento"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import Tecnicas from "@/components/Tecnicas"

const Index = () => (
  <>
    <Header />
    <Hero />
    <SobreMim />
    <Especialidades />
    <Tecnicas />
    {/* <Blog /> */}
    <Consultorio />
    <Agendamento />
    <Footer />
    <WhatsAppButton />
  </>
)

export default Index
