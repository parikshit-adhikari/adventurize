const express = require("express");
const cors = require("cors");
const app = express();

const adventure = require("./routes/adventure");

app.use(cors("*"));
app.use(express.json());

require("dotenv").config();

const port = process.env.PORT || 3000;

app.use("/api/v1", adventure);

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
