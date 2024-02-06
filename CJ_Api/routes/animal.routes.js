const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const {
    animalesPost,
    animalesGet,
    getAnimalesById,
    putAnimales,
    animalesDelete
} = requiere('../controllers/animal.controller');

const { existenteAnimalId } = require('../helpers/db-validators');