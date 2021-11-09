import React from 'react';
import { fetchRocket } from '../actions/actions';
//Changed to functional component 
const Launch = ({ launch, dispatch,  launchCollection}) => {

  let show = false, div;

  const showDiv = () => {
    if(!show){
      fetchRocket(dispatch, launch.rocket.rocket_id);
      show = true;
    }else show = false
    console.log(show)
    console.log(launchCollection)
  }
  const createDiv = () => {
    if(show) div = <div>
                      <h3>{launch.rocket.rocket_id}</h3>
                      <p>Rocket ID: {launchCollection.rocket.id}</p> 
                      <p>Cost Per Lunch: {launchCollection.rocket.cost_per_launch}</p> 
                      <p>Rocket ID: {launchCollection.rocket.description}</p> 
                    </div>  
    else div = <div></div> ;
  }

    return (
      <li className="list-group-item" onClick={()=>{
        showDiv()
        createDiv()
      }}>
        <h2> { launch.mission_name } </h2>
        <p> Flight Number: { launch.flight_number } </p>
        {div}
      </li>
    );
  }

export default Launch;
