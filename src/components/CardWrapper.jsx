import React from "react";
import './CardWrapper.css';

const CardWrapper = ({
    children,
    searchTerm,
    setSearchTerm,
    titles,
    selectedTitle,
    setSelectedTitle
}) => {
    return (
        <>
            <h1>Employees</h1>
            <div className="card-controls">
                <p className="card-label">Search by Title:</p>

                <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="card-search"
                />
                <p className="card-label">Search by Name:</p>
                <select
                    value={selectedTitle}
                    onChange={(e) => setSelectedTitle(e.target.value)}
                    className="card-dropdown"
                >
                    {titles.map(title => (
                        <option key={title} value={title}>
                            {title}
                        </option>
                    ))}
                </select>

                <button onClick={() => {
                    setSearchTerm('');
                    setSelectedTitle('All');
                }} className="card-clear-button">
                    Clear Filters
                </button>
            </div>

            <div className="card-wrapper">
                {children}
            </div>
        </>
    );
};

export default CardWrapper;
