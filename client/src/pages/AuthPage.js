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

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

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
      <h1>
        Студент и не понимаешь предмет или нет свободного времени?
        <br />
        Освободи себя от выполнения лабораторных работ!
        <br />
        Размести объявление на нашем сервисе!
      </h1>
      <div className="auth">
        <h1>Авторизация</h1>
        <div>
          <div>
            <div>
              <p>Login</p>
              <input
                placeholder="Введите login"
                id="login"
                type="text"
                name="login"
                value={form.login}
                onChange={changeHandler}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                placeholder="Введите password"
                id="password"
                type="text"
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div>
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
