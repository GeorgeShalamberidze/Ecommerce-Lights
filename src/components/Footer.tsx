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
          <h1 className="font-bold text-xl mb-2 mt-4">COMPANY INFO</h1>
          <div className="flex flex-col ">
            <Link href="/company/about-us" className="remove-underline">
              About Us
            </Link>
            <Link href="/company/return-policy" className="remove-underline">
              Return Policy
            </Link>
            <Link href="/company/shipping-policy" className="remove-underline">
              Shipping Policy
            </Link>
          </div>
        </div>

        <div className="contact">
          <h1 className="font-bold text-xl mb-2 mt-4">Contact Us</h1>
          <div className="flex flex-col ">
            <Link href="tel:+995577026102" className="remove-underline">
              (+995) 577-02-61-02
            </Link>
            <Link
              href="mailto:giorgishalamberidze1995@gmail.com"
              className="remove-underline"
            >
              giorgishalamberidze1995@gmail.com
            </Link>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold text-xl mb-2 mt-4">Follow Us</h1>
          <p className="flex gap-3">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="cursor-pointer"
            >
              <AiFillInstagram size={30} />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              className="cursor-pointer"
            >
              <AiOutlineTwitter size={30} />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="cursor-pointer"
            >
              <AiOutlineFacebook size={30} />
            </Link>
          </p>
        </div>
      </div>
      <p className="mt-8 mb-2 text-sm">Copyright &#169; 2023 Lights.ge</p>
    </footer>
  );
};

export default Footer;
