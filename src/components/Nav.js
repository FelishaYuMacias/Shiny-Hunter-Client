import { Link, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link as={RouterLink} to='/'>
        <Image boxSize='50px' src='/img/pokeball.png' alt='pokeball' />
      </Link>
      <Link as={RouterLink} to='/users'>Users</Link>
      <Link as={RouterLink} to='/recent'>Recent Hunts</Link>
      <Link as={RouterLink} to='/recent'>Hunts</Link>
      <Link as={RouterLink} to='/recent'>Pokemon</Link>
      <Link as={RouterLink} to='/login'>
        <button type='button' className='nes-btn is-primary'>Login</button>
      </Link>
    </nav>
  )
}

export default Nav