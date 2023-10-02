const { Router } = require("express");
const router = Router();
const { loginHandler } = require("../handlers/Login/loginHanlder");
const { registerHanlder } = require("../handlers/Register/UserRegisterHanlder");
const {
  getAllCharacters,
} = require("../controllers/GetCharacters/getCharactersDb");

router.post("/login", loginHandler);
router.post("/register", registerHanlder);
router.get("/allCharacters", getAllCharacters);

module.exports = router;
