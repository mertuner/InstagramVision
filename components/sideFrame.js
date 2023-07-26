import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../constants/dimensions';
import {BlurView} from '@react-native-community/blur';
import SideFrameStory from './story/sideFrameStory';
import {useDispatch, useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import SideFrameProfile from './sideFrameProfile/sideFrameProfile';
import SideFramePost from './sideFramePost/sideFramePost';

const SideFrame = props => {
  const appState = useSelector(state => state.app);

  const _anim = useRef();

  //   if(appState.isSideFrameVisible){
  //       _anim.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  //   }

  if (appState.storyData || appState.miniProfileData || appState.sidePostData) {
    return (
      <Animatable.View
        style={styles.frame}
        ref={_anim}
        animation={appState.isSideFrameVisible ? 'fadeInLeft' : 'fadeOutLeft'}>
        {appState.sidePostData && <SideFramePost data={appState.sidePostData}/>}
        {appState.storyData && <SideFrameStory />}
        {appState.miniProfileData && (
          <SideFrameProfile data={appState.miniProfileData} />
        )}
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

export default SideFrame;

const styles = StyleSheet.create({
  frame: {
    height: deviceHeight * 0.5,
    width: 300,
    borderRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    right: 100,
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
