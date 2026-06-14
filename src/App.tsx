import {
  About,
  Benefits,
  Footer,
  Form,
  Header,
  Hero,
  HowItWorks,
  WhoIsFor,
} from "./newComponents";

const App = () => {
  return (
    <>
      <Header />
      <div className="px-10">
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <WhoIsFor />
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default App;
