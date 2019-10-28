const bcrypr = require('bcrypt-nodejs')
module.exports = app => {
    const save = (request, response) => {
        response.status(201).send('Implementar')
    }
    return { save }
}