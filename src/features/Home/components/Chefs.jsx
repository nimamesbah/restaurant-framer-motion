import React from "react";

function Chefs() {
  const images = [
    { img: "/chef-1.jpg", name: "milad ali", role: "chef" },
    { img: "/chef-2.jpg", name: "asghar ali", role: "head chef" },
    { img: "/chef-3.jpg", name: "mohsen ali", role: "chef" },
    { img: "/chef-4.jpg", name: "mamad ali", role: "Restaurant Owner" },
  ];
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center w-[90%] mx-auto mt-11">
        <h1 className="capitalize text-4xl font-bold text-darkText">
          our master Chefs
        </h1>
        <div className="w-full gap-7 flex justify-center items-center flex-col x580x:flex-row flex-wrap ">
          {images.map((item) => (
            <div className="flex flex-col gap-6 capitalize x580x:w-[350px] x1000x:w-[250px]">
              <img className="w-full rounded-2xl object-cover" src={item.img} />
              <div className="flex flex-col  w-max">
                <h1 className="text-darkText text-2xl ">{item.name}</h1>
                <h2 className="text-lightText">{item.role}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chefs;
