<template>

        <h1>Cadastro de usuários</h1>

        <form @submit.prevent="registrarUsuario">

            <div>
                <label>Nome: </label>
                <input type="text" v-model="nome">
            </div><br>

            <div>
                <label>E-mail:</label>
                <input type="text" v-model="email">     
            </div><br>

            <div>
                <label>Senha:</label>
                <input type="password" v-model="senha"><br>
            </div><br>
                
                <button type="submit">Registrar</button>

            </form>
            
        <p>{{ message }}</p>

</template>

<script>

export default {
    data() {
        return {

            nome: '',
            email: '',
            senha: '',
            message: ''
        }
    },

    methods: {
        registrarUsuario() {
            const data = {
                nome: this.nome,
                email: this.email,
                senha: this.senha,
            }

            fetch("http://localhost:3000/api/registerUser", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(async (response) => {
                this.message = await response.text()
            })
            .catch(async (error) => {
                this.message = await error.text()
            })
        }
    }
}

</script>

<style lang="css">

    label {
        font-size: large;
        color:blueviolet;
        font-weight: bold;
    }

    input {
        border-color: blueviolet;
        border-radius: 5px;
    }

    button {
        height: 40px;
        width: 150px;
        margin-top: 10px;
        border-radius: 10px;
        cursor: pointer;
        border-color: blueviolet;
    }

    button:hover {
        height: 40px;
        width: 150px;
        margin-top: 10px;
        border-radius: 10px;
        cursor: pointer;
        border-color: black;
        background-color: blueviolet;
        color: white;
    }

</style>