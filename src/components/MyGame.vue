<template>
    <div class="main">
        <table>
            <tr>
                <th>Puntaje: {{ points }}</th>
                <th></th>
                <th>Intento: {{ intents }}</th>
            </tr>
            <tr>
                <td>
                    <img src="@/assets/black.jpg" alt="poke1" v-if="mostrarBlack" />
                    <img :src="imagenPokes[0]" alt="poke1" v-if="mostrarPoke">
                </td>
                <td>
                    <img src="@/assets/black.jpg" alt="poke2" v-if="mostrarBlack" />
                    <img :src="imagenPokes[1]" alt="poke1" v-if="mostrarPoke">
                </td>
                <td>
                    <img src="@/assets/black.jpg" alt="poke3" v-if="mostrarBlack" />
                    <img :src="imagenPokes[2]" alt="poke1" v-if="mostrarPoke">
                </td>
            </tr>
            <tr>
                <td v-if="mostrar">{{ pokemons[0].nombre }}</td>
                <td v-if="mostrar">{{ pokemons[1].nombre }}</td>
                <td v-if="mostrar">{{ pokemons[2].nombre }}</td>
            </tr>
        </table>
        <button v-on:click="jugar" id="btnJugar">JUGAR</button>
        <br>
        <button disabled="true" id="btnNewGame">Nuevo Juego</button>
        <br>
        
    </div>
    <div>
        <img src="@/assets/congratulations.gif" alt="congrats" id="imgCon">
        <br>
        <p id="textCon">Felicitaciones has ganado un premio de $10.000,00</p>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            intents: 5,
            points: 0,
            mostrar: false,
            mostrarPoke: false,
            mostrarBlack: true

        }
    },
    methods: {
        jugar() {
            if (this.intents != 0) {
                this.mostrar = true
                this.mostrarPoke = true
                this.mostrarBlack = false
                this.intents -= 1
                if (this.pokemons[0].nombre == this.pokemons[1].nombre && this.pokemons[0].nombre == this.pokemons[2].nombre && this.pokemons[1].nombre == this.pokemons[2].nombre) {
                    this.points += 5
                } else if (this.pokemons[0].nombre == this.pokemons[1].nombre || this.pokemons[0].nombre == this.pokemons[2].nombre) {
                    this.points += 2
                } else if (this.pokemons[1].nombre == this.pokemons[2].nombre || this.pokemons[0].nombre == this.pokemons[1].nombre) {
                    this.point += 2
                }
            } else {
                document.getElementById('btnJugar').disabled = true
                if (this.points >= 10) {
                    document.getElementById('imgCon').style.display = "inline";
                    document.getElementById('textCon').style.display = "inline";
                    document.getElementById('btnNewGame').disabled = false
                } else {
                    document.getElementById('btnNewGame').disabled = false
                }

            }
        },
        newGame(){
            
        }

    },
    computed: {
        imagenPokes() {
            return [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemons[0].id}.svg`,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemons[1].id}.svg`,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemons[2].id}.svg`]
        }
    }
}
</script>

<style scoped>
table {
    margin: auto;
}

button {
    margin: 1em;
}

#imgCon, #textCon {
    display: none;
}
</style>