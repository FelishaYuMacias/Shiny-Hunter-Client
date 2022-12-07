const URL_PREFIX = 'https://localhost:3001' || 'https://herokuapp.com'

const API = {
  login: (user)=>{
    return fetch(`${URL_PREFIX}/api/users/login`,{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
},
  signup: (user) => {

  },
  getUserFromToken: (token) => {

  }
}