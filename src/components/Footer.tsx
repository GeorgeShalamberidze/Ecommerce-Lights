import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex h-20 shadow-inner justify-center items-center flex-col">
      <p>Copyright &#169; 2023 Light.ge</p>
      <div>
        <p className="flex cursor-pointer">
          <AiFillInstagram size={30} />
          <AiOutlineTwitter size={30} />
          <AiOutlineFacebook size={30} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
