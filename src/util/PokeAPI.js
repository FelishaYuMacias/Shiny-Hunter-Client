import axios from "axios"

const URL = 'https://pokeapi.co/api/v2/pokemon'

const PokeAPI = {
  getSprite: (pokemon) => {
    return axios.get(`${URL}/${pokemon}`).then(res => res.data)
  }
}

export default PokeAPI