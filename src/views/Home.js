import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <h1>Professor Oak's Poke Dex</h1>
      <i className="nes-bulbasaur"></i>
      <i className="nes-charmander"></i>
      <i className="nes-squirtle"></i>
      <section className="message -right">
        <div className="nes-balloon from-right">
          <p>Use the PokeDex to search for your favorite Pokemon!</p>
        </div>
        <i className="nes-bcrikko"></i>
      </section>
      <Search />
    </div >
  )
}

export default Home