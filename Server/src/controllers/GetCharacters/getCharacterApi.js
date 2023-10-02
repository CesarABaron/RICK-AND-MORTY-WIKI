const axios = require("axios");
const { Characters } = require("../../DB_connection");

const getCharacters = async () => {
  const maxCount = 42;
  const allcharactersRaw = [];

  try {
    for (let i = 0; i <= maxCount; i++) {
      allcharactersRaw.push(
        axios.get(`https://rickandmortyapi.com/api/character?page=${i}`)
      );
    }

    const responseFix = await Promise.all(allcharactersRaw);

    const responseFixRaw = responseFix.map(
      (character) => character.data.results
    );

    const objetosMapeados = responseFixRaw
      .flatMap((subarreglo) => subarreglo)
      .map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          image: character.image,
        };
      });

    const objetosUnicos = [];
    const idsUnicos = {};

    objetosMapeados.forEach((objeto) => {
      if (!idsUnicos[objeto.id]) {
        idsUnicos[objeto.id] = true;
        objetosUnicos.push(objeto);
      }
    });

    const verify = await Characters.findOne({
      where: { name: "Armothy" },
    });

    if (verify === null) {
      await Characters.bulkCreate(objetosUnicos);
      console.log(
        "se han cargado todos los personajes a la base de datos correctamente"
      );
    } else console.log("La base de datos esta cargada");
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
};

module.exports = {
  getCharacters,
};
