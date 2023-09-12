import { Box, Container, TextField, Button, Typography, Alert} from '@mui/material';
import React, { useState } from 'react'

function Filmes() {

    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState("");
    const [ ano, setAno ] = useState("");
    const [ duracao, setDuracao ] = useState("");
    const [ categoria, setCategoria ] = useState("");
    const [ imagem, setImagem ] = useState("");
    const [ cadastro, setCadastro ] = useState("");
    const [ erro, setErro ] = useState(false);

    function Cadastrar( evento )
    {
      evento.preventDefault();
      fetch( process.env.REACT_APP_BACKEND + "filmes", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
              {
                  titulo: titulo,
                  descricao: descricao,
                  ano:ano,
                  duracao:duracao,
                  categoria:categoria,
                  imagem:imagem
              }
          )
      } )
      .then( (resposta) => resposta.json() )
      .then( ( json ) => {
  
          if( json._id ) {
              setCadastro( true );
              setErro(false);
          } else {
              setErro( true );
              setCadastro(false);
          }
      } )
      .catch( ( erro ) => {  setErro( true ) } )
      
    }
  return (
    <Container component="section" maxWidth="sm">
        <Box sx={{ 
            mt: 10,
            backgroundColor: "#EDEDED",
            padding: "30px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography component="h1" variant='h4'>Filmes</Typography>
            {erro && (<Alert severity="warning" sx={{mt:2, mb:2}}>Desculpe tente novamente, por favor!</Alert>)}
            {cadastro&& (<Alert severity="success" sx={{mt:2, mb:2}}>Obrigada por cadastrar!!</Alert>)}
            <Box component="form" onSubmit={Cadastrar}>
                <TextField
                    type="text"
                    label="Título" 
                    variant="filled" 
                    margin="normal"
                    value={titulo}
                    onChange={ (e) => setTitulo( e.target.value ) }
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    label="Descrição" 
                    variant="filled" 
                    margin="normal"
                    value={descricao}
                    onChange={ (e) => setDescricao( e.target.value ) }
                    fullWidth
                    required
                />
                <TextField
                    type="number"
                    label="Ano" 
                    variant="filled" 
                    margin="normal"
                    value={ano}
                    onChange={ (e) => setAno( e.target.value ) }
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    label="Duração" 
                    variant="filled" 
                    margin="normal"
                    value={duracao}
                    onChange={ (e) => setDuracao( e.target.value ) }
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    label="Categoria" 
                    variant="filled" 
                    margin="normal"
                    value={categoria}
                    onChange={ (e) => setCategoria( e.target.value ) }
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    label="Url da Imagem" 
                    variant="filled" 
                    margin="normal"
                    value={imagem}
                    onChange={ (e) => setImagem( e.target.value ) }
                    fullWidth
                    required
                />
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2}}>Cadastrar Filme</Button>
            </Box>
        </Box>
    </Container>
  )
}

export default Filmes;