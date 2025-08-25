import { useEffect } from "react";
import useGetProduct from "../../hooks/useGetproducts";
import { MenuCard } from "../product-cards/Cards";

function Home() {
  const { data, isError, isLoading } = useGetProduct();
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <>
      <h1 className="capitalize text-4xl text-center my-12 ">
        browse our menu
      </h1>
      <div className=" w-mainW mx-auto flex flex-col x580x:flex-row flex-wrap justify-center items-center">
        {isLoading ? (
          <h1>loading</h1>
        ) : (
          data.map((item, index) => (
            <MenuCard
              name={item.name}
              image={item.image}
              price={item.userId}
              ingred={item.ingredients}
              index={index}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Home;
