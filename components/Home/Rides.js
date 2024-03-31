import React from "react";
import Image from "next/image";

const Rides = ({ distance }) => {
  const calculateTrees = () => {
    const trees = distance * 0.02;
    if (trees < 1) {
      if (trees >= 0.02 && trees < 0.1) {
        return "a about Fraction of a Tree";
      } else if (trees < 0.02) {
        return "NoN computable";
      } else if (trees >= 0.1 && trees <= 0.5) {
        return "about 1/2 a tree";
      }
    } else {
      return "about " + Math.ceil(trees) + " trees";
    }
  };
  const calculateCarbonEmmion = () => {
    const carbonEmmision = distance * 0.17;
    return Math.ceil(carbonEmmision);
  };
  return (
    <div className="right-4 z-1 absolute top-[40%] w-[30%] p-6 md:pd-6 rounded-3xl border-[0.5px] shadow-lg bg-inherit backdrop-blur-lg form">
      <h1 className="text-green-800 xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl font-bold mt-5">
        Rides
      </h1>
      <div className="flex flex-col mt-3">
        <div className="flex items-center m-5">
          <Image src="/bt3.png" width={70} height={70} />
          <div className="ml-2">
            <p>
              <strong>Path:</strong> Timarpur to Noida Sector 62{" "}
            </p>
            <p>
              <strong>Departure time:</strong> 08:00 AM{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center m-5">
          <Image src="/bt2.png" width={70} height={70} />
          <div className="ml-2">
            <p>
              <strong>Path:</strong> Civil Lines to Sector 63
            </p>
            <p>
              <strong>Departure time:</strong> 09:00 AM
            </p>
          </div>
        </div>
        <div className="flex items-center m-5">
          <Image
            src="/frosty-mountain-cabin-png-5690460.webp"
            width={150}
            height={150}
          />
          <div className="ml-2">
            <p>
              By GreenPooling You saved <strong>{calculateTrees()}</strong>
            </p>
            <p className=" mt-2">
              You prevented approx.{" "}
              <strong>{calculateCarbonEmmion()}g carbon emissions</strong> from
              being released into Our atmosphere.{" "}
            </p>
            <p className=" ml-[35%] mt-[5%]">
              {" "}
              <strong>Thank You❤️</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rides;
