import axios from 'axios'
const URL_PREFIX = 'https://localhost:3001' || 'https://herokuapp.com'

const API = {
  login: (user) => {
    return axios.post(`${URL_PREFIX}/api/users/login`, {
      user
    })
  },
  signup: (user) => {
    return axios.post(`${URL_PREFIX}/api/users/signup`, {
      user
    })
  },
  getUserFromToken: (token) => {
    return axios.get(`${URL_PREFIX}/api/users/getuserfromtoken`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  },
  getUserHunts: (userId) => {
    return axios.get(`${URL_PREFIX}/api/hunts`, {
      params: { __v: userId }
    })
  },
  createHunt: (hunt, token) => {
    return axios.post(`${URL_PREFIX}/api/hunts`, {
      hunt,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  },
  editHunt: (hunt, huntId, token) => {
    return axios.put(`${URL_PREFIX}/api/hunts/${huntId}`, {
      hunt,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  },
  deleteHunt: (huntId, token) => {
    return axios.delete(`${URL_PREFIX}/api/hunts/${huntId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  }
}

export default API