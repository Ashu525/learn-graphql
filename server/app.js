const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://ashu525:ashu525@cluster0.cqxoht4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use("/graphql", createHandler({ schema }));

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
