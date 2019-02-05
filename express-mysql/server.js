const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ReactDB'
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


// https://expressjs.com/en/guide/routing.html
app.get('/get', function (req, res) {
    //connection.connect();

    connection.query('SELECT * FROM users LIMIT 0, 10', function (error, results, fields) {
      if (error) { res.send(error.message);}
      res.send(results)
    });

    //connection.end();
});

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});