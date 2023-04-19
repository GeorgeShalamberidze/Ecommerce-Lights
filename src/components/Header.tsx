import React from "react";
import Link from "next/link";
import { SearchBar, NavBar } from "../components";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const navBarItems = [
    {
      name: "DIY Kits",
      content: (
        <>
          <ul>
            <li>
              <a href="/collections/all-diy-kits">All DIY Kits</a>
            </li>
            <li>
              <a href="/collections/2-x-2">2'x 2'</a>
            </li>
            <li>
              <a href="/collections/2-x-4">2'x 4'</a>
            </li>
            <li>
              <a href="/collections/3-x-3">3'x 3'</a>
            </li>
            <li>
              <a href="/collections/4-x-4">4'x 4'</a>
            </li>
            <li>
              <a href="/collections/5-x-5">5'x 5'</a>
            </li>
            <li>
              <a href="/collections/mass-medical">Mass Medical</a>
            </li>
            <li>
              <a href="/collections/supplemental">Supplemental</a>
            </li>
          </ul>
        </>
      ),
      icon: <BiChevronDown />,
    },
    {
      name: "Drivers",
      content: (
        <>
          <ul>
            <li>
              <a href="collection/all-drivers">All Drivers</a>
            </li>
            <li>
              <a href="collection/dc-dc-drivers">DC-DC Drivers</a>
            </li>
            <li>
              <a href="collection/dimmable-drivers">Dimmable Drivers</a>
            </li>
            <li>
              <a href="collection/non-dimmable-drivers">Non-Dimmable Drivers</a>
            </li>
          </ul>
        </>
      ),
      icon: <BiChevronDown />,
    },
    {
      name: "LEDs",
      content: (
        <>
          <ul>
            <li>
              <a href="collection/all-leds">All LEDs</a>
            </li>
            <li>
              <a href="collection/cob-and-pucks">COB & Pucks</a>
            </li>
            <li>
              <a href="collection/enhancement-pucks">Enhancement Pucks</a>
            </li>
            <li>
              <a href="collection/supplemental-boards">Supplemental Boards</a>
            </li>
            <li>
              <a href="collection/led-blue">Blue</a>
            </li>
            <li>
              <a href="collection/led-green">Green</a>
            </li>
            <li>
              <a href="collection/led-red">Red</a>
            </li>
            <li>
              <a href="collection/led-white">White</a>
            </li>
            <li>
              <a href="collection/infrared">Infrared</a>
            </li>
          </ul>
        </>
      ),
      icon: <BiChevronDown />,
    },
    {
      name: "Fixtures",
      content: (
        <>
          <ul>
            <li>
              <a href="collection/all-fixtures">All Fixtures</a>
            </li>
            <li>
              <a href="collection/horticulture-fixtures">
                Horticulture Fixtures
              </a>
            </li>
            <li>
              <a href="collection/aquarium-fixtures">Aquarium Fixtures</a>
            </li>
          </ul>
        </>
      ),
      icon: <BiChevronDown />,
    },
    {
      name: "Heatsinks",
      content: (
        <>
          <ul>
            <li>
              <a href="collection/all-heatsinks">All Heatsinks</a>
            </li>
            <li>
              <a href="collection/canopy-substrate">Canopy Substrate</a>
            </li>
            <li>
              <a href="collection/pin">Pin</a>
            </li>
          </ul>
        </>
      ),
      icon: <BiChevronDown />,
    },
    {
      name: "Dimmers",
      content: (
        <>
          <ul>
            <li>
              <a href="collection/all-dimmers">All Dimmers</a>
            </li>
            <li>
              <a href="collection/0-10V">0-10V</a>
            </li>
            <li>
              <a href="collection/pwm">PWM</a>
            </li>
          </ul>
        </>
      ),
      icon: <BiChevronDown />,
    },
    {
      name: "Accessories",
      content: (
        <>
          <ul>
            <li>
              <a href="collection/all-accessories">Accessories</a>
            </li>
            <li>
              <a href="collection/ac-adapters">AC Adapters</a>
            </li>
            <li>
              <a href="collection/fans">Fans</a>
            </li>
            <li>
              <a href="collection/hanging-kits">Hanging Kits</a>
            </li>
            <li>
              <a href="collection/led-testers">LED Testers</a>
            </li>
            <li>
              <a href="collection/reflectors">Reflectors</a>
            </li>
            <li>
              <a href="collection/solderless-accessories">
                Solderless Accessories
              </a>
            </li>
            <li>
              <a href="collection/thermal-compounds">Thermal Compounds</a>
            </li>
            <li>
              <a href="collection/wire-management">Wire-Management</a>
            </li>
          </ul>
        </>
      ),
      icon: <BiChevronDown />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="header_wrapper">
        <div className="header_container">
          <Link href="/">
            <img src="/assets/lights_logo2.png" alt="light bulb" />
          </Link>
          <SearchBar />
          <NavBar />
        </div>

        <div className="bottom_nav text-white font-medium text-lg pb-4">
          <nav aria-label="main">
            <ul className="flex gap-5">
              {navBarItems.map((item, index) => (
                <li className="relative" key={index}>
                  <a className="flex text-center items-center cursor-pointer no-underline">
                    <span>{item.name}</span>
                    {item.icon}
                  </a>
                  <div className="bg-slate-400 absolute top-14">
                    <h1>{item.content}</h1>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
