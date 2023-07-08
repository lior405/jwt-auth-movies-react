import React, {useState} from 'react'

const UserContext = React.createContext( [ {}, p=> {} ] );

let initialState = {cards: true, searchTerm: ''};

const UserProvider = props => {
    const [state, setState, cards, searchTerm] = useState(initialState)
    return (
        <UserContext.Provider value={[state, setState, cards, searchTerm]}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};