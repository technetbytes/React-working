import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const stories = [
    {
      title: 'Express with Mysql',
      url: 'https://github.com/technetbytes/React-working/tree/master/express-mysql',
      author: 'Saqib Ullah Siddique',
      num_comments: 0,
      points: 10,
      objectID: 0,
    }, {
      title: 'Express with React',
      url: 'https://github.com/technetbytes/React-working/tree/master/express-react-test',
      author: 'Saqib Ullah Siddique',
      num_comments: 0,
      points: 15,
      objectID: 1,
    },
  ];

ReactDOM.render(<App stories={stories}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
