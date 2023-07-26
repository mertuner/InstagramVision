import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/header/header';
import Story from '../components/story/story';
import Post from '../components/postBody/post';
import {useDispatch, useSelector} from 'react-redux';
import { setMiniProfile } from '../store/actions/app';
import PostData from '../constants/miniInfo.json';

const Home = props => {

  const dispatch = useDispatch();

  const handleProfilePress = data => {
    // props.screenData(data);
    dispatch(setMiniProfile(data));
}

  return (
    <React.Fragment>
      <Header />
      <Story />
      <View
        style={{
          marginVertical: 16,
          height: 0.4,
          backgroundColor: 'rgba(256,256,256,0.4)',
          width: 400,
        }}></View>
        {PostData.map((el, idx) => {
          return (
            <Post
              onPress={() => handleProfilePress(el)}
              key={idx} 
              handle={el.handle}
              avatar={el.picture}
              post={el.post}
              likes={el.likes}
              commentator={el.comment[0].name}
              comment={el.comment[0].comment}
            />
          )
        })}
      {/* <Post
        name="joshua"
        avatar="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        post="https://images.unsplash.com/photo-1533745894801-062ca8abd594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80"
      />
      <Post
        name="eric"
        avatar="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        post="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <Post
        name="celine"
        avatar="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        post="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
      /> */}
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({});
