import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from '../App';
import Profile from '../Profile';
import ProjectItem from '../ProjectItem';
import Projects from '../Projects';

var projectList = [
      {
        id: 1,
        name: 'Project 01',
        image: 'first.jpg'
      },
      {
        id: 2,
        name: 'Project 02',
        image: 'second.jpg'
      }
    ];

storiesOf('Profile', module)
  .add('Show hello profile', () => (
    <Profile name={'Hello'}/>
  ));

storiesOf('ProjectItem', module)
  .add('Show first project', () => (
    <ProjectItem key={projectList[0].id} data={projectList[0]}/>
  ))
  .add('Show second project', () => (
    <ProjectItem key={projectList[1].id} data={projectList[1]}/>
  ));

storiesOf('Projects', module)
  .add('Show 2 projects', () => (
    <Projects projectList={projectList} />
  ));


storiesOf('App', module)
  .add('Show profile and list of project', () => (
    <App profile={'Hello'} projectList={projectList}/>
  ));
