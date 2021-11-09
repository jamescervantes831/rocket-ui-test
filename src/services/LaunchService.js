import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';

const api = axios.create();

const getLaunches = () => {
  return api.get(`${SERVICES_URL}/launches`);
}

const getRocket = (rocketId) => {
  return api.get(`${SERVICES_URL}/rockets/${rocketId}`)
}

export const launchService = {
  getLaunches,
  getRocket
};