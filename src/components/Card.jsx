import React from "react";
import './Card.css';

const Card = ({ name, title, description, image }) => {
    return (
        <div className="card-box">
            <img
                className="card-image"
                src={image}
                alt={`${name}'s profile`}
            />
            <h2 className="card-name">{name}</h2>
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;
