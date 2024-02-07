const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const {
    animalesPost,
    animalesGet,
    getAnimalById,
    putAnimales,
    animalesDelete
} = require('../controllers/animal.controller');

const { existenteAnimalId } = require('../helpers/db-validators');

const router = Router();

router.get("/", animalesGet);

router.get(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existenteAnimalId),
        validarCampos
    ], getAnimalById
);

router.put(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existenteAnimalId),
        validarCampos
    ], putAnimales
);

router.post(
    "/",
    [
        check("nombre", "Nombre no puede estar vacio").not().isEmpty(),
        check("especie", "La especie debe ser definida").not().isEmpty(),
        check("raza", "La raza debe ser definida").not().isEmpty(),
        check("edad", "Edad no puede estar vacio"),
        validarCampos
    ], animalesPost
);

router.delete(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existenteAnimalId),
        validarCampos
    ], animalesDelete
);

module.exports = router;