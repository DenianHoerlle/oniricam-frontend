import { pessoaComVR } from "../assets";
import { DelayAnimation } from "./delayAnimation";
import { Image } from "./image";

const texts = {
  heroHeading: "Capture your dreams like never before",
  heroParagraph:
    "OniriCam briges the gap between the concious and unconcius mind translating your dream into stunning audivisual experiences. Explore the hidden depths of your imagination witch cutting-edge technology",
  ctaButton: "Join the Wishlist",
};

const Hero = () => {
  return (
    <DelayAnimation delay={500}>
      <div
        id="home"
        className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto py-10 px-4 sm:px-6"
      >
        <div className="flex flex-col gap-4 animate-appear max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
            {texts.heroHeading}
          </h1>
          <DelayAnimation delay={800}>
            <p className="text-base sm:text-lg leading-relaxed">
              {texts.heroParagraph}
            </p>
          </DelayAnimation>
          <DelayAnimation delay={1100}>
            <a
              href="#contato"
              className="inline-flex items-center justify-center py-3 px-5 bg-black text-white rounded-2xl w-min whitespace-nowrap cursor-pointer"
            >
              {texts.ctaButton}
            </a>
          </DelayAnimation>
        </div>
        <DelayAnimation
          delay={1400}
          className="w-full flex justify-center lg:justify-end"
        >
          <Image
            src={pessoaComVR}
            alt="Pessoa com VR"
            className="max-w-full sm:h-96 h-72 object-cover"
          />
        </DelayAnimation>
      </div>
    </DelayAnimation>
  );
};

export { Hero };
