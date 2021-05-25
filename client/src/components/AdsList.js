import React from "react";
import { Link } from "react-router-dom";

export const AdsList = ({ ads }) => {
  return (
    <div>
      {ads.map((ad) => {
        return (
          <div key={ad._id} className="adcard">
            <div>
              <p>{ad.title}</p>
              <p>Срок: {new Date(ad.deadline).toLocaleDateString()}</p>
            </div>
            <div>
              <p>Бюджет: {ad.budjet} рублей</p>
              <p>Дата публикации: {new Date(ad.date).toLocaleDateString()}</p>
              <p>
                <Link to={`/detail/${ad._id}`}>Посмотреть детали</Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
