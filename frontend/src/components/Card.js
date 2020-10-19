import React from "react";
import "./Card.css";
import {useHistory} from "react-router-dom";

function Card({src, title, description, id, index}){
    const history = useHistory();

    return (
        <div className="card" onClick={() => history.push(`/section/${id}`)} key={index}>
            <div className={"card__header"}>
                <img src={src} alt={title} />
            </div>

            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>

        </div>
    );
}

export default Card;
