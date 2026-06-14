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
      <div className="flex max-w-7xl mx-auto py-10 gap-10 mt-20">
        <DelayAnimation delay={600}>
          <Image
            src={pessoaUsandoNotebook}
            alt="Pessoa com VR"
            className="min-w-xl rounded-lg"
          />
        </DelayAnimation>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl">{texts.heroHeading}</h1>
          <DelayAnimation delay={600}>
            <p className="text-md">{texts.heroParagraph}</p>
          </DelayAnimation>
          <DelayAnimation delay={900}>
            <p className="text-md">{texts.heroParagraph2}</p>
          </DelayAnimation>
        </div>
      </div>
    </DelayAnimation>
  );
};

export { About };
