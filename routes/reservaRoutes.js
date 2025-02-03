//ARQUIVO CRIADO GRAÇAS AOS VIDEOS E ESSA PASTA TAMBEM 


router.post("/novo", AuthController.autenticar, ReservaController.novaReserva);

router.delete(
    "/",
    AuthController.autenticar,
    ReservaController.cancelarReserva
);

route.get(
    "/listar",
    AuthController.autenticar,
    AuthController.verificaPermissaoAdm,
    ReservaController.buscarPorData
);

router.get('/listar/cliente', AuthController.autenticar, ReservaController.buscarReversasCliente)

module.exports = router;