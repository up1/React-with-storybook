import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Profile from '../Profile';

storiesOf('Profile', module)
  .add('Show hello profile', () => (
    <Profile name={'Hello'}/>
  ))
  .add('Show somkiat profile', () => (
    <Profile name={'Somkiat'}/>
  ));
