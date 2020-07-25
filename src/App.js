import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <View style={styles.body}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#F2F5F8',
  },
});

export default App;
