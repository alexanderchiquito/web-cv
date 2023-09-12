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
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/*Text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[30px] font-bold leading-[0.8] lg:text-[60px] "
            >
              Alex <span>Ramirez</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">Web</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Engineer", 2000]}
                speed={50}
                className={"text-gradient"}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mx-w-lg mx-auto  lg:mx-0"
            >
              Web developer, Systems Engineer, Haven´t you hired me yet? Well, in this portfolio, you´ll be able to see some of that can do.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <h1 className="font-bold">Here me!</h1>
              <a className="text-gradient btn-link " target="_blank" rel='noreferrer'  href="https://www.linkedin.com/in/alexander-ramirez-chiquito-92a23a280/" >
                More Info
              </a>
            </motion.div>
            {/*Social media */} 
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a target="_blank" rel='noreferrer' href="https://github.com/alexanderchiquito">
                <FaGithub />
              </a>
              <a target="_blank" rel='noreferrer' href="">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/*Image Avatar*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={Avatar} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
