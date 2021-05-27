import React, {useContext} from "react";
import { useHistory } from "react-router";
import { AuthContext } from '../context/AuthContext'

export const AdDetailsCard = ({ ad }) => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const removeHandler = () => {
    try {
      ad.findOneAndDelete({_id: ad._id})
      history.push("/ads")
      // const data = await request(
      //   "/api/ad/create",
      //   "POST",
      //   {
      //     id: ad._id
      //   },
      //   { Authorization: `Bearer ${auth.token}` }
      // );
      
      //history.push(`/detail/${data.ad._id}`);
    } catch (e) {}
  }

  return (
    <section className="detail">
      <h2>
        <strong>{ad.title}</strong>
      </h2>
      <p>
        Бюджет: <strong>{ad.budjet} рублей</strong>
      </p>
      <div>
        <h3>Описание</h3>
        <p>{ad.task}</p>
      </div>
      <p>
        Срок выполнения:{" "}
        <strong>{new Date(ad.deadline).toLocaleDateString()}</strong>
      </p>

      <p>
        Контакты: <strong>{ad.contacts}</strong>
      </p>
      <p>
        Дата публикации:{" "}
        <strong>{new Date(ad.date).toLocaleDateString()}</strong>
      </p>
      {/* <p>Автор</p>
      <p>{ad.owner}</p> */}
      {/* { ad.owner === auth.userId && <button onClick={removeHandler}>Удалить объявление</button>} */}
    </section>
  );
};
