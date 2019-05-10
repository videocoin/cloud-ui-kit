import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

storiesOf('Atoms|Icons', module)
  .add('warn', () => <Icon name="warn" />)
  .add('close', () => <Icon name="close" />);
