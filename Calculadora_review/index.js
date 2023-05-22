const { createApp } = Vue;

createApp({
    data(){
        return {
            display: " ",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        }
    },
    methods: {
        handleButtonClick(valorBotao) {
            switch (valorBotao) {
                case "+":
                case "-":
                case "*":
                case "/":
                    this.handleOperator(valorBotao)
                    break;
                case ".":
                    this.handleDecimal();
                    break;
                case "=":
                    this.handleEquals();
                    break;

                default:
                    this.handleNumber(valorBotao);
                    break;
            }
        },
        handleNumber(numero) {
            if (this.display === " ") {
                this.display += numero.toString();
            } else {
                this.display += numero.toString();
            }
        },
        handleOperator(op) {
            if (this.numeroAnterior !== null) {
                this.handleEquals();
            }

            this.operador = op;
            this.numeroAnterior = parseFloat(this.display);
            this.display = " ";
        },
        handleDecimal() {
            if (!this.display.includes(".")) {
                this.display += "."
            }
            
        },
        handleEquals() {
            this.numeroAtual = parseFloat(this.display);
            if (this.numeroAnterior !== null && this.operador !== null) {
                switch (this.operador) {
                    case "+":
                        this.display = this.numeroAnterior + this.numeroAtual;
                        break;

                    case "-":
                         this.display = this.numeroAnterior - this.numeroAtual;
                        break;

                    case "*":
                        this.display = this.numeroAnterior * this.numeroAtual;
                        break;

                    case "/":
                        this.display = this.numeroAnterior / this.numeroAtual;
                        break;
                }

                this.operador = null;
                this.numeroAnterior = null;
            }
        }
    }
}).mount("#app");