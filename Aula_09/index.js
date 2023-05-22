const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080!");
})

const segredo = "MeuSegredo"

function verifyToken(request, response, next) {
    const token = request.headers.authorization

    if (!token) {
        response.status(401).json({message: 'Token não fornecido!'})
    }

    try {
        const decodificado = jwt.verify(token, segredo)
        request.user = decodificado
        next()
    } catch (error) {
        response.status(403).json({message: 'Token inválido'})
    }
}

app.post('/login', (request, response) => {
    const user = {
        id: 123,
        name: 'Bruno',
        password: '123456'
    }

    const token = jwt.sign(user, segredo)
    response.status(200).json({token})
})

app.get('/userProtegido', verifyToken, (request, response) => {
    const { id, name, password } = request.user
    response.status(200).json({id, name, password})
})