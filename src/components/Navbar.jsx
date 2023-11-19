import { navbarConst } from "../constants/navbar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between font-bold text-white">
      <img src="/images/logo.svg" alt="logo" />
      <div className="hidden h-10 font-alata md:flex md:space-x-8">
        {navbarConst.map((item, index) => (
          <div key={index} className="group">
            <a href="#">{item}</a>
            <div className=" mx-2 group-hover:border-b group-hover:border-blue-50" />
          </div>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
