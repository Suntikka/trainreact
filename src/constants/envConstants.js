require('dotenv').config();

const constants = {
  API_URL: (process.env.API_URL || 'https://rata.digitraffic.fi/api/v1'),
};

export default constants;
