import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
  {
    id: 1,
    title: "mango",
    price: 80,
  },
  {
    id: 2,
    title: "orange",
    price: 30,
  },
  {
    id: 3,
    title: "pomegranate",
    price: 100,
  },
  {
    id: 4,
    title: "Kiwi",
    price: 567,
  },
  {
    id: 5,
    title: "Papaya",
    price: 40,
  },
  {
    id: 6,
    title: "banana",
    price: 35,
  },
  {
    id: 7,
    title: "Lichi",
    price: 60,
  },
  {
    id: 8,
    title: "grapes",
    price: 60,
  },
];

app.get("/get-fruits", (req, res) => {
  res.json(data);
});

app.get("/get-fruit", (req, res) => {
  const fruitId = req.query.id;

  const fruit = data.find((item) => item.id == fruitId);

  if (fruit) {
    res.json({
      message: "fruit found",
      data: fruit,
    });
  } else {
    res.json({
      message: "fruit not found",
      data: null,
    });
  }
});

app.post("/add-fruit", (req, res) => {
  const newFruit = req.body;

  console.log(newFruit);

  newFruit.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;

  data.push(newFruit);

  console.log(data);

  res.status(201).json({
    message: "Fruit added successfully",
    data: newFruit,
  });
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
