import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Atoms|Buttons', module)
  .add('basic', () => (
    <div>
      <Button theme="primary" onClick={action('clicked')}>
        Primary
      </Button>
      <Button theme="secondary" onClick={action('clicked')}>
        Secondary
      </Button>
      <Button theme="white" onClick={action('clicked')}>
        White
      </Button>
      <Button theme="ghost-primary" onClick={action('clicked')}>
        Ghost primary
      </Button>
      <Button theme="ghost-secondary" onClick={action('clicked')}>
        Ghost secondary
      </Button>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Button disabled theme="primary" onClick={action('clicked')}>
        Primary
      </Button>
      <Button disabled theme="secondary" onClick={action('clicked')}>
        Secondary
      </Button>
      <Button disabled theme="white" onClick={action('clicked')}>
        White
      </Button>
    </div>
  ))
  .add('block', () => (
    <div>
      <Button isBlock theme="primary" onClick={action('clicked')}>
        Primary
      </Button>
      <div style={{ marginBottom: 20 }} />
      <Button isBlock theme="secondary" onClick={action('clicked')}>
        Secondary
      </Button>
      <div style={{ marginBottom: 20 }} />
      <Button isBlock theme="white" onClick={action('clicked')}>
        White
      </Button>
    </div>
  ));
