import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import MainCard from '../components/MainCard';
import FloatingActionButton from '../components/FloatingActionButton';
import Add from '../../assets/icons/add.svg';
import Folders from '../components/Folders';

const Home = ({showMenu}) => {
  return (
    <View style={styles.container}>
      <FloatingActionButton>
        <Add />
      </FloatingActionButton>
      <Header showMenu={showMenu} />
      <SearchInput />
      <MainCard />
      <Folders />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F5F8',
    paddingTop: 50,
  },
});

export default Home;
