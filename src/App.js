import { useEffect, useState } from "react";
import Filme from "./components/Filme";
import { Container } from "@mui/material";
import MenuResponsivo from "./components/MenuResponsivo";
import Titulo from "./components/Titulo";
import Style from "./components/global.module.css"


function App() {

  const[ filmes, setFilmes ] = useState();
  const[ erro, setErro ] = useState(false);

  useEffect( () => {
    
    const teste = localStorage.getItem("usuario");

    fetch( process.env.REACT_APP_BACKEND + "produtos/" + teste , {
      headers: {
        "Content-Type": "application/json"
      }
    } )
    .then( ( resposta) => resposta.json() )
    .then( ( json ) => setFilmes( json ) )
    .catch( (erro) => setErro( true ) );
 
  }, [] );

  function Excluir( evento, id){
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "produtos", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
              id: id,
              usuario:localStorage.getItem("usuario")
            })
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => {

        const novaLista= filmes.filter( (filme) => filme._id !== id);
            setFilmes( novaLista);
    })
    .catch( ( error ) => {  setErro( true ) } )
    
  }

  
  return (
    <>
        <MenuResponsivo/>
      <Titulo></Titulo>


      <Container sx={{
        display: "flex" ,
        flexFlow: "row" ,
        flexWrap: "wrap",
        mt:10,
        gap:"2rem"
     }}>
      { filmes && (
          filmes.map( (filme, index) => (
            <Filme
              trailler={filme.imagem}
              titulo={filme.titulo}
              descricao={filme.descricao}
              ano={filme.ano}
              duracao={filme.duracao}
              excluir={ (e) => Excluir ( e,filme._id ) }
              id={filme._id}
           />
          
        ))
      )}
      </Container>
    </>
  );
}

export default App;
