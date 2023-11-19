import { navbarConst } from "../constants/navbar";

export const Footer = () => {
  return (
    <footer className="bg-black p-20">
      <div className=" flex flex-col justify-center mx-auto md:flex-row md:justify-between md:align-top ">
        {/** Item 1 */}
        <div className="flex flex-col items-center space-y-6    md:items-start  ">
          <img src="/images/logo.svg" alt="logo" />
          <div className="flex flex-col text-white h-10 space-y-4  font-alata md:flex-row md:space-y-0  md:space-x-8 ">
            {navbarConst.map((item, index) => (
              <div key={index} className="group">
                <a href="#">{item}</a>
                <div className=" mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
            ))}
          </div>
        </div>
        {/** Item 2 */}
        <div className="flex flex-col items-center space-y-6 mt-44  md:items-start md:mt-0">
          <div className="flex flex-row space-x-8  ">
            <img src="/images/icon-facebook.svg" alt="facebook" />
            <img src="/images/icon-instagram.svg" alt="instagram" />
            <img src="/images/icon-pinterest.svg" alt="pinterest" />
            <img src="/images/icon-twitter.svg" alt="twitter" />
          </div>
          <p className="text-gray-400 text-lg">
            © 2022 Loopstudios. All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
