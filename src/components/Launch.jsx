import React from 'react';

//Changed to functional component 
const Launch = ({ launch }) => {

    return (
      <li className="list-group-item">
        <h2> { launch.mission_name } </h2>
        <p> Flight Number: { launch.flight_number } </p>
      </li>
    );
  }

export default Launch;
