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
export function MenuCard({ image, name, ingred, price, index }) {
  return (
    <>
      <div
        className={`flex flex-col ${
          index % 4 === 0 || index % 4 === 1
            ? "x580x:flex-row-reverse"
            : "x580x:flex-row"
        } justify-between items-center x580x:w-[450px] w-full text-darkText border border-menuBorder`}
      >
        <div className="w-full h-[400px] x580x:w-1/2  flex-shrink-0">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-5 w-full h-full px-6 py-5 x580x:w-1/2 ">
          <div className="flex justify-between w-full">
            <div className="text-xl font-bold">{name}</div>
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
