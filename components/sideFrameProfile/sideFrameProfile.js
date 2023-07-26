import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Fon from 'react-native-vector-icons/Fontisto';
import {BlurView} from '@react-native-community/blur';
import Avatar from '../UI/avatar';
import ImageData from '../../constants/profile.json';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSide} from '../../store/actions/app';

const SideFrameProfile = props => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 22,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        bottom: 0,
      }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>
            {props.data.handle}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
            }}>
            <View>
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  zIndex: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Pressable>
                  <Ent name="dots-three-horizontal" color="white" size={14} />
                </Pressable>
              </View>
              <BlurView
                style={{...styles.absolute, borderRadius: 13}}
                blurType="light"
                blurAmount={15}
                reducedTransparencyFallbackColor="white"
              />
            </View>
            <View>
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  zIndex: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Pressable onPress={() => dispatch(toggleSide(false))}>
                  <Ant name="close" color="white" size={16} />
                </Pressable>
              </View>
              <BlurView
                style={{...styles.absolute, borderRadius: 13}}
                blurType="light"
                blurAmount={15}
                reducedTransparencyFallbackColor="white"
              />
            </View>
            {/* <Icon name="hearto" color="white" size={16} /> */}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 18,
            paddingLeft: 24,
            paddingRight: 24,
            justifyContent: 'space-between',
          }}>
          <Avatar
            style={{width: 60, height: 60, borderRadius: 30}}
            src={{
              uri: props.data.picture,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 13, fontWeight: 700}}>
                {props.data.postCount}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 500,
                  marginTop: 4,
                }}>
                Posts
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 12,
              }}>
              <Text style={{color: 'white', fontSize: 13, fontWeight: 700}}>
                {props.data.follower}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 500,
                  marginTop: 4,
                }}>
                Followers
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 12,
              }}>
              <Text style={{color: 'white', fontSize: 13, fontWeight: 700}}>
                {props.data.following}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 500,
                  marginTop: 4,
                }}>
                Following
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontWeight: 700,
            marginLeft: 24,
            marginTop: 12,
          }}>
          {props.data.name}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            marginLeft: 24,
            marginTop: 4,
          }}>
          {props.data.profession}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginVertical: 12, paddingHorizontal: 24}}>
          {props.data.storyBoard.map((el, idx) => {
            return (
              <View
                key={idx}
                style={{
                  marginRight: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: el.link}}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 6,
                  }}>
                  {el.title}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            marginTop: 16,
            height: 0.3,
            backgroundColor: 'rgba(256,256,256,0.4)',
            width: 400,
          }}></View>
        <View style={{flexDirection: 'row', marginBottom: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              paddingVertical: 10,
              borderColor: 'white',
            }}>
            <Fon name="nav-icon-grid" color="white" size={14} />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <MCI
              name="clipboard-account-outline"
              color="rgba(256,256,256,0.5)"
              size={22}
            />
          </View>
        </View>
        <View style={styles.imgContainer}>
          {props.data.posts.map((el, idx) => {
            return (
              <Image
                key={idx}
                style={{width: 296 / 3, height: 100, marginBottom: 2}}
                resizeMode="cover"
                source={{uri: el}}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SideFrameProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 15,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  imgContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
