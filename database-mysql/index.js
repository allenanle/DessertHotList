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
    url: shopData.url
  }

  console.log(shopInfo);

  var sqlQuery = 'INSERT INTO dessertShops SET ?;';

  connection.query(sqlQuery, shopInfo, function(error, data) {
    if (error) {
      console.log('-----> SQL ERROR', error);
    } else {
      console.log('-----> DATA STORED!');
    }
  });
};

exports.get = function(callback) {
  var sqlQuery = 'BLAH';

  connection.query(sqlQuery, function(error, data) {
    if (error) {
      console.log('-----> SQL ERROR', error);
    } else {
      console.log('-----> DATA RETRIEVED!');
    }
  });
};