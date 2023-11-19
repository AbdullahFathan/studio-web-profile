import { creationsItem, creationsItem2 } from "../constants/creations";
import CardItem from "./CardItem";

const Creations = () => {
  return (
    <section className="container max-w-6l mx-auto my-32 px-6 text-gray-900 md:px-0">
      <div className=" flex justify-center mb-20 md:justify-between ">
        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Creation
        </h2>
        <button className="hidden btn md:block">see all</button>
      </div>
      {/*Item Container */}
      <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
        {creationsItem.map((item, index) => (
          <CardItem
            index={index}
            desktopImage={item.desktopImage}
            mobileImage={item.mobileImage}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex flex-col mt-9 justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
        {creationsItem2.map((item, index) => (
          <CardItem
            index={index}
            desktopImage={item.desktopImage}
            mobileImage={item.mobileImage}
            title={item.title}
          />
        ))}
      </div>
      {/*Button for mobile version */}
      <div className=" flex justify-center mt-10 md:hidden">
        <button className="btn w-full md:hidden">See All</button>
      </div>
    </section>
  );
};
export default Creations;
