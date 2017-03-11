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

  console.log(shopInfo);

  var sqlQuery = 'INSERT INTO dessertShops SET ?;';

  connection.query(sqlQuery, shopInfo, function(error, data) {
    if (error) {
      console.error('-----> SQL ERROR', error);
    } else {
      console.log('-----> SHOP INFO STORED!');
    }
  });
};

exports.get = function(callback) {
  var sqlQuery = 'SELECT * FROM dessertShops';

  connection.query(sqlQuery, function(error, data) {
    if (error) {
      console.error('-----> SQL ERROR', error);
    } else {
      console.log(data);
      console.log('-----> SHOP INFO RETRIEVED!');
      callback(data);
    }
  });
};