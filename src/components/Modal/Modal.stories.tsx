import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './Modal';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { ActionBar } from '../ActionBar/ActionBar';

const ModalStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        header={() => (
          <Typography theme="white" type="subtitle">
            Popup title
          </Typography>
        )}
      >
        <div style={{ width: 430, textAlign: 'center' }}>
          <div style={{ marginBottom: 8 }}>
            <Typography theme="light" type="bodyAlt">
              Some primary message for the popup goes here
            </Typography>
          </div>
          <Typography>
            An additional longer bit of text with more detailed information can
            go here.
          </Typography>
          <div style={{ marginTop: 56 }}>
            <ActionBar secondaryText="Cancel" primaryText="Button" />
          </div>
        </div>
      </Modal>
    </>
  );
};

storiesOf('Molecules|Dialog Modals', module).add('Darkening Popup', () => (
  <ModalStory />
));
