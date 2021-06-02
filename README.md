# Купи лабу
## О проекте
Сайт-доска объявлений о лабораторных работах. Пользователи могут создавать объявления о лабораторных работах либо отзываться на чужие объявления.

В создании проекта участвовали:
 - Журавлев Даниил:goat:
 ![Doni](/faces/doni.jpg)
 - Сусликова Мария:mouse:
 ![Mary](/faces/mary.jpg)
 - Кирюшкин Максим:new_moon_with_face:
 ![Maxon](/faces/maxon.jpg)

*Ссылка на сайт -> https://kupi-labu.netlify.app/*
___
Запуск проекта

1. Клонируйте репозиторий
```
  git clone https://github.com/algorithm-ssau/mern-site-project.git
```
2. Установка необходимых модулей

 Сначала нужно установить необходимые модули в проект

 Из корневой папки проекта:
```
 npm install
 cd client 
 npm install
```

3. Запуск серверной и клиентской части

 Из корневой папки проекта:
```
 npm run dev
```

 4. Python API
 
 API, созданное с помощью Python,Fastapi используется для наполнения базы данных сайта посредством POST-запросов. Также реализованы GET-запросы на получение всех пользователей и объявлений из базы.

 Для работы с API вам нужно установить Python и Pip.

 Затем
```
 cd ..\python_api
```
 Настройка виртуального окружения:
```
 py -3 -m venv .venv
 .venv\scripts\activate
```
 Установите fastapi,uvicorn,pydantic,bson,motor
```
 pip install uvicorn fastapi motor pydantic 
```
 Запустите API:
```
 uvicorn main:app
```
 Измените URL на 
 ```
 http://127.0.0.1:8000/docs
 ```
 Откройте интерфейс OpenAPI.
 
 Выберите необходимый запрос,введите данные и нажмите кнопку "EXECUTE".
