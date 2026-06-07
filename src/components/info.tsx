import { pessoaComVR } from "../assets";

const texts = {
  title: "A maioria dos seus sonhos desaparecem logo ao acordar",
  description:
    "Você acorda com a sensação de ter vivido uma aventura incrível, uma ideia genial ou um insight profundo, mas as imagens evaporam. Os diários de papel são limitados e falham em traduzir a verdadeira essência e a riqueza visual do seu inconsciente.",
};

const InfoSection = () => {
  return (
    <div className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center">
            <img
              src={pessoaComVR}
              alt="Pessoa com VR"
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>
          <div className="space-y-6 h-full flex flex-col justify-evenly">
            <h2 className="text-3xl font-bold tracking-tight text-secondary text-center sm:text-4xl">
              {texts.title}
            </h2>
            <p className="text-lg text-fifth">{texts.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InfoSection };
