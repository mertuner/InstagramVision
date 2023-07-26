import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import F from 'react-native-vector-icons/Feather';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Fon from 'react-native-vector-icons/Fontisto';
import {BlurView} from '@react-native-community/blur';
import Avatar from '../components/UI/avatar';
import ImageData from '../constants/profile.json';
import {useDispatch, useSelector} from 'react-redux';
import { setSidePost } from '../store/actions/app';

const Profile = props => {

  const dispatch = useDispatch();

  return (
    <View>
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
        <Text style={{color: 'white', fontSize: 18, fontWeight: 700}}>
          EmmaOppie
        </Text>
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
              <Ant name="plussquareo" color="white" size={16} />
            </View>
            <BlurView
              style={{...styles.absolute}}
              blurType="light"
              blurAmount={15}
              reducedTransparencyFallbackColor="white"
            />
          </View>
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
              <F name="menu" color="white" size={16} />
            </View>
            <BlurView
              style={{...styles.absolute}}
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
          marginTop: 32,
          paddingLeft: 24,
          paddingRight: 48,
          justifyContent: 'space-between',
        }}>
        <Avatar
          style={{width: 80, height: 80, borderRadius: 40}}
          src={{
            uri: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>
              1254
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
              marginLeft: 24,
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>
              14.3K
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
              marginLeft: 24,
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>
              656
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
          fontSize: 14,
          fontWeight: 700,
          marginLeft: 24,
          marginTop: 12,
        }}>
        Emma Oppenheimer
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 13,
          marginLeft: 24,
          marginTop: 4,
        }}>
        Professional Photographer
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 24,
          marginTop: 24,
        }}>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginRight: 8,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: 'transparent',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: 400,
              paddingVertical: 8,
            }}>
            Edit Profile
          </Text>
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: 'transparent',
            marginRight: 8,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: 400,
              paddingVertical: 8,
            }}>
            Share Profile
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: 'transparent',
          }}>
          <Ant name="adduser" color="white" size={16} />
        </View>
      </View>
      <View
        style={{
          marginTop: 16,
          height: 0.4,
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
            paddingVertical: 12,
            borderColor: 'white',
          }}>
          <Fon name="nav-icon-grid" color="white" size={20} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <MCI
            name="clipboard-account-outline"
            color="rgba(256,256,256,0.5)"
            size={28}
          />
        </View>
      </View>
      <View style={styles.imgContainer}>
        {ImageData.map((el, idx) => {
          return (
            <Pressable key={idx} onPress={() => dispatch(setSidePost(el))}>
              <Image
                style={{width: 393 / 3, height: 160, marginBottom: 2}}
                resizeMode="cover"
                source={{uri: el.link}}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Profile;

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
