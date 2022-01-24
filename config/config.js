// import dotenv
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME, //Mengatur username di file .env
    password: process.env.DB_PASSWORD, //Mengatur password di file .env
    database: process.env.DB_DATABASE, //Mengatur database di file .env
    host: process.env.DB_HOST, //Mengatur host di file .env
    port: process.env.DB_PORT, //Mengatur port di file .env
    dialect: process.env.DB_CONNECTION, //Mengatur connection di file .env
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
