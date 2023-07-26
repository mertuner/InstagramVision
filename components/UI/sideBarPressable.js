import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';

const SideBarPressable = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.bg,
      }}>
      {props.children}
    </Pressable>
  );
};

export default SideBarPressable;

const styles = StyleSheet.create({});
