const Usuario = require('../models/usuario')
const { Router } = require('express');
const router = Router();

router.post(
    "/login",

    async (req, res) => {
        const credentials = req.body;
        const usuario = await Usuario.findOne({
            correo: credentials.correo
        });

        if(!usuario){
            res.status(403).json({
                msg: "Usuario inexistente!!!"
            });
            return;
        }
        // desemcriptamos contraseña 

        

        if(usuario.password !== credentials.password){
            res.status(403).json({
                msg: "Contraseña Incorrecta!!!"
            });
            return;
        }

        res.status(200).json({
            msg: "Logeado"
        })


    }
)

module.exports = router;