## Step-by-Step Express + React.js + Heroku Server

In this demo application we generate random password using npm package called password-generator
(Express and React js) and deploy the application on Heroku Server.

## Setup and Coding

On your favorite terminal and type following commands

**$ mkdir pass-gen**

**$ cd pass-gen**

**$ touch server.js**

**$ npm init**<br />*Its will create package.json file*

Now insert express code in the server.js file, open server.js file in nano editor from your terminal.

**$ nano server.js**
take code from server.js file from this repository [server.js](https://github.com/technetbytes/React-working/blob/master/pass-gen/server.js)

**Note:** On line 7 in server.js file, we are adding static file in express server in this case this is our ***client/build***

Now its a time to create React client using following command.

**$ create-react-app client -y**

Open package.json file from client folder and proxy detail

"proxy": "http://localhost:5000"

Now update App.js and App.css file under /src folder
* [App.js](https://github.com/technetbytes/React-working/blob/master/pass-gen/client/src/App.js)
* [App.css](https://github.com/technetbytes/React-working/blob/master/pass-gen/client/src/App.css)

When we are deploy application on Heroku server, we have to notify them about React client/build using ***heroku-postbuild*** script.

Open **Express package.json** file
```javascript
"scripts": {
  "start": "node server.js",
  "heroku-postbuild": "cd client && npm install && npm run build"
}
```
## Deployment

[Sign-Up](heroku.com) on Heroku. Cloud platform as a service(PaaS) supporting several programming languages.

Create Free Application on Heroku and download **Heroku CLI**. [Install steps](https://devcenter.heroku.com/articles/heroku-command-line)

* $ **heroku login**
* $ **git init**
* $ **echo node_modules > .gitignore**
  * all modules will be ignore
* $ **git add .**
* $ **git commit -m "First commit on random password generator"**
* $ **git push heroku master**

## Result
[Demo](https://pass-5.herokuapp.com/)



