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

export function HeaderCardSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="w-24  animate-pulse h-24 rounded-full bg-topNavText"></div>
        <h1 className="w-full h-8 animate-pulse bg-topNavText rounded-4xl"></h1>
      </div>
    </>
  );
}
export function MenuCard({ image, name, ingred, price }) {
  return (
    <>
      <div className="flex flex-col x580x:flex-row justify-between items-center x580x:w-max w-full text-darkText">
        <div className="x580x:w-[300px] h-[300px] border w-full">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-5 w-full px-6 py-5">
          <div className="flex justify-between w-full">
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-themeGold text-2xl">${price}</div>
          </div>
          <div className=" ">
            <ul className="list-disc list-inside font-semibold">
              {ingred.slice(0, 3).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <button className="capitalize text-start bg-themeGold py-2 px-2 rounded-sm w-max text-white ">
            order now
          </button>
        </div>
      </div>
    </>
  );
}
