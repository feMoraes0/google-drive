import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import MainCard from '../components/MainCard';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <SearchInput />
      <MainCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
