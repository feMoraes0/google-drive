import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoogleDrive from '../../assets/icons/google-drive.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';

const MainCard = () => {
  return (
    <View style={styles.mainCard}>
      <View style={styles.cardBody}>
        <View style={styles.buttonDetails}>
          <ArrowRight />
        </View>
        <View style={styles.cardBodyIcon}>
          <GoogleDrive />
        </View>
        <View>
          <Text style={styles.cardBodyTitle}>Free Storage</Text>
          <Text style={styles.cardBodySubtitle}>7,5 Gb / 15 Gb</Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressDone} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    position: 'relative',
    backgroundColor: '#4378DB',
    borderRadius: 26,
    marginTop: 25,
    marginHorizontal: 15,
    padding: 32,
  },
  buttonDetails: {
    position: 'absolute',
    right: -32,
    top: -32,
    padding: 15,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    backgroundColor: '#405DB5',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBodyIcon: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 16,
    marginRight: 19,
  },
  cardBodyTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.24,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardBodySubtitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
  progressBar: {
    marginTop: 17,
    backgroundColor: '#405DB5',
    height: 8,
    borderRadius: 20,
  },
  progressDone: {
    position: 'relative',
    height: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    width: '50%',
  },
});

export default MainCard;
