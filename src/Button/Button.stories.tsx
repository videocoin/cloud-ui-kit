import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import IconButton from '../IconButton/IconButton';
import MarketingButton from '../MarketingButton/MarketingButton';

storiesOf('Atoms|Buttons', module)
  .add('basic', () => (
    <div>
      <Button theme="sunkissed" onClick={action('clicked')}>
        Sunkissed
      </Button>
      <Button theme="violet-sky" onClick={action('clicked')}>
        Violet Sky
      </Button>
      <Button theme="perfect-white" onClick={action('clicked')}>
        Perfect White
      </Button>
      <Button theme="minimal" onClick={action('clicked')}>
        minimal
      </Button>
      <Button theme="minimal-sunkissed" onClick={action('clicked')}>
        Minimal Sunkissed
      </Button>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Button disabled theme="sunkissed" onClick={action('clicked')}>
        Sunkissed
      </Button>
      <Button disabled theme="violet-sky" onClick={action('clicked')}>
        Violet Sky
      </Button>
      <Button disabled theme="perfect-white" onClick={action('clicked')}>
        Perfect White
      </Button>
      <Button disabled theme="minimal" onClick={action('clicked')}>
        minimal
      </Button>
      <Button disabled theme="minimal-sunkissed" onClick={action('clicked')}>
        Minimal Sunkissed
      </Button>
    </div>
  ))
  .add('loading', () => (
    <Button loading theme="sunkissed" onClick={action('clicked')}>
      Primary
    </Button>
  ))
  .add('with icon', () => (
    <div>
      <IconButton
        icon="incomplete"
        theme="sunkissed"
        onClick={action('clicked')}
      >
        Sunkissed
      </IconButton>
      <IconButton
        icon="incomplete"
        theme="violet-sky"
        onClick={action('clicked')}
      >
        Violet Sky
      </IconButton>
      <IconButton
        icon="incomplete"
        theme="perfect-white"
        onClick={action('clicked')}
      >
        Perfect White
      </IconButton>
      <IconButton icon="incomplete" theme="minimal" onClick={action('clicked')}>
        Minimal
      </IconButton>
      <IconButton
        icon="incomplete"
        theme="minimal-sunkissed"
        onClick={action('clicked')}
      >
        Minimal Sunkissed
      </IconButton>
    </div>
  ))
  .add('with icon disabled', () => (
    <div>
      <IconButton
        disabled
        icon="incomplete"
        theme="sunkissed"
        onClick={action('clicked')}
      >
        Sunkissed
      </IconButton>
      <IconButton
        disabled
        icon="incomplete"
        theme="violet-sky"
        onClick={action('clicked')}
      >
        Violet Sky
      </IconButton>
      <IconButton
        disabled
        icon="incomplete"
        theme="perfect-white"
        onClick={action('clicked')}
      >
        Perfect White
      </IconButton>
      <IconButton
        disabled
        icon="incomplete"
        theme="minimal"
        onClick={action('clicked')}
      >
        Minimal
      </IconButton>
      <IconButton
        disabled
        icon="incomplete"
        theme="minimal-sunkissed"
        onClick={action('clicked')}
      >
        Minimal Sunkissed
      </IconButton>
    </div>
  ))
  .add('Marketing', () => (
    <div>
      <MarketingButton
        theme="primary"
        href="http://www.google.com"
        onClick={action('clicked')}
      >
        Primary CTA
      </MarketingButton>
      <MarketingButton theme="secondary" onClick={action('clicked')}>
        Secondary CTA
      </MarketingButton>
      <MarketingButton theme="link" onClick={action('clicked')}>
        Link
      </MarketingButton>
      <MarketingButton theme="link-white" onClick={action('clicked')}>
        Link
      </MarketingButton>
    </div>
  ));
