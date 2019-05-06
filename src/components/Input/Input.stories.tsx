import React, { FormEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

const InputStory = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      label="Form field"
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
    />
  );
};

storiesOf('Forms|Input', module)
  .add('basic', () => {
    return <InputStory />;
  })
  .add('disabled', () => {
    return (
      <Input label="Form field" value="" disabled onChange={() => false} />
    );
  })
  .add('error', () => {
    return (
      <Input
        label="Form field"
        value="Filled Text Here"
        error="error"
        onChange={() => false}
      />
    );
  });
