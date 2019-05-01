#### Basic

```jsx
initialState = { input: '' };
<Input
  value={state.input}
  onChange={e => setState({ input: e.target.value })}
  label="Field Label"
/>;
```

#### Disabled

```jsx
<Input disabled label="Field Label" />
```

#### Error

```jsx
<Input error="error" value="Filled Text Here" label="Field Label" />
```
