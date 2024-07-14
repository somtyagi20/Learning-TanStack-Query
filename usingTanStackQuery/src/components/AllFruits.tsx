// import axios from "axios";
// import { Fruit } from "./types/fruits";
import { getFruits } from "../services/queries";

export default function AllFruits() {
  const fruits = getFruits();

  // if (fruits.isPending) {
  //   return <h3>Loading...</h3>;
  // }
  if (fruits.isError) {
    return <h3>There is an Error occured</h3>;
  }

  //const {data,setData} = useState<Fruit>[]()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/get-fruits");
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching the fruits data", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <p>Query function status : {fruits.fetchStatus}</p>
      <p>Query data status : {fruits.status}</p>
      {fruits.data?.data.map((fruit) => (
        <div key={fruit.id}>
          <p>name: {fruit.title}</p>
          <p>price: {fruit.price}</p>
        </div>
      ))}
    </>
  );
}

//.fetchStatus-> it is about queryFunction
//.status-> it is about query data
