import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Link } from "@mui/material";



function Filme(props){
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <iframe width="100%" height="315" src={ "https://www.youtube.com/embed/" + props.trailler } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.descricao}
                    </Typography>
                    <Grid container>
                    <Grid item xs={2} ml={5}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs={2} ml={9}>
                        <span>{props.duracao}</span>
                    </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Grid container>
                <Grid item xs={6}>
            <button onClick={props.excluir}>X</button>
            </Grid>
            <Grid item xs={6}>
            <Link href={"edicao/" + props.id}>Editar</Link>
            </Grid>
            </Grid>
            
        </Card>
    )
}


export default Filme;