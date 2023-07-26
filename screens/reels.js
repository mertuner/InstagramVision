import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from '../components/postBody/video';
import F from 'react-native-vector-icons/Feather';
import {deviceHeight} from '../constants/dimensions';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import videos from '../constants/video.json';

const Reels = props => {
  // const ref = useRef();

  // console.log(ref.current);

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    console.log(currentIdx);
  }, [currentIdx]);

  const renderItem = ({item, idx}) => {
    return (
        <Video uri={item.link} 
          name={item.name}
          like={item.likes}
          comment={item.comment}
          picture={item.picture}
          message={item.message}
          location={item.location}
          people={item.people}
          description={item.description}
        />
    );
  };

  const onChangeIndex = (props) => {
    console.log(props);
    // setCurrentIdx(index);
  };

  return (
    <View style={{width: '100%', height: deviceHeight * 0.75}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          position: 'absolute',
          zIndex: 32,
          top: 28,
        }}>
        <Text style={{color: 'white', fontSize: 22, fontWeight: 700}}>
          Reels
        </Text>
        <F name="camera" color="white" size={24} />
      </View>
      <SwiperFlatList
        vertical
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={onChangeIndex}
      />
      {/* <Video uri="https://download-video.akamaized.net/2/playback/9faf6d9d-7484-463b-88de-2c1e16691759/fdcf124f?__token__=st=1690172919~exp=1690187319~acl=%2F2%2Fplayback%2F9faf6d9d-7484-463b-88de-2c1e16691759%2Ffdcf124f%2A~hmac=c1684897d8d3cb700768368e9e351b6fe2f7e55fd349faa385a7e1c8579813ac&r=dXMtd2VzdDE%3D" /> */}
      {/* <Video uri="https://download-video.akamaized.net/2/playback/d890b07c-deba-45a3-ae1e-d9b102315cf4/206c4d6c?__token__=st=1690173392~exp=1690187792~acl=%2F2%2Fplayback%2Fd890b07c-deba-45a3-ae1e-d9b102315cf4%2F206c4d6c%2A~hmac=9c57083ae82ff1d5b365a185fd6cae6e16f91b0351c5d11e1bfac5262825f019&r=dXMtd2VzdDE%3D" /> */}
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({});
