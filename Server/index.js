const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./src/Router/index");
const { conn } = require("./src/DB_connection.js");
const morgan = require("morgan");
express.json();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {
  getCharacters,
} = require("../Server/src/controllers/GetCharacters/getCharacterApi");
require("dotenv").config();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use("/rickandmorty", router);
server.use(express.json());

conn.sync({ force: true }).then(
  server.listen(PORT, async () => {
    await getCharacters();
    console.log("Servidor levantado en el puerto: " + PORT);
  })
);
