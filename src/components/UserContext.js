import React, {useState} from 'react'

const UserContext = React.createContext( [ {}, p=> {} ] );

let initialState = {cards: true};

const UserProvider = props => {
    const [state, setState, cards] = useState(initialState)
    return (
        <UserContext.Provider value={[state, setState, cards]}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};