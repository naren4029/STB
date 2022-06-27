const mysql = require("mysql");
const connDetails = require("./connectionConfig");

const createConnection = {
  createDBConnection: function () {
    const con = mysql.createConnection({
      host: connDetails.getConnectionDetails("host"),
      user: connDetails.getConnectionDetails("user"),
      password: connDetails.getConnectionDetails("password"),
    });

    con.connect(function (err) {
      if (err) throw err;

      //console.log("Connected!");

      con.query(
        "CREATE DATABASE IF NOT EXISTS " +
          connDetails.getConnectionDetails("database"),
        function (err, result) {
          if (err) throw err;
          //console.log("Database created");
        },
      );
    });

    const connPool = mysql.createPool({
      connectionLimit: connDetails.getConnectionDetails("connectionLimit"),
      host: connDetails.getConnectionDetails("host"),
      user: connDetails.getConnectionDetails("user"),
      password: connDetails.getConnectionDetails("password"),
      database: connDetails.getConnectionDetails("database"),
    });

    connPool.query(
      "CREATE TABLE IF NOT EXISTS url_details(code VARCHAR(10) PRIMARY KEY, address VARCHAR(255) NOT NULL UNIQUE)",
      function (err, result) {
        if (err) throw err;
        //console.log("Table created");
      },
    );

    return connPool;
  },
  getConnection: function () {
    if (!this.connectionPool) {
      this.connectionPool = this.createDBConnection();
    }

    return this.connectionPool;
  },
  connectionPool: "",
};

module.exports = createConnection;
