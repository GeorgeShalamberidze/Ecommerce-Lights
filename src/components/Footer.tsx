import Link from "next/link";
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
      <div className="flex gap-52">
        <div className="company">
          <h1>COMPANY INFO</h1>
          <div className="flex ">
            <Link href="/company/about-us">About Us</Link>
            <Link href="/company/return-policy">Return Policy</Link>
            <Link href="/company/shipping-policy">Shipping Policy</Link>
          </div>
        </div>
        <div>
          <p className="flex cursor-pointer">
            <AiFillInstagram size={30} />
            <AiOutlineTwitter size={30} />
            <AiOutlineFacebook size={30} />
          </p>
        </div>
      </div>
      <p>Copyright &#169; 2023 Light.ge</p>
    </footer>
  );
};

export default Footer;
