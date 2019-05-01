#### Vertical

```jsx
import RadioBtn from './RadioBtn';
import RadioGroup from './Radio';
<>
  <RadioGroup name="radio" onChange={() => false}>
    <RadioBtn value="fruits">Fruits</RadioBtn>
    <RadioBtn value="vegetables">Vegetables</RadioBtn>
  </RadioGroup>
</>;
```

#### Horizontal

```jsx
import RadioBtn from './RadioBtn';
import RadioGroup from './Radio';
<RadioGroup direction="horizontal" name="radio2" onChange={() => false}>
  <RadioBtn value="fruits">Fruits</RadioBtn>
  <RadioBtn value="vegetables">Vegetables</RadioBtn>
</RadioGroup>;
```
