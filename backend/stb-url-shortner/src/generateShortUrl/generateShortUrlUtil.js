const createDBConnection = require("../dbConfig/dbCreateConnection");

const generateShortUrlUtil = {
  POST_processData: (req, res) => {
    if (req.body && req.body.url) {
      let url = generateShortUrlUtil.parseURL(req.body.url);

      let addressExistance =
        generateShortUrlUtil.fetchExistingDataUsingAddress(url);

      addressExistance.then((selectQueryRes) => {
        //console.log("selectQueryRes==>",selectQueryRes);

        if (selectQueryRes && selectQueryRes.length == 0) {
          const code = generateShortUrlUtil.randomString(7);

          let insert = generateShortUrlUtil.insertData(code, url);

          insert.then((insertQueryRes) => {
            //console.log("insertQueryRes==>",insertQueryRes);

            const shortUrl = "http://sho.rt/" + code;

            res.send({ url: shortUrl });
          });
        } else if (selectQueryRes.length > 0) {
          const shortUrl = "http://sho.rt/" + selectQueryRes[0].code;

          res.send({ url: shortUrl });
        }
      });
    } else {
      res.status(400);

      res.end();
    }
  },
  randomString: (length) => {
    var result = "";

    var chars = "123456789abcdefghijklmnopqrstuvwxyz";

    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];

    return result;
  },
  parseURL: (providedUrl) => {
    if (providedUrl.indexOf("http") > -1) {
      providedUrl = providedUrl.substr(providedUrl.indexOf("//") + 2);
    }

    if (providedUrl[providedUrl.length - 1] == "/") {
      providedUrl = providedUrl.substr(0, providedUrl.length - 1);
    }

    return providedUrl;
  },
  fetchExistingDataUsingAddress: (url) => {
    const connPool = createDBConnection.getConnection();

    return new Promise((resolve, reject) => {
      connPool.query(
        "SELECT * from url_details where address='" + url + "'",

        function (error, results, fields) {
          if (error) {
            return reject(error);
          }

          return resolve(results);
        },
      );
    });
  },
  insertData: (code, address) => {
    const connPool = createDBConnection.getConnection();

    return new Promise((resolve, reject) => {
      connPool.query(
        "INSERT INTO url_details (code, address) VALUES ('" +
          code +
          "', '" +
          address +
          "')",
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

module.exports = generateShortUrlUtil;
