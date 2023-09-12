//icons
// import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//Services Data
const services = [
  {
    name: "UI/UX",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi saepe voluptatum eum eligendi magni? ",
  },
  {
    name: "Develooment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi saepe voluptatum eum eligendi magni? ",
  },
  {
    name: "Develooment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi saepe voluptatum eum eligendi magni? ",
  },
];
const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*Text & Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-gradient mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              saepe voluptatum eum eligendi magni?
            </h3>
          </motion.div>
          {/*Services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*Services List*/}
            <div>
              {services.map((service, index) => {
                //destructure services
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
