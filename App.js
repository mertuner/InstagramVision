/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// Image by rawpixel.com on Freepik
import Room from './assets/room.jpg';
import MainFrame from './components/mainFrame';
import SideTabBar from './components/sideTabBar';
import SideFrame from './components/sideFrame';
import SideBottomSlider from './components/UI/sideBottomSlider';
import MessageFrame from './components/messageFrame';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import appReducer from './store/reducer/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, composeEnhancers());

const App = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const [currentTab, setCurrentTab] = useState('Home');

  const setScreen = tab => {
    setCurrentTab(tab);
  };

  return (
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <Provider store={store}>
      <ImageBackground source={Room} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <SideTabBar setScreen={setScreen} />
          <MainFrame tab={currentTab} />
          <SideFrame />
          <SideBottomSlider />
          <MessageFrame />
        </View>
      </ImageBackground>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
