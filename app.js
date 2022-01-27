// import express
const express = require("express");

// import file routes/api.js
const routes = require("./routes/api");

// membuat object express dan disimpan ke variable app
const app = express();

// menggunakan middleware dari express.json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// menggunakan routing
app.use(routes);

// membuat server dengan port 3000
app.listen(3000, () => {
  console.log("Server berhasil dijalankan!");
});
