import { Image } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar(props) {
  const navigate = useNavigate()
  const handleLogout = () => {
    props.handleLogout()
    navigate("/login")
  }

  return (
    <nav>
      <Link to='/'>
        <Image boxSize='50px' src='/img/pokeball.png' alt='pokeball' />
      </Link>
      <Link to='/users'>Users</Link>
      <Link to='/hunts'>Hunts</Link>
      {props.isLoggedIn ? <Link to="/profile">Profile</Link> : null}
      {props.isLoggedIn ? <Link to="/huntform">Add Hunt</Link> : null}
      {props.isLoggedIn ? <button type="button" className="nes-btn is-primary" onClick={logoutFunc}>Logout</button> : <Link to="/login"><button type='button' className='nes-btn is-primary'>Login</button></Link>}
    </nav>
  )
}

export default Navbar