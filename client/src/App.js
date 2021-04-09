import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <ul className="menu">
          <a className="name">Название сайта</a>
          <a>Создать объявление</a>
          <a>Найти объявление</a>
          <a>Вход/регистрация</a>
        </ul>
      </header>
      <div className= "block">
        <p>Блок контента</p>
      </div>
      <footer>
        <p>Тут какая-то информация и контактики наши будут</p>
      </footer>
    </div>
  );
}

export default App;
