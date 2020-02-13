import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './Navigation';

const { NavLink } = Navigation;

storiesOf('Organisms|Navigation', module)
  .add('basic', () => (
    <Navigation>
      <NavLink active icon="account" label="Link Name" to="" />
      <NavLink icon="account" label="Link Name" to="" />
      <NavLink icon="account" label="Link Name" to="" />
      <NavLink icon="account" label="Link Name" to="" />
    </Navigation>
  ))
  .add('expanded', () => (
    <Navigation expanded>
      <NavLink active icon="account" label="Link Name" to="" />
      <NavLink icon="account" label="Link Name" to="" />
      <NavLink icon="account" label="Link Name" to="" />
      <NavLink icon="account" label="Link Name" to="" />
    </Navigation>
  ));
