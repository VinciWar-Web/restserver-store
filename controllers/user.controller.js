const { request, response } = require('express')

const userGET = (req = request, res = response) => {

    const { page = '1', limit = '10' } = req.query

    res.json({
        page,
        limit,
        msj: 'Usuario listado con exito',
        status: 200,
    })
}

const userPOST = (req = request, res = response) => {

    const body = req.body

    res.status(201).json({
        body,
        msj: 'Usuario agregado con exito',
        status: 200
    })
}

const userPUT = (req = request, res = response) => {

    const { id } = req.params
    const body = req.body

    res.json({
        id,
        body,
        msj: 'Usuario editado con exito',
        status: 200
    })
}

const userDELETE = (req, res = response) => {

    const { id } = req.params

    res.json({
        id,
        msj: 'Usuario eliminado con exito',
        status: 200
    })
}

module.exports = {
    userGET,
    userPOST,
    userPUT,
    userDELETE
}