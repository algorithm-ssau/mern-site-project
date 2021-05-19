import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <div>
        {routes}
        {/* <header>
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
      </footer> */}
      </div>
    </Router>
  );
}

export default App;
