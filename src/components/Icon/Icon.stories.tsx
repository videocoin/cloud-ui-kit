import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './Icon';

storiesOf('Atoms|Icons', module)
  .add('Account', () => <Icon name="account" />)
  .add('Add', () => <Icon name="add" />)
  .add('Archive', () => <Icon name="archive" />)
  .add('ArrowDown', () => <Icon name="arrowDown" />)
  .add('ArrowUp', () => <Icon name="arrowUp" />)
  .add('Copy', () => <Icon name="copy" />)
  .add('Delete', () => <Icon name="delete" />)
  .add('Incomplete', () => <Icon name="incomplete" />)
  .add('Livestream Manager', () => <Icon name="livestreamManager" />)
  .add('Network Visualizer', () => <Icon name="networkVisualizer" />)
  .add('Remove', () => <Icon name="remove" />)
  .add('VideoCoin Wallet', () => <Icon name="videoCoinWallet" />);
