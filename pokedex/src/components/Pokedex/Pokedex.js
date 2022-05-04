import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import './Pokedex.css';
import Pagination from "../Pagination/Pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
    if(page > 0) {
        setPage(page-1)
    }
  }
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1)
      }
  }
  return (
    <div>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="pokedex-grid">
            {pokemons && pokemons.map((pokemon, index) => {
                return (
                  <Pokemon key={index} pokemon={pokemon}/>
                );
            })}
        </div>
      )}
      <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
    </div>
  );
};

export default Pokedex;
