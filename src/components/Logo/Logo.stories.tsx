import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from './Logo';

storiesOf('Foundations|Company Logos', module)
  .add('color white', () => (
    <div>
      <Logo type="colorWhite" width={170} />
      <br />
      <Logo type="colorWhite" short width={50} />
    </div>
  ))
  .add('white', () => (
    <div>
      <Logo type="white" width={170} />
      <br />
      <Logo type="white" short width={50} />
    </div>
  ))
  .add(
    'color black',
    () => (
      <div>
        <Logo type="colorBlack" width={170} />
        <br />
        <Logo type="colorBlack" short width={50} />
      </div>
    ),
    {
      backgrounds: [
        {
          name: 'white',
          value: 'white',
          default: true,
        },
      ],
    },
  )
  .add(
    'black',
    () => (
      <div>
        <Logo type="black" width={170} />
        <br />
        <Logo type="black" short width={50} />
      </div>
    ),
    {
      backgrounds: [
        {
          name: 'white',
          value: 'white',
          default: true,
        },
      ],
    },
  );
