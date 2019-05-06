import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography';

storiesOf('Interface|Typography', module)
  .add('light', () => (
    <div>
      <Typography type="display1">Display 1</Typography>
      <Typography type="display2">Display 2</Typography>
      <Typography type="display3">Display 3</Typography>
      <div style={{ height: 20 }} />
      <Typography type="title">Title</Typography>
      <Typography type="smallTitle">Small Title</Typography>
      <Typography type="subtitle">Subtitle</Typography>
      <Typography type="subtitleAlt">Subtitle Alt</Typography>
      <div style={{ height: 20 }} />
      <Typography type="body">Body</Typography>
      <Typography type="bodyAlt">Body Alt</Typography>
      <Typography type="smallBody">Small Body</Typography>
      <Typography type="smallBodyAlt">Small Body Alt</Typography>
      <Typography type="caption">Caption</Typography>
      <div style={{ height: 20 }} />
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
        <Typography type="subtitleAlt" theme="dark">
          Subtitle Alt
        </Typography>
        <div style={{ height: 20 }} />
        <Typography type="body" theme="dark">
          Body
        </Typography>
        <Typography type="bodyAlt" theme="dark">
          Body Alt
        </Typography>
        <Typography type="smallBody" theme="dark">
          Small Body
        </Typography>
        <Typography type="smallBodyAlt" theme="dark">
          Small Body Alt
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
      <Typography type="subtitleAlt" theme="white">
        Subtitle Alt
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="body" theme="white">
        Body
      </Typography>
      <Typography type="bodyAlt" theme="white">
        Body Alt
      </Typography>
      <Typography type="smallBody" theme="white">
        Small Body
      </Typography>
      <Typography type="smallBodyAlt" theme="white">
        Small Body Alt
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
  .add('primary', () => (
    <div>
      <Typography type="display1" theme="primary">
        Display 1
      </Typography>
      <Typography type="display2" theme="primary">
        Display 2
      </Typography>
      <Typography type="display3" theme="primary">
        Display 3
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="title" theme="primary">
        Title
      </Typography>
      <Typography type="smallTitle" theme="primary">
        Small Title
      </Typography>
      <Typography type="subtitle" theme="primary">
        Subtitle
      </Typography>
      <Typography type="subtitleAlt" theme="primary">
        Subtitle Alt
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="body" theme="primary">
        Body
      </Typography>
      <Typography type="bodyAlt" theme="primary">
        Body Alt
      </Typography>
      <Typography type="smallBody" theme="primary">
        Small Body
      </Typography>
      <Typography type="smallBodyAlt" theme="primary">
        Small Body Alt
      </Typography>
      <Typography type="caption" theme="primary">
        Caption
      </Typography>
      <div style={{ height: 20 }} />
      <Typography type="button" theme="primary">
        Button
      </Typography>
    </div>
  ));
