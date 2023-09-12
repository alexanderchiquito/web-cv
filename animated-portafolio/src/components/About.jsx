//countUp
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variabts
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-20 lg:gap-y-0 h-screen">
          {/*Image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top"
          ></motion.div>
          {/*Text*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"  
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-gradient mb-4">About me.</h2>
            <h3 className="h3">Front-end developer</h3>
            <p className="mb-6">
            Throughout my learning, I have been able to apply 
            knowledge not only in programming or the development 
            world but also essential knowledge for project construction.
            </p>
            {/*Stats*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  years of <br />
                  learning
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={14} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Personals
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  group
                </div>
              </div>
            </div>
            <div>
              <button></button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
