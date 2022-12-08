import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedList from './FeedList';



export default function TempScreen({navigation, feed}) {
    const sampleFeed = [
        {
            postCreatorName: "Drew Silva",
            itemNeeded: "banana costume",
            sizeNeeded: 'large',
            colorNeeded: 'yellow',
            occasionNeeded: 'party',
            dateNeededBy: "saturday @ 2:00pm",
            dateReturnedBy: 'sunday @ 11:00 am',
            details: 'please help',
          }, 
        {
          postCreatorName: "Calvin Laughlin",
          itemNeeded: "banana costume",
          sizeNeeded: 'large',
          colorNeeded: 'yellow',
          occasionNeeded: 'party',
          dateNeededBy: "friday @ 5:00pm",
          dateReturnedBy: 'saturday @ noon',
          details: 'please help',
        }, 
        {
          postCreatorName: "Olivia Wang", 
          itemNeeded: "blue hat",
          dateNeededBy: "thursday @ 10:00am",
          returnDate: "saturday @ noon",
          dateReturnedBy: 'saturday @ noon',
        }, 
        {
          postCreatorName: "Ava Deconcini",
          itemNeeded: "Sweater Vest", 
          dateNeededBy: "Tuesday @ 4:30pm",
          returnDate: "saturday @ noon",
          dateReturnedBy: 'saturday @ noon',
        },
        {
          postCreatorName: "Christian Pulisic",
          itemNeeded: "Fur Coat", 
          dateNeededBy: "Wednesday @ 10:30am",
          returnDate: "saturday @ noon",
          dateReturnedBy: 'saturday @ noon',
        }, 
        {
          postCreatorName: "Irene Au", 
          itemNeeded: "Braun Watch", 
          dateNeededBy: "Wednesday @ 3:20pm",
          dateReturnedBy: 'saturday @ noon',
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
    fontSize: themes.fontSizes.logo,
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
    width: themes.imageSizes.homeBarButton,
    height: themes.imageSizes.homeBarButton,
  },
  postButton: {
    width: themes.imageSizes.postButton,
    height: themes.imageSizes.postButton,
  }
});
