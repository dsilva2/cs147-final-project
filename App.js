import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import HomeScreen from './app/components/blank_home_screen';
import NewPost from './app/components/new_post';
import FeedItem from './app/components/FeedItem';
import FeedList from './app/components/FeedList';

export default function App() {

  const sampleFeed = [
    {
      postCreatorName: "Calvin Laughlin",
      itemNeeded: "banana costume",
      dateNeededBy: "friday @ 5:00pm",
    }, 
    {
      postCreatorName: "Olivia Wang", 
      itemNeeded: "blue hat",
      dateNeededBy: "thursday @ 10:00am"
    }, 
    {
      postCreatorName: "Ava Deconcini",
      itemNeeded: "Sweater Vest", 
      dateNeededBy: "Tuesday @ 4:30pm"
    },
    {
      postCreatorName: "Christian Pulisic",
      itemNeeded: "Fur Coat", 
      dateNeededBy: "Wednesdat @ 10:30am",
    }
  ]

  return (
    <View style={styles.container}>
      {/* <FeedItem/> */}
      <HomeScreen feed={sampleFeed}/>
      {/* <NewPost/> */}
      {/* <FeedList style={styles.feedList} feed={sampleFeed}/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    // backgroundColor: 'green',
    // alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  // feedList: {
  //   height: '100%'
  // }
 
});
