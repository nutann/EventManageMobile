import React from 'react';
import { View, Image, StyleSheet, Platform, TouchableOpacity, Button } from 'react-native'; 
// import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-controls';
import { Video, ResizeMode } from 'expo-av';

const ProfilePost = (props) => {
  const { post, onItemClicked } = props;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  if (!post) {
    return <></>;
  }

  const clickItem = () => {
    onItemClicked(post);
  };

  if (post.postCategory && post.postCategory === 1) {
    return (
      <TouchableOpacity style={styles.imagePostContainer} onPress={clickItem}>
        <Image style={styles.imagePost} source={{ uri: post.content }} />
      </TouchableOpacity>
    );
  }
  if (post.postCategory && post.postCategory === 2) {
    return (
      <View style={styles.videoContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: post.content,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  imagePostContainer: { 
    flex: 1
  },
  imagePost: { 
    flex: 1,
    aspectRatio: 1
  },
  videoContainer: {
    flex: 1,
    width: 100,
    height: 100
  },
  video: {
    flex: 1,
    width: 100,
    height: 100
  },
  videoOverlay: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  }
});

export default ProfilePost;