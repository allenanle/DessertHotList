var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'toEat'
});

exports.post = function(zipCodeSearch, shopData, callback) {
  var shopInfo = {
    zipCode: zipCodeSearch,
    name: shopData.name,
    rating: shopData.rating,
    reviewCount: shopData.review_count,

    // shorten the url
    url: shopData.url.slice(0, shopData.url.indexOf('?'))
  }

  var sqlQuery = 'INSERT INTO dessertShops SET ?;';

  connection.query(sqlQuery, shopInfo, function(error, success) {
    if (error) {
      callback(error);
      console.error('---> DUPLICATES');
    } else {
      callback(null, success);
      console.log('---> STORED IN DB!');
    }
  });
};

exports.get = function(zipCodeSearch, callback) {
  var sqlQuery = 'SELECT * FROM dessertShops WHERE zipCode = ?;';

  connection.query(sqlQuery, zipCodeSearch, function(error, data) {
    if (error) {
      console.error('---> `GET` ERROR');
    } else {
      callback(data);
      console.log('---> RETRIEVED FROM DB!');
    }
  });
};