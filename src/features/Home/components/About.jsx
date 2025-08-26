import React from "react";

function About() {
  return (
    <>
      <div className="flex-col flex gap-14 justify-center items-center">
        <div className="flex flex-col justify-between items-center gap-7 w-mainW sm:w-[80%] md:flex-row  mx-auto my-12 ">
          <div className="flex w-full justify-between sm:w-[520px] md:justify-center md:gap-4 md:w-1/2">
            <img
              className="object-cover x1000x:-translate-y-3  h-[700px] w-1/2"
              src="/about.jpg"
              alt=""
            />
            <img
              className="object-cover x1000x:translate-y-3  h-[700px] w-1/2"
              src="/about-1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-14 md:justify-around text-lightDarkText text-2xl md:w-1/2 md:h-[700px]">
            <h1 className="text-4xl w-min capitalize text-darkText font-bold ">
              feliciano restaurant
            </h1>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              mon - fri{" "}
              <span className="font-bold capitalize">8 am - 11 pm</span>
            </p>
            <h1 className="text-5xl text-themeGold">+0910344566</h1>
          </div>
        </div>
        <div className="flex justify-center gap-12 items-center flex-wrap uppercase ">
          <div className="flex flex-col gap-4 w-max justify-between items-center  px-16">
            <h1 className="text-5xl text-themeGold font-bold">18</h1>
            <p className="text-lightDarkText">years of experiance</p>
          </div>
          <div className="flex flex-col gap-4 w-max justify-between items-center px-16">
            <h1 className="text-5xl text-themeGold font-bold">100</h1>
            <p className="text-lightDarkText">menus/dish</p>
          </div>
          <div className="flex flex-col gap-4 w-max justify-between items-center px-16">
            <h1 className="text-5xl text-themeGold font-bold">50</h1>
            <p className="text-lightDarkText">staffs</p>
          </div>
          <div className="flex flex-col gap-4 w-max justify-between items-center px-16">
            <h1 className="text-5xl text-themeGold font-bold">15,000</h1>
            <p className="text-lightDarkText">happy customers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
