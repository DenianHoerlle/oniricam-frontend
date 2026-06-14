import { About, Benefits, Header, Hero, HowItWorks } from "./newComponents";

const App = () => {
  return (
    <>
      <Header />
      <div className="px-10">
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
      </div>
    </>
  );
};

export default App;
