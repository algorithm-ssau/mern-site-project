import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    login: "",
    password: ""
  });

  useEffect( () => {
    console.log("Error", error)
    message(error)
    clearError()
  }, [error, message, clearError] )

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("api/auth/register", "POST", { ...form });
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <div>
        <div>
          <div>
            <input
              placeholder="Введите login"
              id="login"
              type="text"
              name="login"
              onChange={changeHandler}
            />
            <label htmlFor="login">login</label>
          </div>
          <div>
            <input
              placeholder="Введите password"
              id="password"
              type="text"
              name="password"
              onChange={changeHandler}
            />
            <label htmlFor="password">password</label>
          </div>
        </div>
        <div>
          <button disabled={loading}>Войти</button>
          <button onClick={registerHandler} disabled={loading}>
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};
