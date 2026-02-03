import {
  // AppScrollTechnologies,
  Capacitaciones,
  Experiencia,
  HeroSection,
  MainLayout,
  Proyectos,
  SobreMi,
  Tecnologias,
} from "@/components/index";

function App() {
  return (
    <MainLayout>
      {/* Header */}
      <HeroSection />

      {/* Secciones */}
      {/* <AppScrollTechnologies /> */}
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Tecnologias />
      <Capacitaciones />
    </MainLayout>
  );
}

export default App;
