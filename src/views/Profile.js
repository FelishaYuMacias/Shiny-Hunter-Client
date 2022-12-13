import './Profile.css';
import React, { useEffect, useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import UpdateHunt from './UpdateHunt';
import Card from '../components/Card';
import API from '../util/API'
import axios from 'axios'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'


const Profile = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([])
  const [userHunts, setUserHunts] = useState([])
  const [thisHunt, setThishunt] = useState()
  const fetchUser = async () => {
    const userId = JSON.parse(localStorage.getItem('user')).id
    API.getUser(userId).then(res => {
      // console.log(res)
      const user=res;
      setUser(user)
      const userHunts= user.hunts
      setUserHunts(userHunts)
console.log(userHunts._id)
      const oneHunt = userHunts.filter((hunt, i) => {
        i === i
        console.log(i);
        console.log(hunt._id)
        const thisHunt = hunt._id
        setThishunt(thisHunt)
        console.log(thisHunt)
        console.log(props)
    }
    )
    })
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Update clicked")
    console.log(e.currentTarget.id);
    navigate('../UpdateHunt')
    localStorage.setItem('hunt', e.currentTarget.id);
    // setIsShown(current => !current);
    // console.log(isShown)
};

const handleDelete = (e) => {
  e.preventDefault();
    console.log("Delete clicked")
    console.log(`this hunt is ${thisHunt}`)
    // API.deleteHunt(thisHunt, props.token).then(console.log(`hunt id ${thisHunt} deleted`), window.location.reload(false))
  };

  useEffect(() => {
    fetchUser();
  }, [props.isLoggedIn]);


  return (
    <>
        <h1>Welcome {user.username}!</h1>
        <h2> Your Hunts:</h2>
      {
        props.isLoggedIn ? (
            <div>
              <div>
                {userHunts.map((hunts, index) => (
              <div className='row'>   
                <div className='column'>
                <div className="nes-container is-rounded">
                  <div className='card'>
                    <div className="nes-container is-rounded">
                    <h3>{hunts.pokemon.species} 
                    <Card pokemon={hunts.pokemon.species} />
                    </h3>
                  </div>
                </div>
                <div className ="text" key={index}>
                  <h4>Method</h4>
                  <p>{hunts.method}</p>          
                  <h4>Counter</h4>
                  <p> {hunts.counter}</p>
                  <h4>Phase:</h4> 
                  <p>{hunts.phase}</p>
                  <h4>Level:</h4>
                  <p> {hunts.pokemon.level}</p>
                  <h4>Form:</h4>
                  <p> {hunts.pokemon.form}</p>
                  <h4>Gender:</h4> 
                  <p>{hunts.pokemon.gender}</p>
                  <button id = {hunts._id}type="button" className="nes-btn is-primary" onClick={handleUpdate}>Update
                    </button>
                    <button type="button" className="nes-btn is-error" onClick={handleDelete}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
                )
                )}
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