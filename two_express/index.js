import express, { json } from "express";
const app = express();
const port = 3000;

app.use(express.json());

let productData = [];
let next_product_id = 1;

app.post("/product", (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: next_product_id++, name, price };
  productData.push(newProduct);
  res.status(201).send(newProduct);
});

app.get("/product", (req, res) => {
  res.status(200).send(productData);
});

app.get("/product/:id", (req, res) => {
  const product = productData.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.status(200).send(product);
});

app.put("/product/:id", (req, res) => {
  const product = productData.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).send("Product not found");
  }

  const { name, price } = req.body;
  product.name = name;
  product.price = price;

  res.status(200).send(product);
});

app.delete("/product/:id", (req, res) => {
  const index = productData.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  productData.splice(index, 1);
  return res.status(203).send("Deleted");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}...`);
});
