import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroup } from './Radio';

const { RadioBtn } = RadioGroup;

storiesOf('Atoms|Radio', module)
  .add('vertical', () => (
    <RadioGroup name="radio" onChange={action('change')}>
      <RadioBtn value="fruits">Fruits</RadioBtn>
      <RadioBtn value="vegetables">Vegetables</RadioBtn>
    </RadioGroup>
  ))
  .add('horizontal', () => (
    <RadioGroup direction="horizontal" name="radio" onChange={action('change')}>
      <RadioBtn value="fruits">Fruits</RadioBtn>
      <RadioBtn value="vegetables">Vegetables</RadioBtn>
    </RadioGroup>
  ));
