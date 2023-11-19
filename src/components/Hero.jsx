import { navbarConst } from "../constants/navbar";
import { useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <section className="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12  ">
        <Navbar
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        {isMobileMenuOpen && (
          <div
            id="menu"
            className={`absolute top-0 bottom-0 left-0 ${
              isMobileMenuOpen ? "flex" : "hidden"
            } flex-col self-end  w-full min-h-screen py-1 pt-40 pl-20 space-y-3 text-lg text-white uppercase bg-black`}
          >
            {navbarConst.map((item, index) => (
              <a key={index} href="#" className="hover:text-green-400">
                {item}
              </a>
            ))}
          </div>
        )}
        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2  md:p-10 md:m-32 md:mx-0 md:text-6xl ">
          Impressive expreince that deliver
        </div>
      </div>
    </section>
  );
};
export default Hero;
