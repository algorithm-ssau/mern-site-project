import React from "react";
import { Link } from "react-router-dom";

export const AdsList = ({ ads }) => {

  return (
    <div>
      {ads.map((ad) => {
        return (
          <div key={ad._id} className="adcard">
            <div className="adcard-left">
              <h3>{ad.title}</h3>
              <p>Срок: <strong>{new Date(ad.deadline).toLocaleDateString()}</strong></p>
            </div>
            <div className="adcard-right">
              <p>Бюджет: <strong>{ad.budjet} рублей</strong></p>
              <p>Дата публикации: <strong>{new Date(ad.date).toLocaleDateString()}</strong></p>
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
