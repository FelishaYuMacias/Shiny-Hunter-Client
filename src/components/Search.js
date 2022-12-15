import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeAPI from '../util/PokeAPI';

const Search = () => {
  const [pokemon, setPokemon] = useState(" ");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")
  const [loading, setLoading] = useState(false)


  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      toArray.push(res.data)
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="nes-input search"
          type="text"
          onChange={handleChange}
          placeholder="Enter Pokemon Name"
        />
        <button className="nes-btn is-success">Search</button>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className='container'>
            {!loading && pokemon ? (
              <div>
              </div>
            ) : null}
            <div className="nes-container with-title is-centered">
              <span className="nes-text is-primary">
                <h1>{data.species.name}</h1>
                <img src={data.sprites.other.home.front_shiny} alt="shiny" />
                <div className='nes-table-responsive'>
                  <table className='nes-table is-bordered is-centered'>
                    <tbody>
                      <tr>
                        <td>Type</td>
                        <td>{pokemonType}</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{Math.round(data.height * 3.9)}"</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{Math.round(data.weight / 4.3)}lbs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </span>
            </div>
          </div>
        )
      })
      }
    </>
  )
}

export default Search