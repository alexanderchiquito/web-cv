//images
import Avatar from "../assets/avatar.png";
//icons
import { FaGithub, FaDribbble } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//Variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/*Text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[30px] font-bold leading-[0.8] lg:text-[60px] ">
              Alex <span>Ramirez</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">Web</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Engineer", 2000]}
                speed={50}
                className={"text-gradient"}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 mx-w-lg mx-auto  lg:mx-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis adipisci facilis cumque tempore eius.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <h1 className="font-bold">Here me!</h1>
              <a className="text-gradient btn-link " href="#">
                More Info
              </a>
            </div>
            {/*Social media */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaDribbble />
              </a>
            </div>
          </div>
          {/*Image Avatar*/}
          <div>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
