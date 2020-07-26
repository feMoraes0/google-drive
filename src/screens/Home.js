import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import MainCard from '../components/MainCard';
import FloatingActionButton from '../components/FloatingActionButton';
import Add from '../../assets/icons/add.svg';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingActionButton>
        <Add />
      </FloatingActionButton>
      <Header />
      <SearchInput />
      <MainCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default Home;
