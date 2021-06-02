import React from 'react'
import { useHistory } from "react-router";

export const MainPage = () => {
    const history = useHistory()

  const createHandler = () => {
    try {
      history.push(`/create`)
    } catch (e) {}
  }
  
    const adsHandler = () => {
      try {
        history.push(`/ads`)
      } catch (e) {}
    }
  return (
    <div className="container main">
      <p>
        Студент и не понимаешь предмет или нет свободного времени?
        <br />
        Или у ты гений и у тебя свободного времени как мозгов?
        <br />
        Освободи себя или освободи других от выполнения лабораторных работ!
        <br />
        Размести объявление на нашем сервисе!
      </p>
      <div>
        <button onClick={createHandler}>
          Разместить объявление
        </button>
        <button onClick={adsHandler}>
          Смотреть все объявления
        </button>
      </div>
    </div>
  );
};