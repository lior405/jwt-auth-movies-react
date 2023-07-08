import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from './UserContext';
import {Link} from "react-router-dom";

const NavbarMovies = (props) => {

    const [userContext, setUserContext] = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState("");

    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
        setUserContext((oldValue) => {
            return setUserContext({...oldValue, searchTerm: searchTerm})
        })
    }

    return <nav className="bp4-navbar .modifier bp4-dark">
            <div className="bp4-navbar-group bp4-align-left">
                <div className="bp4-navbar-heading"> Welcome&nbsp;
                    <strong>
                        {userContext.details.firstName}
                        {userContext.details.lastName &&
                            " " + userContext.details.lastName}
                    </strong> !</div>
                <span className="bp4-navbar-divider"></span>
                <button className="bp4-button bp4-minimal bp4-icon-star" onClick={props.favoriteMovies}>Favourites</button>
                <button className="bp4-button bp4-minimal bp4-icon-circle-arrow-up" onClick={props.popularHandler} >Popular</button>
            </div>
            <div className="bp4-navbar-group bp4-align-right">
                <form onSubmit={props.searchMovie}>
                    <input className="bp4-input" placeholder="Search Movie..." value={searchTerm} onChange={handleOnChange} type="text" />
                </form>
                <span className="bp4-navbar-divider"></span>
                <button className="bp4-button bp4-minimal bp4-icon-home" onClick={props.showCards}>Home Page</button>
                <button className="bp4-button bp4-minimal bp4-icon-antenna" onClick={props.refetchHandler}>Refetch</button>
                <button className="bp4-button bp4-minimal bp4-icon-log-out" onClick={props.logoutHandler}><Link to={"/"}> Logout </Link></button>
            </div>
        </nav>
}

export default NavbarMovies