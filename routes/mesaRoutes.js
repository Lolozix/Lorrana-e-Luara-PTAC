const express = require("express");
const router = express.Router();

const MesaController = require("../controllers/MesaController");
const AuthController = require("../controllers/AuthController");
const { route } = require("./authRoutes");

router.post(
    "/novo",
    AuthController.autenticar,
    AuthController.verificaPermissaoAdm,
    MesaController.novaMesa
);

router.get("/", MesaController.buscar);

router.get("/disponibilidade", MesaController.buscarPorDataComReservas);

module.exports = router;