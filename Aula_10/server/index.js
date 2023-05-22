const express = require('express')
const app = express()
const cors = require('cors')
const { pool } = require('./data/data')

app.use(express.json())
app.use(cors())

app.listen(3000, () => {
    console.log("Servidor online na porta 3000!");
})

process.on('SIGINT', () => {
    pool.end()
    process.exit()
})

let register = null

app.post("/api/registerUser", async (request, response) => {
    try {
        register = await pool.connect()
        const { nome, email, senha } = request.body

        await register.query(`INSERT INTO Users ( id, nome, email, senha ) VALUES ( uuid_generate_v4(), '${nome}', '${email}','${senha}' )`)

        response.status(200).send("Cadastro realizado com sucesso!")
    } catch (error) {
        console.log(error);
        response.status(500).send("Deu ruim!")
    } finally {
        register.release()
    }
})