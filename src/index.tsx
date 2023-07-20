import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { Animated, Text, TextProps, ViewProps } from 'react-native';

interface Props extends ViewProps {
  data: string[] | ReactElement[];

  /**
   * config the slide animation direction
   */
  direction?: 'up' | 'down';

  /**
   * delay between animations
   */
  delay?: number;

  /**
   * duration of an animation
   */
  duration?: number;

  /**
   * if data is an array of strings, it will use this textProps
   */
  textProps?: TextProps;
}

const Revolver = ({
  data,
  style,
  direction = 'up',
  delay = 3000,
  duration = 600,
  textProps,
  ...props
}: Props) => {
  const [index, setIndex] = useState(0);
  const animationValue = useAnimation(delay, duration, () => {
    // this setState will trigger useAnimation
    setIndex((prevCount) => (prevCount + 1 < data.length ? prevCount + 1 : 0));
  });

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: animationValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0],
          }),
          transform: [
            {
              translateY: animationValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: direction === 'up' ? [10, 0, -10] : [-10, 0, 10],
              }),
            },
          ],
        },
      ]}
      {...props}
    >
      {typeof data?.[0] === 'string' ? <Text {...textProps}>{data[index]}</Text> : data[index]}
    </Animated.View>
  );
};

const useAnimation = (delay, duration, callback) => {
  let didMount = true;
  const animationValue = useRef(new Animated.Value(0)).current;

  const fadeInOut = () => {
    Animated.sequence([
      Animated.timing(animationValue, {
        duration,
        toValue: 0.5,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        delay,
        duration,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (didMount) {
        animationValue.setValue(0);
        callback();
        fadeInOut();
      }
    });
  };

  useEffect(() => {
    fadeInOut();
    return () => {
      animationValue.stopAnimation();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      didMount = false;
    };
  }, []);
  return animationValue;
};

export default React.memo(Revolver);
