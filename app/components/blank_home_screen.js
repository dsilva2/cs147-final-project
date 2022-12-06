import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedList from './FeedList';
import 'react-native-gesture-handler';
import { supabase } from '../../supabase/supabase';
import { useState, useEffect }from "react"



export default function HomeScreen({navigation, route}) {

  let comingFromNewPost = false; 
  console.log("HELLO")
  const [data, setData] = useState()

  let undefinedNewPost = false; 
  

  // const { postToAddInfo } = route.params;
  const newObj  = route.params


  console.log("***")
  console.log(newObj)
  console.log("*****")
  console.log(typeof newObj)
  console.log(typeof newObj == 'undefined')
  if (typeof newObj == 'undefined'){
    undefinedNewPost = true; 

  }
  
  //const {data, error} = supabase.from('postInfo').select("*").then((res) => console.log(res))

  async function getData() {
    const {data, error} = await supabase.from('postInfo').select("*")
    if (data) {
      setData(data)
    }
  }
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

  useEffect(() => {
    getData()
  }, [])
  console.log(data)

  if(data) {
    console.log(data)

    for (let i = data.length - 1; i >=0; i--) {
      // console.log(data[i].name, data[i].size, data[i].item)
      sampleFeed.push({postCreatorName: data[i].name, itemNeeded: data[i].item, dateNeededBy: data[i].needBy, dateReturnedBy: 'tmo'})
    }
  }

  console.log("$$$$$")
  // console.log(newObj["newObj"])
  console.log("$$$$$$$$")
  console.log(comingFromNewPost)
  console.log(newObj) 

  if (newObj){
    comingFromNewPost = true;
  }

  
  if (!undefinedNewPost){
    if (newObj["newObj"] != null){
      const toAdd = newObj["newObj"];
      sampleFeed.unshift({postCreatorName: toAdd.name, itemNeeded: toAdd.item, dateNeededBy: toAdd.needBy, dateReturnedBy: toAdd.dateReturnedBy, details: toAdd.details})
    }
  }

  console.log(sampleFeed)

  // const [sampleFeed, setFeed] = useState([])
  // setFeed([{1: "HELLO"}])
  // setFeed(feedFromData) 
  // console.log("PRINTING SAMPLE FEED FROM feedFromData")
  // console.log(feedFromData)
  // console.log("****")
  // console.log(sampleFeed)
  
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