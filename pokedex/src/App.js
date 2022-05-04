import React,{useEffect,useState} from 'react';
import { getPokemonsData, getPokemons, searchPokemon } from "./api";
import './App.css';
import Navbar from './components/Nav/Navbar';
import Pokedex from './components/Pokedex/Pokedex';
import Searchbar from './components/Searchbar/Searchbar';


function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading,setLoading] = useState(false);
  const [pokemons,setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 24;
  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })
      
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));

    }catch(error){
      console.log("fetchPokemons error: ", error);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)

  }

  return (
    <div>
      <div className='fundo'>
        <div className='header'>
          <Navbar/>
          <Searchbar onSearch={onSearchHandler}/>
        </div>
        {notFound ? (
          <div class-name="not-found-text">Nenhum resultado encontrado!</div>
        ) : 
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />)}
      </div>
    </div>
  );
}

export default App;
