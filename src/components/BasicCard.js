import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {

    function handleClick() {
        props.setCards(false)
    }

    return (<div className='homeCards'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    component="img"
                    image=""
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    { props.is_movies ? <Button size="small" onClick={handleClick}>
                            Movies
                        </Button>
                        : <Button size="small" >Crypto</Button>}

                </CardActions>
            </Card>

        </div>
    );
}