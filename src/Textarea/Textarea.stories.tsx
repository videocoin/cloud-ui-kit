import React, { FormEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';
import FieldAction from '../FieldAction/FieldAction';

const TextareaStory = () => {
  const [value, setValue] = useState('123231');
  return (
    <Textarea
      label="Form field"
      value={value}
      onChange={(e: FormEvent<HTMLTextAreaElement>) =>
        setValue(e.currentTarget.value)
      }
    />
  );
};

storiesOf('Atoms|Textarea', module)
  .add('basic', () => {
    return <TextareaStory />;
  })
  .add('disabled', () => {
    return (
      <Textarea label="Form field" value="" disabled onChange={() => false} />
    );
  })
  .add('with action', () => {
    return (
      <div style={{ width: 400, marginTop: 100 }}>
        <Textarea
          label="Form field"
          value="Filled Text Here"
          error
          onChange={() => false}
          postfix={() => (
            <FieldAction color="pink" icon="incomplete">
              Password must be more than 8 characters and contain both numbers
              and letters
            </FieldAction>
          )}
        />
      </div>
    );
  });
