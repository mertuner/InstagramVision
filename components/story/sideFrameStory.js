import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Story from '../postBody/story';
import {useDispatch, useSelector} from 'react-redux';


const SideFrameStory = props => {

    const appState = useSelector(state => state.app);


  return (
    <ImageBackground style={{...styles.image, ...styles.absolute}}>
      <View style={{width: '100%', borderRadius: 30, overflow: 'hidden'}}>
        <Story
          avatar={appState.storyData?.picture}
          name={appState.storyData?.name}
          story={appState.storyData?.story}
        />
      </View>
    </ImageBackground>
  );
};

export default SideFrameStory;

const styles = StyleSheet.create({
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
      }
});
