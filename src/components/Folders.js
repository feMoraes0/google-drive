import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import OptionMenu from '../../assets/icons/option-menu.svg';
import FolderCard from './FolderCard';

const Folders = () => {
  const folders = [
    {
      title: 'Web Design',
      date: '20 Dec 2020',
      titleColor: '#405DB5',
      subtitleColor: '#4378DB',
      backgroundColor: 'rgba(67, 120, 219, 0.16)',
      folderColor: 'blue',
    },
    {
      title: 'App Design',
      date: '21 Dec 2020',
      titleColor: '#F0A714',
      subtitleColor: '#FDCD55',
      backgroundColor: 'rgba(240, 167, 20, 0.16)',
      folderColor: 'yellow',
    },
    {
      title: 'Font Collections',
      date: '22 Dec 2020',
      titleColor: '#AB3F3F',
      subtitleColor: '#F35555',
      backgroundColor: 'rgba(243, 85, 85, 0.16)',
      folderColor: 'red',
    },
    {
      title: 'Illustrations',
      date: '23 Dec 2020',
      titleColor: '#228955',
      subtitleColor: '#28A164',
      backgroundColor: 'rgba(40, 161, 100, 0.16)',
      folderColor: 'green',
    },
    {
      title: 'Pattern',
      date: '24 Dec 2020',
      titleColor: '#405DB5',
      subtitleColor: '#4378DB',
      backgroundColor: 'rgba(67, 120, 219, 0.16)',
      folderColor: 'blue',
    },
    {
      title: 'My Portfolio',
      date: '24 Dec 2020',
      titleColor: '#F0A714',
      subtitleColor: '#FDCD55',
      backgroundColor: 'rgba(240, 167, 20, 0.16)',
      folderColor: 'yellow',
    },
  ];

  return (
    <ScrollView style={styles.bottomSection}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Folders</Text>
        <OptionMenu />
      </View>
      <View style={styles.body}>
        {folders.map((item) => {
          return (
            <FolderCard
              title={item.title}
              subtitle={item.date}
              backgroundColor={item.backgroundColor}
              titleColor={item.titleColor}
              subtitleColor={item.subtitleColor}
              folderColor={item.folderColor}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    marginTop: 32,
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 26,
    paddingHorizontal: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginHorizontal: 8,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: -0.24,
    color: '#21205A',
  },
  body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Folders;
