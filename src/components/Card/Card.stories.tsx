import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../Typography/Typography';

storiesOf('Atoms|Card', module).add('basic', () => (
  <Card>
    <div style={{ padding: 40 }}>
      <Typography>Card body</Typography>
    </div>
  </Card>
));
