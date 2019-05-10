import React from 'react';
import { storiesOf } from '@storybook/react';
import { ActionBar } from './ActionBar';
import { Button } from '../Button/Button';

storiesOf('Molecules|Action Bars', module).add('basic', () => (
  <ActionBar>
    <Button theme="minimal">Cancel</Button>
    <Button theme="sunkissed">Send</Button>
  </ActionBar>
));
