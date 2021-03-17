const app = Vue.createApp({
    data() {
        return {
            frutas: [
                { nombre: "mango", cantidad: 100 },
                { nombre: "pera", cantidad: 150 },
            ],
            nuevoFruta: "",
            totalFruta: 0
        }
    },
    methods: {
        agregarFruta() {
            if (this.nuevoFruta.trim() == "") {
                alert("ingrese un nombre")
            } else {
                this.frutas.push(
                    { nombre: this.nuevoFruta, cantidad: 0 }
                )
                this.nuevoFruta = ""
            }
        },
        sumarFruta(index) {
            this.frutas[index].cantidad++;
            //sumarTotalFruta()
        },
        restarFruta(index) {
            this.frutas[index].cantidad--;
            //sumarTotalFruta()
        },
        sumarTotalFruta() {
            let tot = 0;
            this.frutas.forEach(function (item, index) {
                tot = (tot + item.cantidad)
            });
            return tot
        }
    },
    computed: {
    },

})