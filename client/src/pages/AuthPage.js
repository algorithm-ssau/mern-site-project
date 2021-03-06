import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  useEffect( () => {
    message(error);
    clearError();
  }, [error, message, clearError] );

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("api/auth/register", "POST", { ...form });
      message(data.message);
      // console.log("Data", data);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      // console.log("Data", data);
    } catch (e) {}
  };

  return (
    <div className="container">
      <h1 className="title">
        Купи лабу!
      </h1>
      <h2>
        Студент и не понимаешь предмет или нет свободного времени?
        <br />
        Или у ты гений и у тебя свободного времени как мозгов?
        <br />
        Освободи себя или освободи других от выполнения лабораторных работ!
        <br />
        Размести объявление на нашем сервисе!
      </h2>
      <div className="auth">
        <h2>Авторизация</h2>
        <div>
          <div className="auth-form">
            <div>
              <p>Логин</p>
              <input
                placeholder="Введите логин"
                id="login"
                type="text"
                name="login"
                value={form.login}
                onChange={changeHandler}
              />
            </div>
            <div>
              <p>Пароль</p>
              <input
                placeholder="Введите пароль"
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="auth-buttons">
            <button onClick={loginHandler} disabled={loading}>
              Войти
            </button>
            <button onClick={registerHandler} disabled={loading}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
