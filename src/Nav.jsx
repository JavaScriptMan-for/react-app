import React from "react";
import "./Components.css";
import Text from "./Text";
import Header from "./Header";
import Main from "./Main";
import Interective from "./Interective";
import Date from "./Date";
import Footer from "./Footer";
import header from ".";
import "./info.css"



function Nav() {
    // document.querySelector("#a_1").style.borderBottom = "2px solid red"
        return(
            <>
            <nav>
             <a id="a_1" onClick={main}>Главная страница</a>
                <a id="a_2" onClick={info}>Информация о проектах</a>
                <a id="a_3" onClick={reg} >Регестрация</a>
                <a id="a_4" onClick={we}>Наши партнёры</a>
            </nav>
            </>
        )
}
export default Nav;
function main() {
    document.querySelector("#a_1").style.borderBottom = "2px solid red"
    document.querySelector("#a_2").style.borderBottom = "none"
    document.querySelector("#a_3").style.borderBottom = "none"
    document.querySelector("#a_4").style.borderBottom = "none"
    header.render(
        <>
        <Header />
        <Nav/>
        <Main />
        <Interective />
        <Footer />
        <Date />
        </>
    )
    }
function info() {
 document.querySelector("#a_2").style.borderBottom = "2px solid red"
 document.querySelector("#a_1").style.borderBottom = "none"
 document.querySelector("#a_3").style.borderBottom = "none"
 document.querySelector("#a_4").style.borderBottom = "none"
    header.render(
        <>
        <Header />
        <Nav />
        <Text />
        </>  
    )
}
function reg() {
    document.querySelector("#a_3").style.borderBottom = '2px solid red';
    document.querySelector("#a_2").style.borderBottom = 'none'
    document.querySelector("#a_1").style.borderBottom = 'none'
    document.querySelector("#a_4").style.borderBottom = 'none'
    header.render(
        <>
        <Header />
        <Nav />
        </>
    )
}
function we() {
    document.querySelector("#a_3").style.borderBottom = 'none'
    document.querySelector("#a_2").style.borderBottom = 'none'
    document.querySelector("#a_1").style.borderBottom = 'none'
    document.querySelector("#a_4").style.borderBottom = '2px solid red'
    header.render(
        <>
        <Header />
        <Nav />
        </>
    )
}
