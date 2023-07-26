import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Avatar from '../components/UI/avatar';
import {deviceWidth} from '../constants/dimensions';
import Ent from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import {BlurView} from '@react-native-community/blur';
import SideBarPressable from '../components/UI/sideBarPressable';
import {useDispatch, useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';

const SideTabBar = props => {
  const [currentTab, setCurrentTab] = useState('Home');

  const appState = useSelector(state => state.app);

  const handleCurrentTab = tab => {
    if (currentTab !== tab) {
      setCurrentTab(tab);
    }
    props.setScreen(tab);
  };

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <Animatable.View
      animation={appState.isMessageFrameVisible ? 'fadeInDown' : null}
      style={{
        ...styles.container,
        left: appState.isMessageFrameVisible ? 30 : 380,
      }}>
      <View style={styles.innerContainer}>
        <SideBarPressable
          bg={currentTab === 'Home' ? 'rgba(256,256,256,0.25)' : 'transparent'}
          onPress={() => handleCurrentTab('Home')}>
          <Ent name="home" color="white" size={20} />
        </SideBarPressable>
        <SideBarPressable
          bg={
            currentTab === 'Search' ? 'rgba(256,256,256,0.25)' : 'transparent'
          }
          onPress={() => handleCurrentTab('Search')}>
          <Ant name="search1" color="white" size={20} />
        </SideBarPressable>

        <SideBarPressable
          bg={currentTab === 'Add' ? 'rgba(256,256,256,0.25)' : 'transparent'}
          onPress={() => handleCurrentTab('Add')}>
          <Ant name="plussquareo" color="white" size={20} />
        </SideBarPressable>

        <SideBarPressable
          bg={currentTab === 'Reels' ? 'rgba(256,256,256,0.25)' : 'transparent'}
          onPress={() => handleCurrentTab('Reels')}>
          <Ant name="playcircleo" color="white" size={20} />
        </SideBarPressable>

        <SideBarPressable
          bg={
            currentTab === 'Profile' ? 'rgba(256,256,256,0.25)' : 'transparent'
          }
          onPress={() => handleCurrentTab('Profile')}>
          <Avatar
            src={{
              uri: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            }}
            style={{width: 24, height: 24, borderRadius: 12}}
          />
        </SideBarPressable>
      </View>
      <BlurView
        style={{...styles.absolute}}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      />
    </Animatable.View>
  );
};

export default SideTabBar;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 280,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    // left: 380,
  },
  innerContainer: {
    width: 50,
    height: 280,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 25,
    zIndex: 22,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 25,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
