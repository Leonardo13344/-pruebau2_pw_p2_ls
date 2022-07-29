<template>
 
 <MyGame :pokemons="pokemonsArray" />
</template>

<script>




import MyGame from './components/MyGame.vue'
import getPokemons from './helpers/obtenerDatosPokemon'

export default {
  name: 'App',
  components: {
    MyGame
},
data(){
  return{
    pokemonsArray:[]
  }
},
methods:{
  
  async getArrayPokemons(){
    this.pokemonsArray = await getPokemons()
    console.log(this.pokemonsArray)

  }
},
mounted(){
  this.getArrayPokemons()
},
updates(){
  this.getArrayPokemons()
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
