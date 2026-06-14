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
      <div className="flex max-w-7xl mx-auto py-10 gap-10">
        <div className="flex flex-col gap-4 animate-appear">
          <h1 className="text-7xl">{texts.heroHeading}</h1>
          <DelayAnimation delay={800}>
            <p className="text-md">{texts.heroParagraph}</p>
          </DelayAnimation>
          <DelayAnimation delay={1100}>
            <a
              href="#contato"
              className="py-3 px-5 bg-black text-white rounded-2xl w-min whitespace-nowrap cursor-pointer"
            >
              {texts.ctaButton}
            </a>
          </DelayAnimation>
        </div>
        <DelayAnimation delay={1400}>
          <Image src={pessoaComVR} alt="Pessoa com VR" className="h-96" />
        </DelayAnimation>
      </div>
    </DelayAnimation>
  );
};

export { Hero };
