import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import FolderBlue from '../../assets/images/folder-blue.png';
import FolderGreen from '../../assets/images/folder-green.png';
import FolderYellow from '../../assets/images/folder-yellow.png';
import FolderRed from '../../assets/images/folder-red.png';
import OptionFolder from '../../assets/icons/option-folder.svg';

const FolderCard = ({
  title,
  subtitle,
  backgroundColor,
  titleColor,
  subtitleColor,
  folderColor,
}) => {
  const getFolderByColor = (color) => {
    if (color === 'blue') {
      return FolderBlue;
    } else if (color === 'green') {
      return FolderGreen;
    } else if (color === 'yellow') {
      return FolderYellow;
    } else if (color === 'red') {
      return FolderRed;
    }
  };

  return (
    <TouchableOpacity style={styles.folderCard}>
      <View style={[styles.folderCardBody, {backgroundColor: backgroundColor}]}>
        <View style={styles.icons}>
          <Image source={getFolderByColor(folderColor)} />
          <OptionFolder fill={titleColor} />
        </View>
        <Text style={[styles.folderCardBodyTitle, {color: titleColor}]}>
          {title}
        </Text>
        <Text style={[styles.folderCardBodySubtitle, {color: subtitleColor}]}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  folderCard: {
    width: '50%',
    padding: 8,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  folderCardBody: {
    borderRadius: 16,
    padding: 16,
  },
  folderCardBodyTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.24,
  },
  folderCardBodySubtitle: {
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.24,
  },
});

export default FolderCard;
