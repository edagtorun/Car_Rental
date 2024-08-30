import Button from "../Button";
import { motion } from "framer-motion";

type HeroProps = {
  //useRef ile alinan bir div elementinin tipi
  element: React.RefObject<HTMLDivElement>;
};
const Hero = ({ element }: HeroProps) => {
  const scroll = () => {
    element.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 mah-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>

        <p className="hero__subtitle">
          Altin standartta hizmetle unutulmaz bir yolculuga hazir misin? Arac
          kiralama deneyimini Altin Secenekleri ile taclandirarak her anini ozel
          kilabilirsin.
        </p>

        <Button title="Arabalari Kesfet" designs="mt-10" handleClick={scroll} />
      </div>

      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          src="/hero.png"
          alt="bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
