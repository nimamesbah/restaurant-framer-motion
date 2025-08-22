import React from "react";

function HeaderCard({ name, image }) {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="w-24 ">
          <img className="w-full rounded-full " src={image} alt="" />
        </div>
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default HeaderCard;
