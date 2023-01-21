import {BrowserRouter, Route, Routes} from "react-router-dom"
import PokedexPage from "../../Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../../Pages/PokemonDetailPage/PokemonDetailPage"
import PokemonListPage from "../../Pages/PokemonsListPage/PokemonListPage"

export const Router=()=>{
    return(
        <BrowserRouter>
        
        <Routes>

         <Route  path="/" element={<PokedexPage/>}/>
         <Route path="/pokedex" element={<PokemonListPage/>}/>
         <Route path="details" element={<PokemonDetailPage/>}/>


        </Routes>
        
        
        </BrowserRouter>
    )
}