import { pessoaUsandoNotebook } from "../assets";
import { DelayAnimation } from "./delayAnimation";
import { Image } from "./image";

const texts = {
  heroHeading: "The future of Dream Exploration",
  heroParagraph:
    "OniriCam represents a breakthrough in neurotechnology. Our device uses advanced neural sensors and AI-powered interpretation to record your brain activity during REM sleep, then translates these patterns into immersive visual and auditory experiences.",
  heroParagraph2:
    "What was once lost upon waking can now be preserved, analyzed, and shared. Your dreams are no longer ephemeral they become tangible memories you can revisit anytime.",
  ctaButton: "Join the Wishlist",
};

const About = () => {
  return (
    <DelayAnimation delay={300}>
      <div
        id="about"
        className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto py-20 mt-20 px-4 sm:px-6"
      >
        <DelayAnimation
          delay={600}
          className="w-full lg:w-auto flex justify-center"
        >
          <Image
            src={pessoaUsandoNotebook}
            alt="Pessoa com VR"
            className="w-full max-w-xl rounded-lg"
          />
        </DelayAnimation>
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            {texts.heroHeading}
          </h2>
          <DelayAnimation delay={600}>
            <p className="text-base leading-relaxed">{texts.heroParagraph}</p>
          </DelayAnimation>
          <DelayAnimation delay={900}>
            <p className="text-base leading-relaxed">{texts.heroParagraph2}</p>
          </DelayAnimation>
        </div>
      </div>
    </DelayAnimation>
  );
};

export { About };
