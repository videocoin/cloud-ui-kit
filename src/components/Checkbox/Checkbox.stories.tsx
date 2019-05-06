import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

storiesOf('Forms|Checkbox', module).add('basic', () => (
  <Checkbox defaultChecked={false} onChange={action('change')}>
    'I agree to the Privacy Policy and Terms and Conditions'
  </Checkbox>
));
