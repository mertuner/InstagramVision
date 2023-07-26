import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import {BlurView} from '@react-native-community/blur';
import {useDispatch, useSelector} from 'react-redux';


const ProgressBar = props => {
  const [progress, setProgress] = useState(0);
  const appState = useSelector(state => state.app);

  const setProgress = () => {
      setInterval(() => {
          setProgress(progress + 0.2)
      }, 600);
  };

  if (appState.storyData) {
    return (
      <Animatable.View>
        <Progress.Bar progress={progress} width="300" />

      </Animatable.View>
    );
  } else {
    return null;
  }
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 100,
    top: 765,
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
