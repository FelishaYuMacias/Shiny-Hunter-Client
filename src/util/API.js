import axios from 'axios'
//const URL_PREFIX = 'http://localhost:3001'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'

const API = {
  login: async (userObj) => {
    return await axios.post(`${URL_PREFIX}/api/users/login`, {
      username: userObj.username,
      password: userObj.password,
    }).then(res => res.data)
  },
  signup: async (userObj) => {
    return await axios.post(`${URL_PREFIX}/api/users/signup`, {
      username: userObj.username,
      password: userObj.password,
    }).then(res => res.data)
  },
  getUserFromToken: async (token) => {
    return await axios.get(`${URL_PREFIX}/api/users/getuserfromtoken`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res => res.data)
  },
  getUser: async (userId) => {
    return await axios.get(`${URL_PREFIX}/api/users/${userId}`).then(res => res.data)
  },
  getHunts: async () => {
    return await axios.get(`${URL_PREFIX}/api/hunts`).then(res => res.data)
  },
  getUserHunts: async (userId) => {
    return await axios.get(`${URL_PREFIX}/api/hunts/`, {
      params: { _id: userId }
    })
  },
  createHunt: async (hunt, token) => {
    return await axios.post(`${URL_PREFIX}/api/hunts`, {
      method: hunt.method,
      phase: hunt.phase,
      userId: hunt.userId,
      pokemon: hunt.pokemon,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  },
  editHunt: async (hunt, huntId, token) => {
    return await axios.put(`${URL_PREFIX}/api/hunts/${huntId}`, {
      method: hunt.method,
      counter: hunt.counter,
      phase: hunt.phase,
      game: hunt.game,
      dateCompleted: hunt.dateCompleted,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  },
  deleteHunt: async (huntId, token) => {
    return await axios.delete(`${URL_PREFIX}/api/hunts/${huntId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res => res.data)
  },
  createPokemon: async (pokemon, token) => {
    return await axios.post(`${URL_PREFIX}/api/pokemon`, {
      species: pokemon.species,
      level: pokemon.level,
      form: pokemon.form,
      gender: pokemon.gender,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  }
}

export default API