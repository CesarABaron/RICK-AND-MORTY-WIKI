const { Router } = require("express");
const router = Router();
const { loginController } = require("../controllers/Login/loginControler");
const {
  registerController,
} = require("../controllers/Register/registerUserController");
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

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/allCharacters", getAllCharacters);
router.get("/character", getCharacterByName);
router.get("/character/:id", getCharacterById);
router.post("/favorite", postFavorite);
router.post("/favorites", getAllFavorites);

module.exports = router;
