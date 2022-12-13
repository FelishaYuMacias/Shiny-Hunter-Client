import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [sprites, setPokemon] = useState(" ");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")
  const [loading, setLoading] = useState(false)
  
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${sprites}`
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
        <label>
          <button className="nes-btn is-success"> Search</button>
            <input class="nes-input"
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className='container'>
            {!loading && sprites ? (
               <div>
            </div>
            ): null}
        <div className="nes-container with-title is-centered">
          <span className="nes-text is-primary">
            <h1>{data.species.name}</h1>
            <img src={data.sprites["front_shiny"]} alt="shiny" />
            
            <div className='divTable'>
              <div className='divTableBody'>
                <div className='divTableRow'>
                  <div className='divTableCell'>Type</div>
                  <div className='divTableCell'>{pokemonType}</div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Height</div>
                  <div className='divTableCell'>
                    {" "}
                    {Math.round(data.height * 3.9)} "
                  </div>
                </div>
                <div className='divTableRow'>
                  <div className='divTableCell'>Weight</div>
                  <div className='divTableCell'>
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
                  <div className='divTableRow'>
                  <div className='divTableCell'>Number of Battle</div>
                  <div className='divTableCell'>{data.game_indices.length}
                  </div>
                </div>
              </div>
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