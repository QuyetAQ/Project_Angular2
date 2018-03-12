var express = require('express');
var bodyparser = require('body-parser');

// Init connect, fix permission
var connection = require('./mySQLConnection');
var cors=require('./crossPermission');
// Declare Routes
var router_checkreddem = require('./routes/routes_CheckReddem');
var router_merchant = require('./routes/routes_Merchant');
var router_product = require('./routes/routes_Product');
var router_reddem = require('./routes/routes_Reddem');
var router_userwallet = require('./routes/routes_UserWallet');

// Display json style
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// Using Routes
app.use(cors.permission);
app.use('/api/checkreddem',router_checkreddem);
app.use('/api/merchant',router_merchant);
app.use('/api/product',router_product);
app.use('/api/reddem',router_reddem);
app.use('/api/userwallet',router_userwallet);

// http://localhost:3000/
var server = app.listen(3000, function() {
  console.log('Server listening, open your brower on http://localhost:' + server.address().port);
});

module.exports = app;