import React, { useState } from "react";
import Link from "next/link";
import { SearchBar, NavBar } from "../components";
import { BiChevronDown } from "react-icons/bi";
import { useStateContext } from "@/context/ProductContext";
import Image from "next/image";

const Header = () => {
  const navbarItems = [
    {
      name: "DIY Kits",
      aTag: [
        { href: "/collections/all-diy-kits", content: "All DIY Kits" },
        { href: "/collections/2-x-2", content: "2'x 2'" },
        { href: "/collections/2-x-4", content: "2'x 4'" },
        { href: "/collections/3-x-3", content: "3'x 3'" },
        { href: "/collections/4-x-4", content: "4'x 4'" },
        { href: "/collections/5-x-5", content: "5'x 5'" },
        { href: "/collections/mass-medical", content: "Mass Medical" },
        { href: "/collections/supplemental", content: "Supplemental" },
      ],
      icon: <BiChevronDown />,
    },
    {
      name: "Drivers",
      aTag: [
        { href: "/collection/all-drivers", content: "All Drivers" },
        { href: "/collection/dc-dc-drivers", content: "DC-DC Drivers" },
        { href: "/collection/dimmable-drivers", content: "Dimmable Drivers" },
        {
          href: "/collection/non-dimmable-drivers",
          content: "Non-Dimmable Drivers",
        },
      ],
      icon: <BiChevronDown />,
    },
    {
      name: "LEDs",
      aTag: [
        { href: "/collection/all-leds", content: "All LEDs" },
        { href: "/collection/cob-and-pucks", content: "COB & Pucks" },
        { href: "/collection/enhancement-pucks", content: "Enhancement Pucks" },
        {
          href: "/collection/supplemental-boards",
          content: "Supplemental Boards",
        },
        { href: "/collection/collection/led-blue", content: "Blue" },
        { href: "/collection/led-green", content: "Green" },
        { href: "/collection/led-red", content: "Red" },
        { href: "/collection/led-white", content: "White" },
        { href: "/collection/led-infrared", content: "Infrared" },
      ],
      icon: <BiChevronDown />,
    },
    {
      name: "Fixtures",
      aTag: [
        { href: "/collection/all-fixtures", content: "All Fixtures" },
        {
          href: "/collection/horticulture-fixtures",
          content: "Horticulture Fixtures",
        },
        { href: "/collection/aquarium-fixtures", content: "Aquarium Fixtures" },
      ],
      icon: <BiChevronDown />,
    },
    {
      name: "Heatsinks",
      aTag: [
        { href: "/collection/all-heatsinks", content: "All Heatsinks" },
        { href: "/collection/canopy-substrate", content: "Canopy Substrate" },
        { href: "/collection/pin", content: "Pin" },
      ],
      icon: <BiChevronDown />,
    },
    {
      name: "Dimmers",
      aTag: [
        { href: "/collection/all-dimmers", content: "All Dimmers" },
        { href: "/collection/0-10V", content: "0-10V" },
        { href: "/collection/pwm", content: "PWM" },
      ],
      icon: <BiChevronDown />,
    },
    {
      name: "Accessories",
      aTag: [
        { href: "/collection/all-accessories", content: "All Accessories" },
        { href: "/collection/ac-adapters", content: "AC Adapters" },
        { href: "/collection/fans", content: "Fans" },
        { href: "/collection/hanging-kits", content: "Hanging Kits" },
        { href: "/collection/led-testers", content: "LED Testers" },
        { href: "/collection/reflectors", content: "Reflectors" },
        {
          href: "/collection/solderless-accessories",
          content: "Solderless Accessories",
        },
        { href: "/collection/thermal-compounds", content: "Thermal Compounds" },
        { href: "/collection/wire-management", content: "Wire-Management" },
      ],
      icon: <BiChevronDown />,
    },
  ];

  const { showCart } = useStateContext();

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownIndex(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="header_wrapper">
        <div className="header_container">
          <Link href="/">
            <Image
              src="/assets/lights_logo2.png"
              alt="light bulb"
              width={500}
              height={500}
            />
          </Link>
          <SearchBar />
          <NavBar />
        </div>

        <div className="bottom_nav text-white font-medium text-lg flex justify-center">
          <nav aria-label="main" className="nav_main">
            <ul className="flex gap-5 h-full items-center">
              {navbarItems.map((item, index) => (
                <div
                  key={index}
                  className={`border-emerald-400 rounded cursor-pointer flex items-center h-full ${
                    showCart ? "pointer-events-none" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <li className="relative dropdown_menu_list">
                    <a className="flex text-center items-center no-underline">
                      <span>{item.name}</span>
                      {item.icon}
                    </a>
                    <div
                      className={`bg-slate-400 absolute top-2 dropdown_menu z-0 -left-10 ${
                        dropdownIndex === index ? "show" : "notShow"
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <div>
                        <ul className="flex flex-col gap-3 w-max">
                          {item.aTag.map((a, i) => (
                            <li
                              key={i}
                              className="border-b-2 border-stone-100 last:border-b-0 tytyty"
                            >
                              <a href={a.href}>{a.content}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
