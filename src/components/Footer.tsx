import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="flex shadow-inner justify-center items-center flex-col text-white"
      style={{ backgroundColor: "rgb(71, 85, 105)" }}
    >
      <div>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
      </div>
      <div>
        <p className="flex cursor-pointer">
          <AiFillInstagram size={30} />
          <AiOutlineTwitter size={30} />
          <AiOutlineFacebook size={30} />
        </p>
      </div>
      <p>Copyright &#169; 2023 Light.ge</p>
    </footer>
  );
};

export default Footer;
