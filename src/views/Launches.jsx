import React, { useEffect } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

//Changed class component to functional component
const LaunchesView = ({ launchCollection, dispatch }) => {
  
  useEffect(() =>{//onMounth will load and render data
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
  }, [])

  const getContent = () => {

    console.log(this.props)
    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    //one liner for creating collection of Launch elements
    const launches = launchCollection.launches.map((launch) =>{
      return <Launch {...{ key: launch.launch_id, launch }} />
    });
    return <ul className="list-group">{launches}</ul>;
  }
    return (
      <div>
        <h2> SpaceX launches </h2>
        {getContent()}
      </div>
    );
  }

export default ConnectedView(LaunchesView, 'launches');
