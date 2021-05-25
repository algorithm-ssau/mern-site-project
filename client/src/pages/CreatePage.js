import React from 'react';
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const CreatePage = () => {
    const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp();
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [budjet, setBudjet] = useState("");
  const [contacts, setContacts] = useState("");
  const clickHandler = async () => {
    try {
      const data = await request("/api/ad/create", "POST", {
        title: title,
        task: task,
        deadline: deadline,
        budjet: budjet,
        contacts: contacts,
      }, {Authorization: `Bearer ${auth.token}`});
      history.push(`/detail/${data.ad._id}`)
    } catch (e) {}
  };
    return (
        <div className="create">
      <div>
      <h1>Заполните объявление</h1>
      <p>Название</p>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <p>Описание</p>
      <input
        id="task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <p>Срок выполнения</p>
      <input
        id="deadline"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      ></input>
      <p>Бюджет</p>
      <input
        id="budjet"
        type="text"
        value={budjet}
        onChange={(e) => setBudjet(e.target.value)}
      ></input>
      <label htmlFor="budjet">рублей</label>
      <p>Контакты</p>
      <input
        id="contacts"
        type="text"
        value={contacts}
        onChange={(e) => setContacts(e.target.value)}
      ></input>
      </div>
      <div>
      <button onClick={clickHandler}>Опубликовать</button>
      </div>
    </div>
    );
};