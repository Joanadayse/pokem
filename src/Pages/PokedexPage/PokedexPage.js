import  Header  from "../../components/Header/Header"
import  PokemonCard from "../../components/PokemonCards/PokemonCard"
import { useState } from "react"
import {CardsContainer} from "./pokedexStyle"

export default function PokedexPage (){

    const [info, setInfo]= useState([
        {nome:"joana", arroba: "@joana"},
        {nome:"maria", arroba: "@maria"},
        {nome:"joao", arroba: "@joao"},
        {nome:"joana", arroba: "@joana"},
        {nome:"maria", arroba: "@maria"},
        {nome:"joao", arroba: "@joao"},
        {nome:"joana", arroba: "@joana"},
        {nome:"maria", arroba: "@maria"},
        {nome:"joao", arroba: "@joao"},
        {nome:"joana", arroba: "@joana"},
        {nome:"maria", arroba: "@maria"},
        {nome:"joao", arroba: "@joao"},
        {nome:"joana", arroba: "@joana"},
        {nome:"maria", arroba: "@maria"},
        {nome:"joao", arroba: "@joao"},
        {nome:"joana", arroba: "@joana"},
        {nome:"maria", arroba: "@maria"},
        {nome:"joao", arroba: "@joao"},
        {nome:"joana", arroba: "@joana"},
        {nome:"maria", arroba: "@maria"},
       
       ])
    return (
        <div> 
            <Header/>
           <h1>Pokedex Page</h1>
<CardsContainer>
           { info.map(() => {
    // console.log(info);
    return <PokemonCard />;
  })}
</CardsContainer>
            
            </div>
    )
}