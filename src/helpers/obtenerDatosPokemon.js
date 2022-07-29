const obtenerPokemons = () => {
    const arrayOfNums = getRandomArrayOfNums()
    const array3Pokemons = get3Pokemons(arrayOfNums)
    const arrayOfPokemons = arrayOfNumsToPokemons(array3Pokemons)
    return arrayOfPokemons
}

const getPokemons = async () => {
    return await obtenerPokemons()
}

function getRandomNum(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

const getRandomArrayOfNums = () => {
    const arrayOfNums = [getRandomNum(1, 600), getRandomNum(1, 600), getRandomNum(1, 600), getRandomNum(1, 600), getRandomNum(1, 600)]
    return arrayOfNums
}

const get3Pokemons = (arrayS) => {
    return [arrayS[getRandomNum(1,5)],arrayS[getRandomNum(1,5)],arrayS[getRandomNum(1,5)]]
}

const arrayOfNumsToPokemons = async ([p1, p2, p3] = []) => {
    const poke1 = await getNamePokemonAPI(p1)
    const poke2 = await getNamePokemonAPI(p2)
    const poke3 = await getNamePokemonAPI(p3)
    return await [{ nombre: poke1.name, id: poke1.id }, { nombre: poke2.name, id: poke2.id }, { nombre: poke3.name, id: poke3.id }]
}

const getNamePokemonAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
    return data
}

export default getPokemons

