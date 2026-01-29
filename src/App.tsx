import {
  // AppScrollTechnologies,
  Capacitaciones,
  Experiencia,
  HeroSection,
  MainLayout,
  Proyectos,
  Tecnologias,
} from "@/components/index";

function App() {
  return (
    <MainLayout>
      {/* Header */}
      <HeroSection />
      {/* Secciones */}
      {/* <AppScrollTechnologies /> */}
      <Proyectos />
      <Tecnologias />
      <Experiencia />
      <Capacitaciones />
    </MainLayout>
  );
}

export default App;
