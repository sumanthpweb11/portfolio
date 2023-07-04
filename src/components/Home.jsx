import React from "react";

import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-1 place-items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-grey sm:text-[1.25rem] mb-4">Web Developer</div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            Sumanth Prabhu
          </h2>
          <p className="opacity-80 text-2xl">
            Passionate about Learning Javascript ,React, Node and becoming
            really good at it eventually.
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href="#contact"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
