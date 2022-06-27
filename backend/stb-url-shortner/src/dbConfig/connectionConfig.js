const connectionConfig = {
  getConnectionDetails: function (attr) {
    return connectionDetails[attr];
  },
};
const connectionDetails = {
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "urlshortenerdb",
};

module.exports = connectionConfig;
