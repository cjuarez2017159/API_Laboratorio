const { request, response} = require('express');

const esAdminRole = (req = request, resp = response, next) => {
    if(!req.usuario){
        return resp.status(500).json({
            msg: 'se quiere verificar un role sin validar el token primero'
        });
    }

    const { role, nombre} = req.usuario;

    if( role !== "ADMIN_ROLE"){
        return resp.status(400).json({
            msg: `${nombre} no es un adminsitrador, no puedes estar aqui`
        });
    }
    next();
}

module.exports = {
    esAdminRole
}