import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Avatar from '../UI/avatar';
import Ent from 'react-native-vector-icons/Entypo';
import AD from 'react-native-vector-icons/AntDesign';
import Fon from 'react-native-vector-icons/EvilIcons';
import F from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSide} from '../../store/actions/app';
import {BlurView} from '@react-native-community/blur';

const SideFramePost = props => {
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
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,
            marginBottom: 12,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar
              style={{width: 30, height: 30, borderRadius: 15, marginRight: 8}}
              src={{
                uri: props.data.picture,
              }}
            />
            <Text style={{color: 'white', fontSize: 13, fontWeight: 700}}>
              {props.data.handle}
            </Text>
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
                <AD name="close" color="white" size={16} />
              </Pressable>
            </View>
            <BlurView
              style={{...styles.absolute, borderRadius: 13}}
              blurType="light"
              blurAmount={15}
              reducedTransparencyFallbackColor="white"
            />
          </View>
        </View>
        <Image
          resizeMode="cover"
          style={{width: 300, height: 260}}
          source={{
            uri: props.data.link,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: 80,
            marginTop: 12,
            marginLeft: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <AD name="heart" color="red" size={18} />
          <Fon name="comment" color="white" size={28} />
          <F name="send" color="white" size={18} />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            marginLeft: 12,
            marginTop: 10,
          }}>
          {props.data.like} Likes
        </Text>
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 6}}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                fontWeight: 700,
                marginLeft: 12,
                marginRight: 6,
              }}>
              {props.data.comment[0].name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              width={140}
              style={{
                color: 'white',
                fontSize: 12,
                fontWeight: 400,
              }}>
              {props.data.comment[0].comment}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: 'rgba(256,256,256,0.4)',
            fontSize: 12,
            fontWeight: 400,
            marginLeft: 12,
            marginTop: 6,
          }}>
          View all 786 comments
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 12,
            marginTop: 12,
          }}>
          <Avatar
            style={{width: 20, height: 20, borderRadius: 10, marginRight: 8}}
            src={{
              uri: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          <Text
            style={{
              color: 'rgba(256,256,256,0.4)',
              fontSize: 12,
              fontWeight: 400,
            }}>
            Add a comment...
          </Text>
        </View>
        <Text
          style={{
            color: 'rgba(256,256,256,0.4)',
            fontSize: 10,
            fontWeight: 400,
            marginLeft: 12,
            marginTop: 12,
          }}>
          36 minutes ago
        </Text>
      </View>
    </View>
  );
};

export default SideFramePost;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
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
