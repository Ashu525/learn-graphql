const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

mongoose.connect(process.env.DB_URL);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use("/graphql", createHandler({ schema }));

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
