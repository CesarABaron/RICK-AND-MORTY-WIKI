const { Router } = require("express");
const router = Router();
const { loginHandler } = require("../handlers/Login/loginHanlder");
const { registerHanlder } = require("../handlers/Register/UserRegisterHanlder");
const {
  getAllCharacters,
} = require("../controllers/GetCharacters/getCharactersDb");
const {
  getCharacterByName,
} = require("../controllers/GetCharacters/getCharactersByName");
const {
  getCharacterById,
} = require("../controllers/GetCharacters/getCharacterById");
const { postFavorite } = require("../controllers/PostFavorite/postFavorite");
const { getAllFavorites } = require("../controllers/PostFavorite/getFavorites");

router.post("/login", loginHandler);
router.post("/register", registerHanlder);
router.get("/allCharacters", getAllCharacters);
router.get("/character", getCharacterByName);
router.get("/character/:id", getCharacterById);
router.post("/favorite", postFavorite);
router.get("/favorites", getAllFavorites);

module.exports = router;
