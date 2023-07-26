import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {deviceWidth} from '../../constants/dimensions';
import Avatar from '../UI/avatar';
import Instagram from '../../assets/logo.png';
import AD from 'react-native-vector-icons/AntDesign';
import F from 'react-native-vector-icons/Feather';
import {BlurView} from '@react-native-community/blur';
import {useDispatch, useSelector} from 'react-redux';
import {toggleMessage} from '../../store/actions/app';

const Header = props => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* <Avatar
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
        }}
        src={{
          uri: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        }}
      /> */}
      <Image source={Instagram} style={styles.image} resizeMode="contain" />
      <View
        style={{
          flexDirection: 'row',
          width: 70,
          justifyContent: 'space-between',
        }}>
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
            <AD name="hearto" color="white" size={14} />
          </View>
          <BlurView
            style={{...styles.absolute}}
            blurType="light"
            blurAmount={15}
            reducedTransparencyFallbackColor="white"
          />
        </View>
        <Pressable onPress={() => dispatch(toggleMessage(true))}>
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
            style={{...styles.absolute}}
            blurType="light"
            blurAmount={15}
            reducedTransparencyFallbackColor="white"
          />
        </Pressable>
        {/* <Icon name="hearto" color="white" size={16} /> */}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 20,
  },
  image: {
    width: 100,
    height: 50,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 15,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
