# React Native Revolver

A pure JavaScript component supporting revolving animation

https://github.com/blueish9/react-native-revolver/assets/31811643/9010ee72-3663-4700-a579-b4e12603f9cb

## Installation

```
npm install --save react-native-revolver
or
yarn add react-native-revolver
```

## Usage

```jsx
import Revolver from 'react-native-revolver';

const ExampleWithTexts = () => {
  return (
    <Revolver
      data={[
        'Is this the real life?',
        'Is this just fantasy?',
        'Caught in a landside, no escape from reality',
      ]}
    />
  )
}

const ExampleWithElements = () => {
  return (
    <Revolver
      data={[
        <View
          key={1}
          style={{
            width: 100,
            height: 15,
            backgroundColor: 'pink',
          }}
        />,
        <Text key={2}>Is this the real life? Is this just fantasy?</Text>,
        <Text key={3} style={{ color: 'green' }}>
          Caught in a landside, no escape from reality
        </Text>
      ]}
    />
  )
}
```

## Properties

Revolver component inherits [ViewProps](https://reactnative.dev/docs/view#props) and the followings are configurable:

| Prop      | Type                           | Required | Default | Description
|-----------|--------------------------------|----------|---------| -----------
| data      | `string[]` or `ReactElement[]` | true     |         | items to animate 
| direction | `up` or `down`                 | false    | `up`    | the direction of sliding animation
| delay     | number (ms)                    | false    | 3000    | delay between animations
| duration  | number (ms)                    | false    | 600     | duration of the sliding animation
| textProps | TextProps                      | false    |         | if items are string, this `textProps` will apply to all items

## Contribution

Do you have any idea or want to change something? Just open an issue. Contributions are always welcome.
