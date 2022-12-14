import Search from "../components/Search";

const Home = () => {
  return (
    <div>
<h1>Professor Oak's Poke Dex</h1>
  <i className="nes-bulbasaur"></i>
  <i className="nes-charmander"></i>
  <i className="nes-squirtle"></i>
      <section className="nes-container">
  
    <Search/>

    <section class="message -right">
      
      <div class="nes-balloon from-right">
        <p>Its a PokeDex search for your favorite Pokemon</p>
      </div>
      <i class="nes-bcrikko"></i>
    </section>
  </section>

    
    
    </div>
  )
}

export default Home