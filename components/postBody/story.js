import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Avatar from '../UI/avatar';
import Ent from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import {deviceHeight} from '../../constants/dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSide} from '../../store/actions/app';

const Story = props => {
  const dispatch = useDispatch();

  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          position: 'relative',
          top: 0,
          width: '100%',
          height: '100%',
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: props.story,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 12,
          justifyContent: 'space-between',
          position: 'absolute',
          zIndex: 6,
          top: 0,
          alignItems: 'center',
          paddingHorizontal: 12,
          marginBottom: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            style={{width: 30, height: 30, borderRadius: 15, marginRight: 8}}
            src={{
              uri: props.avatar,
            }}
          />
          <Text style={{color: 'white', fontSize: 13, fontWeight: 700}}>
            {props.name}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: 8}}>
            <Ent name="dots-three-horizontal" color="white" size={14} />
          </View>
          <Pressable onPress={() => dispatch(toggleSide(false))}>
            <Ant name="close" color="white" size={22} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({});
