import React from "react";
import './index.css';
import "./Components.css";

class Header extends React.Component {
    render() {
        return(
            <>
            <header id="omg">
                <h1 className="mainText">Добро пожаловать на сайт</h1>
                <h3>Сделано с React</h3>
            </header>
            </>
        )
    }
}
export default Header;