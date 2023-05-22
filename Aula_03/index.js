const { createApp } = Vue;

createApp({

    data(){
        return {
            titulo: "Bem vindos à primeira aula de Vue!",
            msg: "Estamos utilizando o Vue3.",
            nome: "",
            x: 8,
            y: 7,
            resultado_soma: this.soma()
        };
    },
    methods: {
        testFunc: () => {
            return "Este é o retorno da função"
        },
        soma: () => {
            console.log(this.x, this.y)
            return this.x + this.y
        
        }
    }
}).mount("#app");