import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

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
        <div style={{ width: 430 }}>
          <Typography theme="light" type="bodyAlt">
            Modal body
          </Typography>
        </div>
      </Modal>
    </>
  );
};

storiesOf('Molecules|Modal', module).add('basic', () => <ModalStory />);
