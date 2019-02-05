Step-by-Step implement REST API service in **Express** that communicate with **my-sql** database.

Use users.sql for database table.

Using following Code to setup folder sturuture

**$ mkdir express-mysql**

**$ cd express-mysql**

**$ touch server.js**

**$ npm init**<br />*Its will create package.json file*

Now insert express code in the server.js file, open server.js file in nano editor from your terminal.

**$ nano server.js**
  
```javascript
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
```
save and exit from nano. Now this is a time to test your REST API.

**$ node server.js**<br />*Listening on port 5000*

Don't use **Connect** and **End** function of mysql library otherwise its won't work on second time resquest.

**Note:** If you’re serving web requests, then you shouldn’t be ending connections on every request. Just create a connection on server startup and use the connection/client object to query all the time. You can listen on the error event to handle server disconnection and for reconnecting purposes
