import React from "react";
import Link from "next/link";
import "./page.css";
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
    <main className="flex flex-col items-center justify-between Rectangle ">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <div className="e1"></div>
          <div className="e2"></div>
          <div className="e3"></div>
          <div className="e4"></div>
          <div className="e5"></div>
          <div className="e6"></div>
        </div>
        <div className="flex flex-col m-28 justify-center items-center">
          <h1 className="t1">
            Ride green, save the planet. Join GreenPool today.{" "}
          </h1>
          <p className="t2">
            Effortlessly connect with eco-conscious travelers for a greener
            commute every day
          </p>
          <div className="but text-center">
            <Link className="buttext" href="/users/bookride">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
