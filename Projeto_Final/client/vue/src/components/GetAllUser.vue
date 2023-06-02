<template>
    
    <div>
        <h1>Buscar Usuários</h1>
        <form @submit.prevent="getUsers">
            <button type="submit">Mostrar todos</button>
            <p>{{ msg }}</p>
        </form>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{ user.nome }} - {{ user.email }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '',
            users: []
        }
    },
    methods: {
        async getUsers() {
            try {
                const response = await fetch('http://localhost:3000/api/getUsers');
                const data = await response.json();
                this.users = data;
            } catch (error) {
                this.msg = error.message;
            }
        }
    },
}
</script>

<style scoped>

ul li {
    list-style: none;
}

</style>