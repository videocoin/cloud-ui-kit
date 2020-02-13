import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import ActionBar from '../ActionBar/ActionBar';

const ModalStory = () => {
  return (
    <div style={{ width: 560 }}>
      <Modal
        header={() => (
          <Typography theme="white" type="subtitle">
            Popup title
          </Typography>
        )}
      >
        <div style={{ width: 430, textAlign: 'center' }}>
          <div style={{ marginBottom: 8 }}>
            <Typography theme="light" type="body">
              Some primary message for the popup goes here
            </Typography>
          </div>
          <Typography type="bodyThin">
            An additional longer bit of text with more detailed information can
            go here.
          </Typography>
          <div style={{ marginTop: 56 }}>
            <ActionBar>
              <Button theme="minimal">Cancel</Button>
              <Button>Button</Button>
            </ActionBar>
          </div>
        </div>
      </Modal>
    </div>
  );
};

storiesOf('Molecules|Dialog Modals', module).add('Darkening Popup', () => (
  <ModalStory />
));
