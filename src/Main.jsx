import React from "react";
import "./Components.css";
class Main extends React.Component {
    render() {
        return(
            <>
                  <span id="text">
            <h2>Обо мне</h2>
        <p id="one">
        <span>Меня зовут Иван, мне 14 лет и я фронтенд-программист! Занимаюсь вёрсткой сайтов, написанием веб-приложений и игр. <br /> </span> 
         Я приветствую Вас на моём сайте-портфолио, где я загружаю все свои проекты.
        </p> <br />
        <p id="two">Я делал проекты разной сложности от обычного простенького сайта до огроменных веб-приложений. Я очень хорошо знаю HTML, CSS, JavaScript, TypeScript. <br />
        Достаточно хорошо знаю технологию git, npm. Из библиотек знаю пока-что только React.
        </p>
            </span>
            </>
        )
    }

}
export default Main;