import React from "react";

export const AdDetailsCard = ({ ad }) => {
  return (
    <>
      <p>Название</p>
      <p>{ad.title}</p>
      <p>Описание</p>
      <p>{ad.task}</p>
      <p>Срок выполнения</p>
      <p>{new Date(ad.deadline).toLocaleDateString()}</p>
      <p>Бюджет</p>
      <p>{ad.budjet}</p>
      <p>Контакты</p>
      <p>{ad.contacts}</p>
      <p>Дата публикации</p>
      <p>{new Date(ad.date).toLocaleDateString()}</p>
      <p>Автор</p>
      <p>{ad.owner}</p>
    </>
  );
};
