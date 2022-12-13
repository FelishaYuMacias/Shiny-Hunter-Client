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
  const handleFormSubmit = (e) => {
    
    e.preventDefault();

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
                <div class="nes-container is-rounded">
                  <div className='card'>
                    <div class="nes-container is-rounded">
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
                  <button type="button" class="nes-btn is-primary" onClick={handleFormSubmit}>
                        Update...
                    </button>
                  </div>
                </div>
              </div>
            </div>
                )
                )}
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
        ) : (
          <h1>Loading....</h1>
        )
      }
    </>
  )
}

export default Profile