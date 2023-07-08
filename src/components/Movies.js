import React, {useEffect, useState, useContext} from 'react';
import MovieItem from './MovieItem';
import { UserContext } from './UserContext';
import {Link} from "react-router-dom";
import NavbarMovies from "./NavbarMovies";


const Movies = (props) => {

    const [userContext, setUserContext] = useContext(UserContext);
    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    function showCards() {
        setUserContext((oldValue) => {
            return setUserContext({...oldValue, cards: true})
        })
    }

    const searchMovie = (event) => {
        event.preventDefault();
        const url = process.env.REACT_APP_MOVIE_ENDPOINT_SEARCH + userContext.searchTerm;
        if(userContext.searchTerm) {
            getMovieDetails(url);
        }
        setSearchTerm("");
        setUserContext((oldValue) => {
            return setUserContext({...oldValue, searchTerm: ""})
        })
    }
    const getMovieDetails = (urlString) => {
        fetch(urlString, {mode: 'cors'})
            .then((res)=> res.json())
            .then( (data) => {
                setMovies(data.results);
            })
    }

    const favoriteMovies= ()=> {
        fetch(process.env.REACT_APP_API_ENDPOINT+"movies/favorites", {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${userContext.token}`}
        }).then( async response => {
            if(!response.ok) {
                console.log("error occurred");
            }else {
                const data = await response.json();
                console.log(data.movieList);
                setMovies(data.movieList);
            }
        }).catch( (err) => {console.log(err); } );
    }

    const popularHandler = ()=> {
        getMovieDetails(process.env.REACT_APP_MOVIE_ENDPOINT_HOME);
    }

    useEffect(() => {
        getMovieDetails(process.env.REACT_APP_MOVIE_ENDPOINT_HOME);

    }, []);


    return (
        <div>
            <div className='welcome-details' >
                <NavbarMovies logoutHandler={props.logoutHandler}
                              refetchHandler={props.refetchHandler}
                              favoriteMovies={favoriteMovies}
                              popularHandler={popularHandler}
                              getMovieDetails={getMovieDetails}
                              searchMovie={searchMovie}
                              showCards={showCards} />
        </div>
        <div className='movie-container'>
            {movies.map(item => {
                    return ( <MovieItem key={item.id} {...item} /> );
            })}
        </div>
        </div>
    );
}

export default Movies;