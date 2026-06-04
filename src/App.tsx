import { Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-6 space-y-24">
        <section id="home" className="min-h-screen pt-20">
          <h1 className="text-4xl font-bold text-primary">Home</h1>
          <p className="mt-4 text-muted">Bem-vindo à página inicial.</p>
        </section>

        <section id="sobre" className="min-h-screen pt-20">
          <h2 className="text-3xl font-semibold text-primary">Sobre</h2>
          <p className="mt-4 text-muted">Informações sobre o projeto.</p>
        </section>

        <section id="como-funciona" className="min-h-screen pt-20">
          <h2 className="text-3xl font-semibold text-primary">Como funciona</h2>
          <p className="mt-4 text-muted">Explicação do funcionamento.</p>
        </section>

        <section id="beneficios" className="min-h-screen pt-20">
          <h2 className="text-3xl font-semibold text-primary">Benefícios</h2>
          <p className="mt-4 text-muted">Principais benefícios.</p>
        </section>

        <section id="inscricao" className="min-h-screen pt-20">
          <h2 className="text-3xl font-semibold text-primary">Inscrição</h2>
          <p className="mt-4 text-muted">Formulário ou instruções de inscrição.</p>
        </section>
      </main>
    </>
  );
};

export default App;
