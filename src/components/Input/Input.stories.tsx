import React, { FormEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import FieldAction from '../FieldAction/FieldAction';

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

storiesOf('Atoms|Input', module)
  .add('basic', () => {
    return <InputStory />;
  })
  .add('disabled', () => {
    return (
      <Input label="Form field" value="" disabled onChange={() => false} />
    );
  })
  .add('with action', () => {
    return (
      <div style={{ width: 400, marginTop: 100 }}>
        <Input
          label="Form field"
          value="Filled Text Here"
          error
          onChange={() => false}
          postfix={() => (
            <FieldAction color="pink" icon="warn">
              Password must be more than 8 characters and contain both numbers
              and letters
            </FieldAction>
          )}
        />
      </div>
    );
  });
