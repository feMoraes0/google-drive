import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';

const SearchInput = () => {
  return (
    <View style={styles.inputBox}>
      <SearchIcon />
      <TextInput
        style={styles.textInput}
        placeholder="Search Files"
        placeholderTextColor="#7C809E"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 15,
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.24,
  },
});

export default SearchInput;
