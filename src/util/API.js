import axios from 'axios'
const URL_PREFIX = 'http://localhost:3001'

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
signup: (userObj)=>{
  return fetch(`${URL_PREFIX}/api/users/signup`,{
      method:"POST",
      body:JSON.stringify(userObj),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>res.json())
  },
  getUserFromToken:(token)=>{
    return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`,{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    }).then(res=>res.json())
},
  getHunts: () => {
    return axios.get(`${URL_PREFIX}/api/hunts`).then(res => res.data)
  },
  getUserHunts: (userId) => {
    return axios.get(`${URL_PREFIX}/api/hunts/`, {
      params: { _id: userId }
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