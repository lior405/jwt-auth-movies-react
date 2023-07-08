import React, {useContext, useState} from 'react';
import { UserContext } from './UserContext';

const NavbarHome = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [userContext] = useContext(UserContext);

    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className='welcome-details' >
        <nav className="bp4-navbar .modifier bp4-dark">
            <div className="bp4-navbar-group bp4-align-left">
                <div className="bp4-navbar-heading"> Welcome&nbsp;
                        <strong>
                            {userContext.details.firstName}
                            {userContext.details.lastName &&
                            " " + userContext.details.lastName}
                        </strong> !</div>
            </div>
            <div className="bp4-navbar-group bp4-align-right">
                <span className="bp4-navbar-divider"></span>
                <button className="bp4-button bp4-minimal bp4-icon-antenna" onClick={props.refetchHandler}>Refetch</button>
                <button className="bp4-button bp4-minimal bp4-icon-log-out" style={{color: "lightskyblue"}} onClick={props.logoutHandler}>Logout</button>
            </div>
        </nav>
    </div>
    );
}

export default NavbarHome;