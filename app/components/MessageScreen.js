import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessageList from './MessageList';
import 'react-native-gesture-handler';
import { supabase } from '../../supabase/supabase';
import { useState, useEffect }from "react"



export default function MessageScreen({navigation, route}) {

  


  
   const sampleFeed = [
    {
      postCreatorName: "Dakota Riemersma",
      itemNeeded: "See you then!",
      sizeNeeded: 'large',
      colorNeeded: 'yellow',
      occasionNeeded: 'party',
      dateNeededBy: "4 mins ago",
      dateReturnedBy: 'saturday @ noon',
      details: 'please help',
      returnDate: "saturday @ noon",
    }, 
    {
        postCreatorName: "Cat Harbour", 
        itemNeeded: "You're welcome:", 
        dateNeededBy: "1 hour ago",
        dateReturnedBy: 'saturday @ noon',
      },
    {
      postCreatorName: "Ells Boone",
      itemNeeded: "Had SO much fun with this costume", 
      dateNeededBy: "3 hours ago",
      returnDate: "saturday @ noon",
      dateReturnedBy: 'saturday @ noon',
    },
    {
      postCreatorName: "FashionX Group",
      itemNeeded: "I'm in front of coupa rn (:", 
      dateNeededBy: "11 hours ago",
      returnDate: "saturday @ noon",
      dateReturnedBy: 'saturday @ noon',
    }, 
    {
        postCreatorName: "Christian Pulisic", 
        itemNeeded: "Thanks for the jersey!",
        dateNeededBy: "17 hours ago",
        returnDate: "saturday @ noon",
        dateReturnedBy: 'saturday @ noon',
      }, 
    {
      postCreatorName: "Chloe Raygoza", 
      itemNeeded: "Can't thank you enough!", 
      dateNeededBy: "1 day ago",
      dateReturnedBy: 'saturday @ noon',
    },
    {
        postCreatorName: "SigEp Group", 
        itemNeeded: "No problem!", 
        dateNeededBy: "2 days ago",
        dateReturnedBy: 'saturday @ noon',
      },
    {
        postCreatorName: "Rayan Rizvi", 
        itemNeeded: "<3", 
        dateNeededBy: "2 days ago",
        dateReturnedBy: 'saturday @ noon',
      },
      {
        postCreatorName: "William Seymour", 
        itemNeeded: "I'm here!", 
        dateNeededBy: "3 days ago",
        dateReturnedBy: 'saturday @ noon',
      },
      {
        postCreatorName: "Irene Au", 
        itemNeeded: "Thanks again", 
        dateNeededBy: "4 days ago",
        dateReturnedBy: 'saturday @ noon',
      }
   ]



  
  return (
    <View style={styles.container}>
      <Text style={styles.messageTitle}>Messages</Text>

        <MessageList messages={sampleFeed}/>
 
      <View style={styles.homeBar}>
      <Pressable onPress={() => navigation.navigate("home-screen")}>
            <Image
            source={Icons.home.light}
            style={styles.homeBarButton}>
            </Image>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("explore-page", {params: {someText: "This is some text"}})}> 
          <Image
          source={Icons.search.light}
          style={styles.homeBarButton}>
          </Image>
        </Pressable>

        

        <Pressable onPress={() => {navigation.navigate("new-post")}}>
            <Image
            source={Icons.post.dark}
            style={styles.postButton}>
            </Image>
        </Pressable>

        <Image
        source={Icons.message.dark}
        style={styles.homeBarButton}>
        </Image>

<Pressable onPress={() => {navigation.navigate("own-profile")}}>

        <Image
        source={Icons.profile.light}
        style={styles.homeBarButton}>
        </Image>
        </Pressable>


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
  messageTitle: {
    fontFamily: 'Raleway',
    fontSize: themes.fontSizes.title, 
    textAlign: 'left',
    width: '100%',
    marginLeft: '10%',
    marginTop: '15%',
    marginBottom: '5%'

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