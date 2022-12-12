import './Profile.css';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
// import MyHunts from '../components/Myhunts'
import Hunts from './Hunts'
import API from "../util/API"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'

export default function Profile(props) {
  // console.log(props.userId)


  const [user, setUser] = useState([])
  const [userHunts, setUserhunts] = useState([])
  const fetchUser = async () => {
    const { data } = await axios.get(
      `${URL_PREFIX}/api/users/${props.userId}`
    );
    const user = data;
    setUser(user);
    const userHunts = user.hunts;
    setUserhunts(userHunts)
    console.log(user.hunts);
    console.log(userHunts)
  };

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <>
      {
        props.isLoggedIn ? (
          <div className="Profile">

            <h1>Welcome {user.username}!</h1>
            <hr></hr>

            <div>

              <h2> Your Hunts:</h2>

              <div>
                {userHunts.map((hunts, index) => (
                  <ul className = "hunts" key={index}>
                    <li>Method: {hunts.method}</li>
                    <li>Counter: {hunts.counter}</li>
                    <li>Phase: {hunts.phase}</li>
                    <li>Pokemon: {hunts.pokemon.species}</li>
                    <ul className = "hunts" key={index}>
                    <Card pokemon={hunts.pokemon.species} />
                    <li>Level: {hunts.pokemon.level}</li>
                    <li>Form: {hunts.pokemon.form}</li>
                    <li>Gender: {hunts.pokemon.gender}</li>
                  </ul>
                  <hr></hr>
                  </ul>
                ))}
              </div>
              {/* <div>
              <h2> Your Pokemon:</h2>
              <div>
                {userHunts.map((hunts, index) => (
                  <ul className = "hunts" key={index}>
                    <Card pokemon={hunts.pokemon.species} />
                    <li>Species: {hunts.pokemon.species}</li>
                    <li>Level: {hunts.pokemon.level}</li>
                    <li>Form: {hunts.pokemon.form}</li>
                    <li>Gender: {hunts.pokemon.gender}</li>
                  </ul>
                ))}
              </div>
            </div> */}

          </div>
          </div>
        ) : (
          <h1>Loading....</h1>
        )
      }
    </>
  )
}