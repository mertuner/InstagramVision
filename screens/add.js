import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Ent from 'react-native-vector-icons/Entypo';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import F from 'react-native-vector-icons/Feather';
import gallery from '../constants/gallery.json';
import {deviceHeight} from '../constants/dimensions';
import {BlurView} from '@react-native-community/blur';

const Add = props => {
  const [currentImg, setCurrentImg] = useState(gallery[0].link);

  const handleImgSelection = idx => {
    setCurrentImg(gallery[idx].link);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          paddingRight: 16,
          paddingLeft: 164,
          marginTop: 24,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>
          New Post
        </Text>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
          Next
        </Text>
      </View>
      <View style={{marginTop: 18}}>
        <Image
          style={{width: '100%', height: 400}}
          resizeMode="cover"
          source={{
            uri: currentImg,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 600,
              marginRight: 4,
            }}>
            Recents
          </Text>
          <Ent name="chevron-down" color="white" size={16} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 50,
              paddingHorizontal: 12,
              paddingVertical: 8,
              // width: 50,
              backgroundColor: 'rgba(256,256,256,0.25)',
              marginRight: 12,
            }}>
            <MCI
              name="checkbox-multiple-blank-outline"
              color="white"
              size={16}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontWeight: 600,
                marginLeft: 4,
              }}>
              Select Multiple
            </Text>
          </View>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(256,256,256,0.25)',
            }}>
            <F name="camera" color="white" size={16} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 12,
          flexWrap: 'wrap',
          width: 400,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {gallery.map((el, idx) => {
          return (
            <Pressable key={idx} onPress={() => handleImgSelection(idx)}>
              <Image
                style={{width: 99, height: 110, marginBottom: 2}}
                resizeMode="cover"
                source={{uri: el.link}}
              />
            </Pressable>
          );
        })}
      </View>
      {/* <View
        style={{
          position: 'absolute',
          right: 16,
          top: deviceHeight * 0.67,
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          paddingHorizontal: 18
        }}>
        <View
          style={{
            flexDirection: 'row',
            zIndex: 22
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              marginRight: 6,
            }}>
            POST
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(256,256,256,0.6)',
              marginRight: 6,
            }}>
            STORY
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(256,256,256,0.6)',
              marginRight: 6,
            }}>
            REEL
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(256,256,256,0.6)',
            }}>
            LIVE
          </Text>
        </View>
        <BlurView
          style={{...styles.absolute}}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        />
      </View> */}
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    borderRadius: 20,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
