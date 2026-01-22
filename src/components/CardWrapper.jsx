import React from "react";
import './CardWrapper.css';

const CardWrapper = ({ children }) => {
    return (
        <>
            <h1>Employees</h1>
            <div className="card-wrapper">
                {children}
            </div>
        </>
    );
};

export default CardWrapper;
