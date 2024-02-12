require('dotenv').config();

const config = {
    serverUrl: process.env.SERVER_URL || 'http://localhost:3000'
};

module.exports = config;
