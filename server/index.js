var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var database = require('../database-mysql');
// var items = require('../database-mongo');

var request = require('request');

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.post('/hitlist/search', function(req, res) {
  // console.log('-----> REQ', req)
  var zipCodeSearch = req.body.zipcode;
  console.log('-----> ZIPCODE', zipCodeSearch);

  var yelpRequest = {
    url: 'https://api.yelp.com/v3/businesses/search?categories=desserts,bakeries&sort_by=review_count&limit=5&location=' + zipCodeSearch,
    method: 'GET',
    json: true,
    headers: {
      authorization: 'Bearer rq8_N38VNAGT5kiZU6nfuETDw2fhd_Plo4x27mPPrTKNdzxWkRxu1d3flc4_WfqbvYedanJUH5XyfovG3ZimMoL19TSLdxXdqS-vm3t1uSJbny1owcfUSuiQCFTDWHYx'
    }
  };

  // send GET request to github
  request(yelpRequest, function(error, response, body) {
    if (error) {
      console.error('-----> YELP ERROR', error);
    } else {
      // pass data to models to store into database
      body.businesses.forEach(function(shopObj) {
        console.log('-----> SHOP\'S NAME', shopObj.name);

        database.post(zipCodeSearch, shopObj, function(error, success) {
          if (error) {
            res.status(409).send();
          } else if (success) {
            res.status(201).send();
          }
        });
      })
    }
  });
});

app.get('/hitlist', function (req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

