const express = require("express");
const router = express.Router();

const PerfilController = require("../controllers/PerfilController");
const AuthController = require("../controllers/AuthController");

router.get("/", PerfilController.getPerfil);

router.patch("/", PerfilController.atualizaPerfil); 

router.get(
    "/todos",
    AuthController.verificaPermissaoAdm,
    PerfilController.buscarTodos
);

module.exports = router;
