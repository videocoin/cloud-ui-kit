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
      <div id="modal-root" />
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        header="Popup title"
      >
        <Typography theme="light" type="bodyAlt">
          Modal body
        </Typography>
      </Modal>
    </>
  );
};

storiesOf('Components|Modal', module).add('basic', () => <ModalStory />);
