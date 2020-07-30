import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Close from '../../assets/icons/menu/close.svg';
import Recent from '../../assets/icons/menu/recent.svg';
import Favourite from '../../assets/icons/menu/favourite.svg';
import Trash from '../../assets/icons/menu/trash.svg';
import Notifications from '../../assets/icons/menu/notifications.svg';
import Backups from '../../assets/icons/menu/backups.svg';
import Settings from '../../assets/icons/menu/settings.svg';
import Help from '../../assets/icons/menu/help.svg';
import Logout from '../../assets/icons/menu/logout.svg';

const Menu = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerMain}>
            <View style={styles.circleUser} />
            <View style={styles.headerTexts}>
              <Text style={styles.headerTextSecondary}>Hey</Text>
              <Text style={styles.headerTextMain}>Stefany</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Close />
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <View style={styles.menuOption}>
            <Recent />
            <Text style={styles.menuOptionText}>Recent</Text>
          </View>
          <View style={styles.menuOption}>
            <Favourite />
            <Text style={styles.menuOptionText}>Favourite</Text>
          </View>
          <View style={styles.menuOption}>
            <Trash />
            <Text style={styles.menuOptionText}>Trash</Text>
          </View>
          <View style={styles.menuOption}>
            <Notifications />
            <Text style={styles.menuOptionText}>Notifications</Text>
          </View>
          <View style={styles.menuOption}>
            <Backups />
            <Text style={styles.menuOptionText}>Backups</Text>
          </View>
          <View style={styles.menuOption}>
            <Settings />
            <Text style={styles.menuOptionText}>Settings</Text>
          </View>
          <View style={styles.menuOption}>
            <Help />
            <Text style={styles.menuOptionText}>Help & feedback</Text>
          </View>
        </View>
        <View style={[styles.menuOption, styles.logout]}>
          <Logout />
          <Text style={styles.menuOptionText}>Help & feedback</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4378DB',
  },
  header: {
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleUser: {
    height: 56,
    width: 56,
    backgroundColor: '#F0F0F0',
    borderRadius: 56,
    marginRight: 16,
  },
  headerTextMain: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
  headerTextSecondary: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
  menu: {
    marginTop: 68,
    marginLeft: 15,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 32,
  },
  menuOptionText: {
    marginLeft: 16,
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
  logout: {
    marginLeft: 15,
    position: 'absolute',
    bottom: 24,
  },
});

export default Menu;
