import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import logo from './logo.svg';

const theme = create({
  base: 'dark',
  brandTitle: 'VideoCoin UI',
  brandUrl: 'https://videocoin.io',
  brandImage: logo,
  fontBase: '"Rubik", sans-serif',

});

addParameters({
  options: {
    theme,
  },
  backgrounds: [
    { name: 'basic', value: '#0C0417', default: true },
  ],
});

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
