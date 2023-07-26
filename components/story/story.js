import React from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {deviceWidth} from '../../constants/dimensions';
import Avatar from '../UI/avatar';
import LinearGradient from 'react-native-linear-gradient';
import AD from 'react-native-vector-icons/AntDesign';
import {BlurView} from '@react-native-community/blur';
import peopleData from '../../constants/people.json';
import {useDispatch, useSelector} from 'react-redux';
import {  setStory } from '../../store/actions/app';

const Story = props => {

  const dispatch = useDispatch();

  const appState = useSelector(state => state.app);

  const handleStoryPress = data => {
      // props.screenData(data);
      dispatch(setStory(data));
  }

  return (
    <View style={{height: 90, marginTop: 16}}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}>
        <View>
          <View>
            <View>
              <Avatar
                src={{
                  uri: peopleData[0].picture,
                }}
                style={{width: 56, height: 56, borderRadius: 28}}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                left: 40,
                bottom: 0,
                zIndex: 32,
              }}>
              <View
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 12,
                  zIndex: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AD name="plus" color="white" size={14} />
              </View>
              <BlurView
                style={{...styles.absolute}}
                blurType="light"
                blurAmount={15}
                reducedTransparencyFallbackColor="white"
              />
            </View>
          </View>
          <Text style={{color: 'white', fontSize: 12, marginTop: 6}}>
            Your Story
          </Text>
        </View>
        {peopleData.slice(1).map((el, idx) => {
          return (
            <Pressable
              key={idx}
              onPress={() => handleStoryPress(el)}
              style={{
                marginLeft: idx === 0 ? 20 : 0,
                marginRight: 20,
                alignItems: 'center',
              }}>
              {/* <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                borderWidth: 2.5,
                borderColor: 'orange',
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}> */}
              <LinearGradient
                colors={[
                  'rgb(150,47,191)',
                  'rgb(214,41,118)',
                  'rgb(254,218,117)',
                ]}
                key={idx}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                }}>
                <Avatar
                  src={{
                    uri: el.picture,
                  }}
                  style={{width: 56, height: 56, borderRadius: 28}}
                />
              </LinearGradient>
              {/* </View> */}
              <Text style={{color: 'white', fontSize: 12, marginTop: 6}}>
                {el.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    // height: 90,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
