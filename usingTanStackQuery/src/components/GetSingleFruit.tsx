import { getSingleFruit } from "../services/queries";

export default function GetSingleFruit() {
  const fruit = getSingleFruit(3);

  return (
    <div>
      {fruit.isLoading && <p>Loading...</p>}
      {fruit.isError && <p>Error fetching fruit data</p>}
      {fruit && (
        <div>
          <p>Name: {fruit.data?.data.data.title}</p>
          <p>Price: {fruit.data?.data.data.price}</p>
        </div>
      )}
    </div>
  );
}
