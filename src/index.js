import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var profileData = 'Clear thinking at the wrong moment';
var projectList = [
        {
          id: 1,
          name: 'Project 01',
          image: '/first.jpg'
        },
        {
          id: 2,
          name: 'Project 02',
          image: 'second.jpg'
        }
      ];

ReactDOM.render(
  <App profile={profileData} projectList={projectList} />,
  document.getElementById('root')
);
