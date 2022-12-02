import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedList from './FeedList';
<<<<<<< HEAD
import { SupabaseClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase';


export default function HomeScreen({navigation, feed}) {

  const [data, setData] = useState()
=======
import 'react-native-gesture-handler';
import { supabase } from '../../supabase/supabase';
import { useState, useEffect }from "react"



export default function HomeScreen({navigation, feed}) {
  const [data, setData] = useState()
  //const {data, error} = supabase.from('postInfo').select("*").then((res) => console.log(res))

>>>>>>> 133fcc3f73a5b7082e256014c9d11fd8d2035f15
  async function getData() {
    const {data, error} = await supabase.from('postInfo').select("*")
    if (data) {
      setData(data)
    }
  }
<<<<<<< HEAD
=======
  const sampleFeed = [
    // {
    //   postCreatorName: "Calvin Laughlin",
    //   itemNeeded: "banana costume",
    //   sizeNeeded: 'large',
    //   colorNeeded: 'yellow',
    //   occasionNeeded: 'party',
    //   dateNeededBy: "friday @ 5:00pm",
    //   dateReturnedBy: 'saturday @ noon',
    //   details: 'please help',
    //   returnDate: "saturday @ noon",
    // }, 
    // {
    //   postCreatorName: "Olivia Wang", 
    //   itemNeeded: "blue hat",
    //   dateNeededBy: "thursday @ 10:00am",
    //   returnDate: "saturday @ noon",
    //   dateReturnedBy: 'saturday @ noon',
    // }, 
    // {
    //   postCreatorName: "Ava Deconcini",
    //   itemNeeded: "Sweater Vest", 
    //   dateNeededBy: "Tuesday @ 4:30pm",
    //   returnDate: "saturday @ noon",
    //   dateReturnedBy: 'saturday @ noon',
    // },
    // {
    //   postCreatorName: "Christian Pulisic",
    //   itemNeeded: "Fur Coat", 
    //   dateNeededBy: "Wednesday @ 10:30am",
    //   returnDate: "saturday @ noon",
    //   dateReturnedBy: 'saturday @ noon',
    // }, 
    // {
    //   postCreatorName: "Irene Au", 
    //   itemNeeded: "Braun Watch", 
    //   dateNeededBy: "Wednesday @ 3:20pm",
    //   dateReturnedBy: 'saturday @ noon',
    // }
  ]

>>>>>>> 133fcc3f73a5b7082e256014c9d11fd8d2035f15
  useEffect(() => {
    getData()
  }, [])
  console.log(data)

<<<<<<< HEAD
  


    const sampleFeed = [
        {
          postCreatorName: "Calvin Laughlin",
          itemNeeded: "banana costume",
          sizeNeeded: 'large',
          colorNeeded: 'yellow',
          occasionNeeded: 'party',
          dateNeededBy: "friday @ 5:00pm",
          dateReturnedBy: 'saturday @ noon',
          details: 'please help',
          returnDate: "saturday @ noon",
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
=======
  if(data) {
    for (let i = data.length - 1; i >=0; i--) {
      console.log(data[i].name, data[i].size, data[i].item)
      sampleFeed.push({postCreatorName: data[i].name, itemNeeded: data[i].item, dateNeededBy: data[i].needBy, dateReturnedBy: 'tmo'})
    }
  }
>>>>>>> 133fcc3f73a5b7082e256014c9d11fd8d2035f15
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
