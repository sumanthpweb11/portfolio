import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between">
      <div>
        <a
          href="https://www.linkedin.com/in/sumanth-prabhu-721b96281/"
          className="mr-2 text-blue text-[0.9rem]"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          href="https://www.instagram.com/photographic_reminiscence/?hl=en"
          className="mr-2 text-blue text-[0.9rem]"
          target="_blank"
        >
          Instagram
        </a>
      </div>
      <div className="text-[0.9rem] text-blue">
        &#169; 2023 All rights deserved.
      </div>
    </div>
  );
};

export default Footer;
