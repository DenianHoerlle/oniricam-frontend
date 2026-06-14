import { About, Header, Hero, HowItWorks } from "./newComponents";

const App = () => {
  return (
    <>
      <Header />
      <div className="px-10">
        <Hero />
        <About />
        <HowItWorks />
      </div>
    </>
  );
};

export default App;
