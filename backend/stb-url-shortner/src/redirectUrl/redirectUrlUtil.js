const createDBConnection = require("../dbConfig/dbCreateConnection");

const redirectUrlUtil = {
  GET_urlRedirect: (req, res, next) => {
    if (req.baseUrl.length < 8 || req.baseUrl.length > 8) {
      next();
    }

    if (!req.baseUrl) {
      res.status(404).json("No URL Found");
    }

    const code = req.baseUrl.substr(1);

    let codeExistance = redirectUrlUtil.fetchExistingDataUsingCode(code);

    codeExistance.then((selectQueryRes) => {
      if (selectQueryRes.length > 0) {
        res.redirect(301, `http://${selectQueryRes[0].address}`);
      } else {
        res.status(404).json("No URL Found");
      }
    });
  },
  fetchExistingDataUsingCode: (code) => {
    const connPool = createDBConnection.getConnection();
    return new Promise((resolve, reject) => {
      connPool.query(
        "SELECT * from url_details where code='" + code + "'",
        function (error, results, fields) {
          if (error) {
            return reject(error);
          }

          return resolve(results);
        },
      );
    });
  },
};

module.exports = redirectUrlUtil;
