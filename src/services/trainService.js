import axios from 'axios';
import apiConstants from '../constants/apiUrlConstants';

/**
 * @description
 * Get all trains
 */
function getAll() {
  return axios.get(apiConstants.TRAINS);
}

/**
 * @description
 * Get latest information of one train
 * @param {Number} trainId
 * @param {String} [departureDate]
 * @param {String} [version]
 */
function getLatest(trainId, departureDate, version) {
  const url = `${apiConstants.TRAINS}/latest/${trainId}`;
  let queryParams = '?';
  if (departureDate) {
    queryParams += `departure_date=${departureDate}&`;
  }
  if (version) {
    queryParams += `version=${version}`;
  }
  return axios.get(`${url}${queryParams}`);
}

const trainService = {
  getAll,
  getLatest,
};
export default trainService;
