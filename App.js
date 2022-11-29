import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import HomeScreen from './app/components/blank_home_screen';
import NewPost from './app/components/new_post';
import Comment from './app/components/my_daha';


const firstComment = {
  commentUser: 'Alix Cui',
  commentText: 'This video is amazing',
  timeStamp: '3 hours ago',
};

export default function App() {
  return (
    <View style={styles.container}>
      <Comment
        commentUser={firstComment.commentUser}
        commentText={firstComment.commentText}
        timeStamp={firstComment.timeStamp}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
