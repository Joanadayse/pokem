import { Container, PokemonNumber , PokemonName ,TypesContainer,Pokemon, CatchButton, Pokeball, DetalsButton} from "./styled"



export default function PokemonCard (){


    return (
        <Container>
      <div>
        <PokemonNumber>ID</PokemonNumber>
        <PokemonName>Nome</PokemonName>
        <TypesContainer>
          tipos
        </TypesContainer>
        <p>Detalhes</p>
      </div>
      <div>
        <Pokemon/>
        <CatchButton>adicionar</CatchButton>
        <DetalsButton>Detalhes</DetalsButton>
      </div>
      <Pokeball />
    </Container>
    )
}