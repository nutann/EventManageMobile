import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import 'react-native-get-random-values';
import ProfilePost from './ProfilePost';

//import Context from '../../context';

//import { database, databaseRef, databaseOnValue, databaseSet, databaseGet, databaseChild, databaseOff } from "../../firebase";

const Posts = (props) => {
  const { authorId, postCategory, isGrid } = props;

  const [posts, setPosts] = useState();

  //const { user } = useContext(Context);

  const navigation = useNavigation();

  useEffect(() => {
   // loadPosts();
    // return () => {
    //   setPosts([]);
    //   const postsRef = databaseRef(database, 'posts');
    //   databaseOff(postsRef);
    // }
  }, []);

  useEffect(() => {
   // loadPosts();
    // return () => {
    //   setPosts([]);
    //   const postsRef = databaseRef(database, 'posts');
    //   databaseOff(postsRef);
    // }
  }, [postCategory]);

//   const getUser = async (id) => {
//     if (!id) {
//       return null;
//     }
//     const ref = databaseRef(database);
//     const snapshot = await databaseGet(databaseChild(ref, `users/${id}`));
//     if (!snapshot || !snapshot.exists()) {
//       return null
//     }
//     return snapshot.val();
//   }

//   const hasLiked = (post, user) => {
//     if (!post || !user) {
//       return false;
//     }
//     if (!post.likes || !post.likes.length) {
//       return false
//     }
//     return post.likes.includes(user.id);
//   };

//   const hasFollowed = (author, user) => {
//     if (!author || !user) {
//       return false;
//     }
//     if (!author.followers || !author.followers.length) {
//       return false;
//     }
//     return author.followers.includes(user.id);
//   };

//   const transformPosts = async (posts) => {
//     if (!posts || !posts.length) {
//       return [];
//     }
//     const transformedPosts = [];
//     for (const post of posts) {
//       if ((authorId && post.author.id !== authorId) || (postCategory && post.postCategory !== postCategory)) {
//         continue;
//       }
//       const author = await getUser(post.author.id);
//       post.hasFollowed = hasFollowed(author, user);
//       post.hasLiked = hasLiked(post, user);
//       transformedPosts.push(post);
//     }
//     return transformedPosts;
//   };

//   const loadPosts = () => {
//     const postsRef = databaseRef(database, 'posts');
//     databaseOnValue(postsRef, async (snapshot) => {
//       const values = snapshot.val();
//       if (values) {
//         const keys = Object.keys(values);
//         const posts = keys.map(key => values[key]);
//         const transformedPosts = await transformPosts(posts);
//         setPosts(() => transformedPosts);
//       } else {
//         setPosts(() => []);
//       }
//     });
//   };

  useEffect(() => {
    console.log("item ==" )
    let items = [];
    if (postCategory === 1) {
      items = Array.apply(null, Array(30)).map((v, i) => {
        return {
          id: i,
          content: 'https://unsplash.it/400/400?image=' + (i + 1),
          postCategory: 1
        };
      });
    } else {
      items.push({id: 60,
        content: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        postCategory: 2})
    }
    
    setPosts(items);
  }, [postCategory]);

  const renderItems = (item) => {
    const post = item.item;
    if (isGrid) {
      return <ProfilePost post={post} />;
    }
  };

  const getKey = (item) => {
    return item.id;
  };

  return (
    <View style={styles.list}>
      <FlatList
        numColumns={isGrid ? 3 : 1}
        data={posts}
        renderItem={renderItems}
        keyExtractor={(item, index) => getKey(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 4,
  }
});

export default Posts;