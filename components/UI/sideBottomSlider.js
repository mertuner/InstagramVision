import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from './avatar';
import {deviceWidth} from '../../constants/dimensions';
import {BlurView} from '@react-native-community/blur';
import AD from 'react-native-vector-icons/AntDesign';
import F from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';

const SideBottomSlider = props => {
  const appState = useSelector(state => state.app);

  if (appState.storyData || appState.miniProfileData) {
    return (
      <Animatable.View
        style={styles.container}
        animation={appState.isSideFrameVisible ? 'fadeInLeft' : 'fadeOutLeft'}>
        <View style={styles.innerContainer}>
          <Text style={{color: 'white', fontSize: 13}}>Send Message</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 6}}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  zIndex: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AD name="hearto" color="white" size={14} />
              </View>
              <BlurView
                style={{...styles.absolute, borderRadius: 15}}
                blurType="light"
                blurAmount={15}
                reducedTransparencyFallbackColor="white"
              />
            </View>
            <View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  zIndex: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <F name="send" color="white" size={14} />
              </View>
              <BlurView
                style={{...styles.absolute, borderRadius: 15}}
                blurType="light"
                blurAmount={15}
                reducedTransparencyFallbackColor="white"
              />
            </View>
          </View>
        </View>
        <BlurView
          style={{...styles.absolute}}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        />
      </Animatable.View>
    );
  } else {
    return null;
  }
};

export default SideBottomSlider;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 100,
    top: 780,
  },
  innerContainer: {
    width: 300,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 12,
    paddingVertical: 12,
    borderRadius: 20,
    zIndex: 22,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 20,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
