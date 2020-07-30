import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import Home from './screens/Home';
import Menu from './screens/Menu';

const App = () => {
  const controlPositionY = new Animated.Value(0);
  const controlPositionX = new Animated.Value(0);
  const controlRotation = new Animated.Value(0);

  const showMenu = () => {
    Animated.parallel([
      Animated.timing(controlPositionY, {
        toValue: 150,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(controlPositionX, {
        toValue: 260,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(controlRotation, {
        toValue: -0.25,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const hideMenu = () => {
    Animated.parallel([
      Animated.timing(controlPositionY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(controlPositionX, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(controlRotation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <Menu hideMenu={hideMenu} />
      <Animated.View
        style={[
          styles.homeContainer,
          {
            transform: [
              {
                translateY: controlPositionY,
              },
              {
                translateX: controlPositionX,
              },
              {
                rotateZ: controlRotation,
              },
            ],
          },
        ]}>
        <Home showMenu={showMenu} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FF0000',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default App;
