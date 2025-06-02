import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Unuching");
});

app.get("/mema", (req, res) => {
  res.send("I am  Memaching");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}...`);
});
