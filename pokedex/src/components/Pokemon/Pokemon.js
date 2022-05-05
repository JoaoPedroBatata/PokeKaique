import React from "react";
import './Pokemon.css';

const Pokemon = (props) => {
    const {pokemon} = props
    return (
        <div className="card-pokemon-container">
            <div className="card-pokemon">
                <div className="background">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="type">
                    {pokemon.types.map((type,index) =>{
                            return(
                                <img className="img-pokemon-type" src={filtrarImgPeloTipo(type)}/>
                            ) 
                            
                        })}
                    <div className="name">
                        {pokemon.name} 
                    </div>
                </div>
                <div class="pokemon-stats">
                    {pokemon.stats.map((stat,index) =>{
                        return(
                            <div class="pokemon-stats-text" key = {index}>
                                {stat.stat.name}:   {stat.base_stat}
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>   
    )
}

function filtrarImgPeloTipo(pokemonType) {
    const typesImg = [
        {
            name:"grass",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/120px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"
        },
        {
            name:"poison",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/120px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"
        },
        {
            name:"fire",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/120px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
        },
        {
            name:"water",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/120px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
        },
        {
            name:"bug",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/120px-Pok%C3%A9mon_Bug_Type_Icon.svg.png"
        },
        {
            name:"eletric",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/120px-Pok%C3%A9mon_Electric_Type_Icon.svg.png"
        },
        {
            name:"dark",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/120px-Pok%C3%A9mon_Dark_Type_Icon.svg.png"
        },
        {
            name:"fairy",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/120px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"
        },
        {
            name:"fighting",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/120px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png"
        },
        {
            name:"flying",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/120px-Pok%C3%A9mon_Flying_Type_Icon.svg.png"
        },
        {
            name:"ghost",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/120px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png"
        },
        {
            name:"ground",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/120px-Pok%C3%A9mon_Ground_Type_Icon.svg.png"
        },
        {
            name:"ice",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/120px-Pok%C3%A9mon_Ice_Type_Icon.svg.png"
        },
        {
            name:"normal",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png"
        },
        {
            name:"psychic",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/120px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png"
        },
        {
            name:"rock",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/120px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
        },
        {
            name:"steel",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/120px-Pok%C3%A9mon_Steel_Type_Icon.svg.png"
        }
    ];

    return typesImg.filter((typeImg) => {
        return pokemonType.type.name === typeImg.name;
    })[0].img;
}


export default Pokemon;