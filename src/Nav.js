import React from "react";
import { ReactDOM } from "react-dom";
import "./Components.css";
import Header from "./Header";


class Nav extends React.Component {
    render() {
        return(
            <>
            <nav id="MainNav">
                <a id="MainA">Главная страница</a>
                <a >Информация</a>
                <a >Регестрация</a>
                <a >Наши партнёры</a>
            </nav>
            </>
        )
    }
}
export default Nav;


