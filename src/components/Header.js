import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MenuIcon from '../../assets/icons/menu.svg';

const Header = ({showMenu}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => showMenu()}>
        <MenuIcon />
      </TouchableOpacity>
      <Text style={styles.headerText}>My Drive</Text>
      <View style={styles.userCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#21205A',
    letterSpacing: -0.24,
  },
  userCircle: {
    width: 24,
    height: 24,
    backgroundColor: '#232323',
    borderRadius: 100,
  },
});

export default Header;
