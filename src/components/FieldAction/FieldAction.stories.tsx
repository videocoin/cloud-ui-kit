import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldAction } from './FieldAction';

storiesOf('Atoms|Field Actions', module)
  .add('Sunkissed Orange', () => (
    <FieldAction color="orange" icon="placeholderXs" />
  ))
  .add('Violet Violet', () => (
    <FieldAction color="violet" icon="placeholderXs" />
  ))
  .add('Impossibly Pink', () => (
    <FieldAction color="pink" icon="placeholderXs" />
  ))
  .add('Minty Green', () => <FieldAction color="green" icon="placeholderXs" />)
  .add('Grey Dawn', () => <FieldAction color="grey" icon="placeholderXs" />)
  .add('Perfect White', () => (
    <FieldAction color="white" icon="placeholderXs" />
  ));
