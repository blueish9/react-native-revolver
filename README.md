# React Native Revolver

A pure JavaScript component supporting revolving animation

https://user-images.githubusercontent.com/31811643/254834371-d6d7a603-b9c0-4434-bb79-c3a9d421bb78.mov

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
