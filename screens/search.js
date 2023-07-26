import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {deviceWidth} from '../constants/dimensions';
import ImageData from '../constants/images.json';
import {BlurView} from '@react-native-community/blur';
import Ant from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {setSidePost} from '../store/actions/app';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={{marginTop: 34, marginLeft: 20}}>
        <View
          style={{
            width: 360,
            height: 40,
            borderRadius: 20,
            zIndex: 32,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 12,
            //   marginBottom: 24,
          }}>
          <Ant name="search1" color="white" size={20} />
          <Text style={{color: 'rgba(256,256,256,0.7)', marginLeft: 8}}>
            Search
          </Text>
        </View>
        <BlurView
          style={{...styles.absolute}}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        />
      </View>
      {ImageData.map((el, idx) => {
        return (
          <Pressable onPress={() => dispatch(setSidePost(el))} key={idx}>
            <Image
              style={{width: 393 / 3, height: 160, marginBottom: 2}}
              resizeMode="cover"
              source={{uri: el.link}}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
