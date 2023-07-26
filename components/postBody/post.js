import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {deviceWidth} from '../../constants/dimensions';
import Avatar from '../UI/avatar';
import Ent from 'react-native-vector-icons/Entypo';
import AD from 'react-native-vector-icons/AntDesign';
import Fon from 'react-native-vector-icons/EvilIcons';
import F from 'react-native-vector-icons/Feather';

const Post = props => {
  return (
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
        <Pressable
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={props.onPress}>
          <Avatar
            style={{width: 30, height: 30, borderRadius: 15, marginRight: 8}}
            src={{
              uri: props.avatar,
            }}
          />
          <Text style={{color: 'white', fontSize: 13, fontWeight: 700}}>
            {props.handle}
          </Text>
        </Pressable>
        <Ent name="dots-three-horizontal" color="white" size={14} />
      </View>
      <Image
        resizeMode="cover"
        style={{width: 400, height: 320}}
        source={{
          uri: props.post,
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
        {props.likes} Likes
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
            {props.commentator}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: 400,
            }}>
            {props.comment}
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
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
});
