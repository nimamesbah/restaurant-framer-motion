import { useEffect } from "react";
import useGetProduct from "../../hooks/useGetproducts";
import { MenuCard } from "../product-cards/Cards";

function Home() {
  const { data, isError, isLoading } = useGetProduct(1);
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <>
      <h1 className="capitalize text-4xl text-center my-12 ">
        browse our menu
      </h1>
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <MenuCard
          name={data.name}
          image={data.image}
          price={data.userId}
          ingred={data.ingredients}
        />
      )}
    </>
  );
}

export default Home;
