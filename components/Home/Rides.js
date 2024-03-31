import React from "react";
import Image from "next/image";

const Rides = ({ distance }) => {
  return (
    <>
      <h1 className="text-green-800 xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl font-bold mt-5">
        Rides
      </h1>
      <div className="flex flex-col mt-3">
        <div className="flex items-center m-5">
          <Image src="/bt1.png" width={70} height={70} />
          <div className="ml-2">
            <p>Path: Path 1</p>
            <p>Estimated Time: 10 mins</p>
          </div>
        </div>
        <div className="flex items-center m-5">
          <Image src="/bt2.png" width={70} height={70} />
          <div className="ml-2">
            <p>Path: Path 2</p>
            <p>Estimated Time: 15 mins</p>
          </div>
        </div>
        <div className="flex items-center m-5">
          <Image src="/bt3.png" width={70} height={70} />
          <div className="ml-2">
            <p>Path: Path 3</p>
            <p>Estimated Time: 20 mins</p>
          </div>
        </div>
        <div className="flex items-center m-5">
          <Image src="/bt1.png" width={70} height={70} />
          <div className="ml-2">
            <p>Path: Path 4</p>
            <p>Estimated Time: 25 mins</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rides;
