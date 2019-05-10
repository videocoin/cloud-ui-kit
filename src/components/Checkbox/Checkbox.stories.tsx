import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './Checkbox';

storiesOf('Atoms|Checkbox Selector', module).add('basic', () => (
  <Checkbox checked={false} onChange={action('change')}>
    'I agree to the Privacy Policy and Terms and Conditions'
  </Checkbox>
));
