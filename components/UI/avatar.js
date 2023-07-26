import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Avatar = props => {
  return <Image style={props.style} source={props.src} resizeMode="cover"/>;
};

export default Avatar;

const styles = StyleSheet.create({
});
