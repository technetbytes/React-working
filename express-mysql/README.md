Implement REST API service in Express that communicate with my-sql database

Use users.sql for database table.

Don't use **Connect** and **End** function of mysql library otherwise its won't work on second time resquest.

**Note:** If you’re serving web requests, then you shouldn’t be ending connections on every request. Just create a connection on server startup and use the connection/client object to query all the time. You can listen on the error event to handle server disconnection and for reconnecting purposes
