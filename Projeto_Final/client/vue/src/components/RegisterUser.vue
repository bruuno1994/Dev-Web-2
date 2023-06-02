<template>

    <h1>Sistema de CRUD com Usuários</h1>

    <div>
        <h1>Cadastro de Usuários</h1>
        <form @submit.prevent="registerUser">
            <div>
                <label>Nome: </label>
                <input type="text" v-model="nome"/>
            </div><br>
            <div>
                <label>Email : </label>
                <input type="email" v-model="email"/>
            </div><br>
            <div>
                <label>Senha: </label>
                <input type="password" v-model="senha"/>
            </div><br>
            <button type="submit">Registrar</button>
        </form>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nome: '',
                email: '',
                senha: '',
                message: '',
            }
        },
        methods: {
            registerUser(){
                const data = {
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha
                }
                console.log(data);
                fetch('http://localhost:3000/api/registerUser', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                })
                    .then(async (res) => {
                        this.message = await res.text();
                    })

                    .catch(async (error) => {
                        this.message = error.message;
                    })
            }  
        },
    }
</script>