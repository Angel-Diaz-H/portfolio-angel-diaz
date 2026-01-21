import { MainLayout, ScrollTechnologies } from "./components";

function App() {
  return (
    <MainLayout>
      <section className="flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold">Hola.</h1>
      </section>
      <ScrollTechnologies />
    </MainLayout>
  );
}

export default App;
