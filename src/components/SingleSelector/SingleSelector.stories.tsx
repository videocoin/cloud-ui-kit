import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SingleSelector } from './SingleSelector';

storiesOf('Atoms|Single Selector', module)
  .add('unselected', () => (
    <SingleSelector
      selected={false}
      onClick={action('change')}
      label="Option1"
    />
  ))
  .add('selected', () => (
    <SingleSelector selected onClick={action('change')} label="Option1" />
  ));
