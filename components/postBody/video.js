import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNVideo from 'react-native-video';
import {deviceHeight, deviceWidth} from '../../constants/dimensions';
import AD from 'react-native-vector-icons/AntDesign';
import F from 'react-native-vector-icons/Feather';
import Fon from 'react-native-vector-icons/EvilIcons';
import {BlurView} from '@react-native-community/blur';
import Ent from 'react-native-vector-icons/Entypo';
import Avatar from '../UI/avatar';

const Video = props => {
  return (
    <View style={{flex: 1}}>
      <RNVideo
        repeat
        source={{
          uri: props.uri,
        }} // Can be a URL or a local file.
        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        resizeMode={'cover'}
        {...props}
      />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <AD name="hearto" color="white" size={18} />
            <Text style={{color: 'white', fontSize: 12, marginTop: 6}}>
              {props.like}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Fon name="comment" color="white" size={28} />
            <Text style={{color: 'white', fontSize: 12, marginTop: 6}}>
              {props.comment}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <F name="send" color="white" size={18} />
            <Text style={{color: 'white', fontSize: 12, marginTop: 6}}>
              {props.message}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Ent name="dots-three-horizontal" color="white" size={14} />
          </View>
        </View>
        <BlurView
          style={{...styles.absolute}}
          blurType="light"
          blurAmount={50}
          reducedTransparencyFallbackColor="white"
        />
      </View>
      <View
        style={{
          position: 'absolute',
          left: 16,
          bottom: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Avatar
            style={{width: 30, height: 30, borderRadius: 15, marginRight: 6}}
            src={{
              uri: props.picture,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 700,
              marginTop: 6,
            }}>
            {props.name}
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontWeight: 700,
            marginTop: 10,
          }}>
          {props.description}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 24,
            width: 90,
            borderRadius: 45,
          }}>
          <Ent name="location-pin" color="white" size={16} />
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: 600,
              marginLeft: 4,
            }}>
            {props.location}
          </Text>
          <BlurView
            style={{...styles.absolute, borderRadius: 10, zIndex: -1}}
            blurType="light"
            blurAmount={50}
            reducedTransparencyFallbackColor="white"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 24,
            width: 90,
            borderRadius: 45,
            marginLeft: 6
          }}>
          <AD name="user" color="white" size={16} />
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: 600,
              marginLeft: 4,
            }}>
            {props.people} People
          </Text>
          <BlurView
            style={{...styles.absolute, borderRadius: 10, zIndex: -1}}
            blurType="light"
            blurAmount={50}
            reducedTransparencyFallbackColor="white"
          />
        </View>
        </View>
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  backgroundVideo: {
    // position: 'relative',
    // zIndex: 45,
    aspectRatio: 1,
    height: deviceHeight * 0.75,
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 25,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    width: 50,
    height: 220,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
  innerContainer: {
    width: 50,
    height: 220,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 25,
    zIndex: 22,
  },
});
