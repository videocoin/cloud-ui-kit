import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from './Typography';

storiesOf('Foundations|Typography', module)
  .add('light', () => (
    <div>
      <Typography type="display1">Display 1</Typography>
      <Typography type="display2">Display 2</Typography>
      <Typography type="display3">Display 3</Typography>
      <Typography type="display4">Display 4</Typography>
      <div style={{ height: 20 }} />
      <Typography type="title">Title</Typography>
      <Typography type="smallTitle">Small Title</Typography>
      <Typography type="subtitleCaps">Subtitle Caps</Typography>
      <Typography type="subtitle">Subtitle Regular</Typography>
      <Typography type="subtitleThin">Subtitle Thin</Typography>
      <Typography type="body">Body Regular</Typography>
      <Typography type="bodyThin">Body Thin</Typography>
      <Typography type="smallBody">Small Body Regular</Typography>
      <Typography type="smallBodyThin">Small Body Thin</Typography>
      <Typography type="caption">Caption</Typography>
      <Typography type="tiny">Tiny</Typography>
      <Typography type="button">Button</Typography>
    </div>
  ))
  .add(
    'dark',
    () => (
      <div>
        <Typography type="display1" theme="dark">
          Display 1
        </Typography>
        <Typography type="display2" theme="dark">
          Display 2
        </Typography>
        <Typography type="display3" theme="dark">
          Display 3
        </Typography>
        <Typography type="display4" theme="dark">
          Display 4
        </Typography>
        <div style={{ height: 20 }} />
        <Typography type="title" theme="dark">
          Title
        </Typography>
        <Typography type="smallTitle" theme="dark">
          Small Title
        </Typography>
        <Typography type="subtitle" theme="dark">
          Subtitle
        </Typography>
        <Typography type="subtitleCaps" theme="dark">
          Subtitle Caps
        </Typography>
        <div style={{ height: 20 }} />
        <Typography type="body" theme="dark">
          Body Regular
        </Typography>
        <Typography type="bodyThin" theme="dark">
          Body Thin
        </Typography>
        <Typography type="smallBody" theme="dark">
          Small Body
        </Typography>
        <Typography type="smallBodyThin" theme="dark">
          Small Body Thin
        </Typography>
        <Typography type="caption" theme="dark">
          Caption
        </Typography>
        <div style={{ height: 20 }} />
        <Typography type="button" theme="dark">
          Button
        </Typography>
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
  .add('white', () => (
    <div>
      <Typography type="display1" theme="white">
        Display 1
      </Typography>
      <Typography type="display2" theme="white">
        Display 2
      </Typography>
      <Typography type="display3" theme="white">
        Display 3
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="title" theme="white">
        Title
      </Typography>
      <Typography type="smallTitle" theme="white">
        Small Title
      </Typography>
      <Typography type="subtitle" theme="white">
        Subtitle
      </Typography>
      <Typography type="subtitleCaps" theme="white">
        Subtitle Caps
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="body" theme="white">
        Body
      </Typography>
      <Typography type="bodyThin" theme="white">
        Body Thin
      </Typography>
      <Typography type="smallBody" theme="white">
        Small Body
      </Typography>
      <Typography type="smallBodyThin" theme="white">
        Small Body Thin
      </Typography>
      <Typography type="caption" theme="white">
        Caption
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="button" theme="white">
        Button
      </Typography>
    </div>
  ))
  .add('sunkissed', () => (
    <div>
      <Typography type="display1" theme="sunkissed">
        Display 1
      </Typography>
      <Typography type="display2" theme="sunkissed">
        Display 2
      </Typography>
      <Typography type="display3" theme="sunkissed">
        Display 3
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="title" theme="sunkissed">
        Title
      </Typography>
      <Typography type="smallTitle" theme="sunkissed">
        Small Title
      </Typography>
      <Typography type="subtitle" theme="sunkissed">
        Subtitle
      </Typography>
      <Typography type="subtitleCaps" theme="sunkissed">
        Subtitle Caps
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="body" theme="sunkissed">
        Body
      </Typography>
      <Typography type="bodyThin" theme="sunkissed">
        Body Alt
      </Typography>
      <Typography type="smallBody" theme="sunkissed">
        Small Body
      </Typography>
      <Typography type="smallBodyThin" theme="sunkissed">
        Small Body Alt
      </Typography>
      <Typography type="caption" theme="sunkissed">
        Caption
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="button" theme="sunkissed">
        Button
      </Typography>
    </div>
  ));
