import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default Home;
