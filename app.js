// import express dan router
const express = require("express");
const routes = require("./routes/api");

// membuat object express
const app = express();

// menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// menggunakan routing
app.use(routes);

// mendefinisikan port
app.listen(3000, () => {
  console.log("Server berhasil dijalankan!");
});
