const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

//PORT
const PORT = 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//GET API
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

//MongoDB Connect
mongoose
  .connect(
    "mongodb+srv://<username>:<password>@learn.sozakgd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Learn"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
