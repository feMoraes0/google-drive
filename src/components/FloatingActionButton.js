import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const FloatingActionButton = ({children}) => {
  return (
    <TouchableOpacity style={styles.floatingActionButton}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingActionButton: {
    backgroundColor: '#4378DB',
    width: 64,
    height: 64,
    shadowColor: '#4378DB',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 21,
    right: 21,
  },
});

export default FloatingActionButton;
