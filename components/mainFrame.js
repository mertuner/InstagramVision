import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../constants/dimensions';
import {BlurView} from '@react-native-community/blur';
import Home from '../screens/home';
import Search from '../screens/search';
import Add from '../screens/add';
import Reels from '../screens/reels';
import Profile from '../screens/profile';

const MainFrame = props => {
  const renderDynamicContent = tab => {
    switch (tab) {
      case 'Home':
        return <Home />;
      case 'Search':
        return <Search />;
      case 'Add':
        return <Add />;
      case 'Reels':
        return <Reels />;
      case 'Profile':
        return <Profile />;
      default:
        break;
    }
  };

  return (
    <View style={styles.frame}>
      <ImageBackground style={{...styles.image, ...styles.absolute}}>
        <View style={{width: '100%', borderRadius: 30, overflow: 'hidden'}}>
          {props.tab !== 'Reels' ? (
            <ScrollView
              contentContainerStyle={{
                paddingBottom: 0,
                borderRadius: 30,
                width: '100%',
              }}>
              {renderDynamicContent(props.tab)}
            </ScrollView>
          ) : (
            renderDynamicContent(props.tab)
          )}
        </View>
      </ImageBackground>
      <BlurView
        style={{...styles.absolute}}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      />
    </View>
  );
};

export default MainFrame;

const styles = StyleSheet.create({
  frame: {
    height: deviceHeight * 0.75,
    width: 400,
    borderRadius: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'white',
  },
  image: {
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(256,256,256,0.4)',
    zIndex: 2,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 30,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
