import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedList from './FeedList';



export default function HomeScreen({navigation, feed}) {
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
          dateNeededBy: "Wednesday @ 10:30am",
        }, 
        {
          postCreatorName: "Irene Au", 
          itemNeeded: "Braun Watch", 
          dateNeededBy: "Wednesday @ 3:20pm",
        }
      ]
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>daha</Text>

      <FeedList feed={sampleFeed}/>
 
      <View style={styles.homeBar}>
        <Image
        source={Icons.home.dark}
        style={styles.homeBarButton}>
        </Image>

        <Image
        source={Icons.search.light}
        style={styles.homeBarButton}>
        </Image>

        <Pressable onPress={() => {navigation.navigate("new-post")}}>
            <Image
            source={Icons.post.dark}
            style={styles.postButton}>
            </Image>
        </Pressable>

        <Image
        source={Icons.message.light}
        style={styles.homeBarButton}>
        </Image>

        <Image
        source={Icons.profile.light}
        style={styles.homeBarButton}>
        </Image>
      </View>
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
  titleText: {
    fontFamily: 'RacingSansOne',
    color: themes.colors.orange,
    fontSize: 48,
    textAlign: "left",
    paddingTop: "10%",
    paddingRight: '60%'
  },
  homeBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    alignItems: 'center',
    paddingBottom: '5%',
  },
  homeBarButton: {
    width: 48,
    height: 48,
  },
  postButton: {
    width: 80,
    height: 80,
  }
});
