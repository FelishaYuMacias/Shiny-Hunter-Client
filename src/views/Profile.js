import './Profile.css';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import API from '../util/API'


const Profile = (props) => {
  const [user, setUser] = useState([])
  const [userHunts, setUserHunts] = useState([])
  const fetchUser = async () => {
    const userId = JSON.parse(localStorage.getItem('user')).id
    API.getUser(userId).then(res => {
      console.log(res)
      setUser(res)
      setUserHunts(res.hunts)
    })
  };

  useEffect(() => {
    fetchUser();
  }, [props.isLoggedIn]);


  return (
    <>
      {
        props.isLoggedIn ? (
          <div className="Profile">
            <h1>Welcome {user.username}!</h1>
            <div>
              <h2> Your Hunts:</h2>
              <div>
                {userHunts.map((hunts, index) => (
                  <div className="nes-container">
                    <ul className="hunts" key={index}>
                      <li>Method: {hunts.method}</li>
                      <li>Counter: {hunts.counter}</li>
                      <li>Phase: {hunts.phase}</li>
                      <li>Pokemon: {hunts.pokemon.species}</li>
                      <ul className="hunts" key={index}>
                        <Card pokemon={hunts.pokemon.species} />
                        <li>Level: {hunts.pokemon.level}</li>
                        <li>Form: {hunts.pokemon.form}</li>
                        <li>Gender: {hunts.pokemon.gender}</li>
                      </ul>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading....</h1>
        )
      }
    </>
  )
}

export default Profile