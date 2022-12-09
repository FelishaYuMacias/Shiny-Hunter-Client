import axios from 'axios'
//const URL_PREFIX = 'http://localhost:3001'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'

const API = {
  login: (userObj)=>{
    return fetch(`${URL_PREFIX}/api/users/login`,{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
},
  signup: async (userObj) => {
    return await axios.get(`${URL_PREFIX}/api/users/signup`, {
      userObj
    }).then(res => res.json())
  },
  getUserFromToken:(token)=>{
    return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    }).then(res=>res.json())
},
  getHunts: async () => {
    return axios.get(`${URL_PREFIX}/api/hunts`).then(res => res.data)
  },
  getUserHunts: async (userId) => {
    return await axios.get(`${URL_PREFIX}/api/hunts/`, {
      params: { _id: userId }
    })
  },
  createHunt: async (hunt, token) => {
    return await axios.post(`${URL_PREFIX}/api/hunts`, {
      hunt,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  },
  editHunt: async (hunt, huntId, token) => {
    return await axios.put(`${URL_PREFIX}/api/hunts/${huntId}`, {
      hunt,
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
    })
  }
}

export default API