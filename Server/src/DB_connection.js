require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, SERVER_URL } = process.env;

const UserModel = require("./models/User.js");
const CharactersMododel = require("./models/characters.js");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//   { logging: false, native: false }
// );

const sequelize = new Sequelize(SERVER_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true, // Requiere una conexión SSL/TLS
      rejectUnauthorized: false,
    },
  },
});
// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

UserModel(sequelize);
CharactersMododel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Characters } = sequelize.models;

User.belongsToMany(Characters, { through: "user_favorite" });
Characters.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Characters,
  conn: sequelize,
};
