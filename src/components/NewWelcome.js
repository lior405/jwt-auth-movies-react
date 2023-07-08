import React, {useCallback, useContext, useEffect} from 'react';
import Loader from '../Loader';
import {UserContext} from './UserContext';
import Movies from './Movies';
import CardMovie from "./CardMovie";
import CardCrypto from "./CardCrypto";
import NavbarHome from "./NavbarHome";
import homeCards from "../static/css/NewWelcom.css"

const NewWelcome = () => {
    const [userContext, setUserContext] = useContext(UserContext);
    function setCards(val) {
        setUserContext((oldValue) => {
            return setUserContext({...oldValue, cards: val})
        })
    }

    const fetchUserDetails = useCallback(()=> {
        fetch(process.env.REACT_APP_API_ENDPOINT + "users/me" , {
            method: "GET",
            credentials: "include",
            //pass authentication token as bearer token in header
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userContext.token}`,
            },
        }).then(async response=> {
            if(response.ok) {
                const data = await response.json()
                setUserContext(oldValue=> {
                    return {...oldValue, details: data};
                })
            }else {
                if(response.status === 401) {
                    //Edge case: when the token has expired.
                    //this could happen if the refreshToken calls have failed due to network error or
                    //User has had the tab open from previous day and tries to click on the fetch button
                    window.location.reload();
                } else {
                    setUserContext( oldValue => {
                        return {...oldValue, details: null}
                    })
                }
            }
        })
    }, [setUserContext, userContext.token])

    const logoutHandler = ()=> {
        fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout",{
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userContext.token}`,
            },
        }).then(async response => {
            setUserContext(oldValue => {
                return {...oldValue, details: undefined, token: null}
            })
            window.localStorage.setItem("logout", Date.now())
        })
    }
    const refetchHandler = () => {
        //set details, undefined to diplay spinner and
        //fetchUserDetails will be invoked from useEffect
        setUserContext(oldValue => {
            return {...oldValue, details: undefined}
        })
    }

    useEffect(()=> {
        //fetch only when user details are not present
        if(!userContext.details) {
            fetchUserDetails()
        }
    }, [userContext.details, fetchUserDetails])

    return userContext.details === null ? (
        "Error Loading User details"
    ) : !userContext.details ? (
        <Loader />
    ) : userContext.cards ? (<div>
        <NavbarHome logoutHandler={logoutHandler}
                    refetchHandler={refetchHandler}/>
        <div>
            <CardMovie setCards={setCards} />
            <CardCrypto setCards={setCards} />
        </div>
        </div>) : <Movies logoutHandler={logoutHandler}
                      refetchHandler={refetchHandler}/>
}

export default NewWelcome