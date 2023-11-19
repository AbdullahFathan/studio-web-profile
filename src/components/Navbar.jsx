import { navbarConst } from "../constants/navbar";

const Navbar = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <nav className="flex items-center justify-between font-bold text-white ">
      <img src="/images/logo.svg" alt="logo" />
      {/*Desktop NavBar */}
      <div className="hidden h-10 font-alata md:flex md:space-x-8">
        {navbarConst.map((item, index) => (
          <div key={index} className="group">
            <a href="#">{item}</a>
            <div className=" mx-2 group-hover:border-b group-hover:border-blue-50" />
          </div>
        ))}
      </div>
      {/*Mobile NavBar */}
      <div className="md:hidden  ">
        <button
          id="menu-btn"
          type="button"
          className={`z-40 mb-4 block hamburger md:hidden focus:outline-none ${
            isMobileMenuOpen ? "open" : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
