import React from "react";
import Image from "next/image";
import background from "../public/Naturebg.png";
const Homepage = () => {
  const WhiteBox = ({ text }) => {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "100%", // Set width to 100%
          height: "100%", // Set height to 100%
        }}
      >
        {text}
      </div>
    );
  };
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src={background}
            alt="background Image"
            className="w-full "
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col m-28 justify-center items-center">
          <h1 className="flex justify-center items-center xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-green-600">
            GreenPool
          </h1>
          <h3 className="flex p-5 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-black">
            Green your commute with Carpooling
          </h3>
          <button className="mt-20 sm:w-36 sm:h-11 md:w-40 md:h-12 lg:w-48 lg:h-14 xl:w-56 xl:h-16 rounded-3xl bg-green-950 flex items-center justify-center text-2xl font-bold text-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="relative">
        <h3 className="flex text-4xl text-black mb-20 items-center justify-center">
          Carpooling helps us regulate
        </h3>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-48">
          <div className="flex items-center justify-center">
            <WhiteBox text="Noise Pollution" />
          </div>
          <div className=" flex items-center justify-center">
            <WhiteBox text="Traffic Jam" />
          </div>
          <div className=" flex items-center justify-center">
            <WhiteBox text="Air Pollution" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
