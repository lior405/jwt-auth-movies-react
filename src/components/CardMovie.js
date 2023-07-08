import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardMovie(props) {

    function handleClick() {
        props.setCards(false)
    }

    return <div className='homeCards'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 300 }}
                component="img"
                image="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=856&q=80"
                title="movie logo"
            />
            <div className="bottomCards">
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    Movies
                </Typography>
                <Typography variant="body">
                    Enter and explore our movies page. <br/>
                    Search, save, and view your favourite movies.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick} color="warning" variant="outlined">
                    Movies
                </Button>
            </CardActions>
            </div>
        </Card>
    </div>
}

export default CardMovie