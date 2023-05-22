const { createApp } = Vue;

createApp({
    data() {
        return {
            titulo: "Links",
            link: "https://google.com",
            caixaTexto: "",
            numero1: 0,
            numero2: 0,
            resultado: 0
        }
    },
    methods: {
        alterarValor: function() {
            this.titulo = this.caixaTexto;
        },
        soma: function() {
            this.resultado = parseInt(this.numero1) + parseInt(this.numero2)
        },

        subtrair: function() {
            this.resultado = parseInt(this.numero1) - parseInt(this.numero2)
        },

        multiplicar: function() {
            this.resultado = parseInt(this.numero1) * parseInt(this.numero2)
        },

        dividir: function() {
            this.resultado = parseInt(this.numero1) / parseInt(this.numero2)
        }
    }
}).mount("#app");