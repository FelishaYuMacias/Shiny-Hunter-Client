import './Profile.css';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import UpdateHunt from './UpdateHunt';
import Card from '../components/Card';
import API from '../util/API'
import API from '../util/API'


const Profile = (props) => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState([])
  const [userHunts, setUserHunts] = useState([])
  const fetchUser = async () => {
    const userId = JSON.parse(localStorage.getItem('user')).id
    API.getUser(userId).then(res => {
      console.log(res)
      const user= res
      setUser(user)
      userHunts = user.hunts
      setUserHunts(userHunts)
      console.log(userHunts)
      const oneHunt = userHunts.filter((hunt, i) => {
        i === i
        // console.log(i);
        // console.log(hunt._id)
        const thisHunt = hunt._id
        setThishunt(thisHunt)
        // console.log(thisHunt)
        console.log(props)
    })
    })
  }

    // const [isShown, setIsShown] = useState(false);
    const handleUpdate = (e) => {
      // e.preventDefault();
      console.log("Update clicked")
      console.log(e.currentTarget.id);
      navigate('../UpdateHunt')
      localStorage.setItem('hunt', e.currentTarget.id);
      // setIsShown(current => !current);
      // console.log(isShown)
    };

    const handleDelete = (e) => {
      console.log("Delete clicked")
      e.preventDefault();
      console.log(`this hunt is ${thisHunt}`)
      API.deleteHunt(thisHunt, props.token).then(console.log(`hunt id ${thisHunt} deleted`), window.location.reload(false))

    };
    useEffect(() => {
      fetchUser();
    }, [props.isLoggedIn]);

    // useEffect(() => {
    // 	localStorage.setItem('hunt', JSON.stringify(thisHunt));
    // }, [thisHunt]);

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
                          <li id={hunts._id} type="button" className="nes-btn is-primary" onClick={handleUpdate}>Update</li>
                          <li type="button" className="nes-btn is-error" onClick={handleDelete}>Delete</li>
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
