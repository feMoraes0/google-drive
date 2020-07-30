import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import MainCard from '../components/MainCard';
import FloatingActionButton from '../components/FloatingActionButton';
import Add from '../../assets/icons/add.svg';
import Folders from '../components/Folders';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FloatingActionButton>
          <Add />
        </FloatingActionButton>
        <Header />
        <SearchInput />
        <MainCard />
      </SafeAreaView>
      <Folders />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Home;
