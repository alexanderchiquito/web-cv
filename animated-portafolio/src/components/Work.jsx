// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//Imagnes
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/*Text*/}
            <div>
              <h2 className="h2 leading-tight text-gradient">
                My latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Some deployed projects and you can see the 
                other projects down below in more info.
              </p>
              <a className="text-gradient btn-link " target="_blank" rel='noreferrer'  href="https://github.com/alexanderchiquito">
                More Info
              </a>
            </div>
            {/*Image*/}
            <div className="group relative overflow-hidden border-2  border-white/50 rounded-xl">
              {/*Overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/*Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a target="_blank" rel="noreferrer" href="https://main--famous-starship-bd1458.netlify.app/"><span className="text-gradient">UI/UX Desing </span></a>
              </div>
              {/*Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Heroes</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* Image */}
            <div className="group relative overflow-hidden border-2  border-white/50 rounded-xl">
              {/*Overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/*Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a target="_blank" rel="noreferrer" href="https://main--jolly-blini-fc5153.netlify.app/"><span className="text-gradient">UI/UX Desing </span></a>
              </div>
              {/*Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Admin UI</span>
              </div>
            </div>
            {/* Image */}
            <div className="group relative overflow-hidden border-2  border-white/50 rounded-xl">
              {/*Overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/*Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a target="_blank" rel="noreferrer" href="https://main--wondrous-scone-1a4e39.netlify.app/"><span className="text-gradient">UI/UX Desing </span></a>
              </div>
              {/*Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Pokemon</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
