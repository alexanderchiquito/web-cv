import { motion } from "framer-motion";
//Variants
import { fadeIn } from "../variants";
//status rect
import { useRef, useState } from "react";
//Emails for contact me
import emailjs from '@emailjs/browser';



const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_7me7r4d', 'template_ihh2f03', ref.current, 'AVImKT4FTaRAZu-jf')
    .then((result)=>{
      console.log(result.text);
      setSuccess(true);
    }, (error)=>{
      console.log(error.text);
      setSuccess(false);
    })
    
  }

  return (
    <div className="py-16 lg:selection" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*Text*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase text-gradient font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Let s work <br /> together!!{" "}
              </h2>
            </div>
          </motion.div>
          {/*info*/}
          <motion.form
            ref={ref} onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start "
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-gradient transition-all "
              type="text"
              placeholder="Your name"
              name="name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-accent transition-all "
              type="text"
              placeholder="Your email"
              name="email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full 
              placeholder:text-white focus:border-gradient transition-all
              resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button type="submit" className="btn btn-lg">Send message</button>
            {success && "You message has been. We'll get back to you soon :)"}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
