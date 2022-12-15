import axios from "axios"

const URL = 'https://pokeapi.co/api/v2/pokemon'

const PokeAPI = {
  getPokemon: async (pokemon) => {
    return await axios.get(`${URL}/${pokemon}`).then(res => res.data)
  },
  getSprite: async (pokemon) => {
    return await axios.get(`${URL}/${pokemon}`).then(res => res.data.sprites.other.home.front_shiny)
  },
  getAbility: async (pokemon) => {
    return await axios.get(`${URL}/${pokemon}`).then(res => res.data.abilities)
  },
  getTypes: async (pokemon) => {
    return await axios.get(`${URL}/${pokemon}`).then(res => res.data.types)
  }
}

export default PokeAPI