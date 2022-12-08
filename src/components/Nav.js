import { Link as Image } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

 function Navbar(props) {
  const navigate = useNavigate()
  const logoutFunc = ()=>{
    props.handleLogout()
    navigate("/login")
  }
  return (
    <nav>
      <Link as={useNavigate} to='/'>
        <Link as = {Image} boxSize='50px' src='/img/pokeball.png' alt='pokeball' />
      </Link>
      <Link as={useNavigate} to='/users'>Users</Link>
      <Link as={useNavigate} to='/hunts'>Hunts</Link>
      <Link as={useNavigate} to='/pokemon'>Pokemon</Link>
      <Link as={useNavigate} to='/profile'>Profile</Link>
      <Link as={useNavigate} to='/login'>
        <button type='button' className='nes-btn is-primary'>Login</button>
      </Link>
      {props.isLoggedIn?<Link to ="/profile">Profile</Link>:null}
        {props.isLoggedIn?<button onClick={logoutFunc}>Logout</button>:<Link to="/login">login</Link>}
    </nav>
  )
}

export default Navbar