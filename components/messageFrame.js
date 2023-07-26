import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../constants/dimensions';
import Ant from 'react-native-vector-icons/AntDesign';
import F from 'react-native-vector-icons/Feather';
import {BlurView} from '@react-native-community/blur';
import {useDispatch, useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {toggleMessage} from '../store/actions/app';
import MessageData from '../constants/messages.json';

const MessageFrame = props => {
  const appState = useSelector(state => state.app);

  const dispatch = useDispatch();

  const _anim = useRef();

  //   if(appState.isSideFrameVisible){
  //       _anim.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  //   }

  if (appState.isMessageFrameVisible) {
    return (
      <Animatable.View
        style={styles.frame}
        ref={_anim}
        animation={
          appState.isMessageFrameVisible ? 'fadeInRight' : 'fadeOutLeft'
        }>
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
                EmmaOppie
              </Text>
              <View
                style={{
                  flexDirection: 'row',
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
                    <Pressable onPress={() => dispatch(toggleMessage(false))}>
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
              </View>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginVertical: 12,
                paddingHorizontal: 24,
              }}>
              {MessageData.slice(0, 5).map((el, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      marginRight: 24,
                      marginTop: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: el.picture}}
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                      }}
                    />
                    {idx === 0 && (
                      <View
                        style={{
                          position: 'absolute',
                          zIndex: 22,
                          width: 22,
                          height: 22,
                          borderRadius: 11,
                          backgroundColor: 'rgba(256,256,256,0.5)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          top: -10,
                          left: 0,
                        }}>
                        <Ant name="plus" color="white" size={14} />
                      </View>
                    )}
                    {idx !== 0 && (
                      <View
                        style={{
                          position: 'absolute',
                          zIndex: 22,
                          width: 14,
                          height: 14,
                          borderRadius: 7,
                          borderColor: 'white',
                          borderWidth: 1,
                          backgroundColor: '#00b54b',
                          bottom: 24,
                          right: 0,
                        }}></View>
                    )}
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 500,
                        marginTop: 6,
                      }}>
                      {el.name}
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
            <View
              style={{
                width: '100%',
                paddingHorizontal: 24,
                marginVertical: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: 800}}>
                Messages
              </Text>
              <Text
                style={{
                  color: 'rgba(256,256,256,0.6)',
                  fontSize: 12,
                  fontWeight: 500,
                }}>
                Requests
              </Text>
            </View>
            {MessageData.slice(5).map((el, idx) => {
              return (
                <View
                  key={idx}
                  style={{
                    width: '100%',
                    paddingHorizontal: 24,
                    marginVertical: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 12,
                      }}
                      source={{uri: el.picture}}
                    />
                    <View
                      style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        maxWidth: 130,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 12,
                          fontWeight: 500,
                          marginBottom: 4,
                        }}>
                        {el.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          color: 'rgba(256,256,256,0.6)',
                          fontSize: 11,
                          fontWeight: 500,
                        }}>
                        {el.message}
                      </Text>
                    </View>
                  </View>
                  <F name="camera" color="white" size={20} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <BlurView
          style={{...styles.absolute}}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        />
      </Animatable.View>
    );
  } else {
    return null;
  }
};

export default MessageFrame;

const styles = StyleSheet.create({
  frame: {
    height: deviceHeight * 0.75,
    width: 300,
    borderRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    left: 120,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'white',
  },
  image: {
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(256,256,256,0.4)',
    zIndex: 2,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 30,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
});
