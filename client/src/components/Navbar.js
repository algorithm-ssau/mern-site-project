import React, {useContext} from "react"
import {NavLink, useHistory} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav className="navbar">
                <ul>
                <li><a href="/">Купи лабу</a></li>
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/ads">Объявления</NavLink></li>
                    <li><NavLink to="/myads">Мои объявления</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
        </nav>
    )
}