import {
  About,
  Benefits,
  Footer,
  Form,
  Header,
  Hero,
  HowItWorks,
  Publications,
  WhoIsFor,
} from "./newComponents";

const App = () => {
  return (
    <>
      <Header />
      <div className="px-10 pt-16">
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <WhoIsFor />
        <Publications />
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default App;
