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
import { MaterialCommunityIcons, Fontisto, FontAwesome, MaterialIcons } from '@expo/vector-icons';



export default function OwnProfile({navigation, route}) {

    const filledStar = <MaterialCommunityIcons name="star-four-points" size={'25%'} color={themes.colors.orange} />
    const unfilledStar = <MaterialCommunityIcons name="star-four-points-outline" size={'25%'} color={themes.colors.orange} />

    const sampleFeed = [
        {
          postCreatorName: "You", 
          itemNeeded: "blue hat",
          dateNeededBy: "thursday @ 10:00am",
          returnDate: "saturday @ noon",
          dateReturnedBy: 'saturday @ noon',
        }, 
        {
          postCreatorName: "You",
          itemNeeded: "Sweater Vest", 
          dateNeededBy: "Tuesday @ 4:30pm",
          returnDate: "saturday @ noon",
          dateReturnedBy: 'saturday @ noon',
        },
        {
            postCreatorName: "You",
            itemNeeded: "shirt", 
            dateNeededBy: "Tuesday @ 4:30pm",
            returnDate: "saturday @ noon",
            dateReturnedBy: 'saturday @ noon',
          },
          {
            postCreatorName: "You",
            itemNeeded: "pair of pants", 
            dateNeededBy: "Tuesday @ 4:30pm",
            returnDate: "saturday @ noon",
            dateReturnedBy: 'saturday @ noon',
          },
       ]
  
  return (
    <View style={styles.container}>

        <View style={styles.profileTopBar}>
            <Text style={styles.titleText}>Profile</Text>
            <Fontisto name="player-settings" size={'25%'} color={themes.colors.black} />
        </View>



        <View style={styles.profileInfo}>
            <View style={styles.nameAndPhoto}>
                <Image
                    source={Icons.profile_photos.james}
                    style={styles.profilePhoto}>
                </Image>
                <View style={styles.nameBox}>
                    <Text style={styles.nameText}>James Landay</Text>
                    <Text style={styles.username}>@jameslanday</Text>
                    <View style={styles.stars}>
                        {filledStar}
                        {filledStar}
                        {filledStar}
                        {filledStar}
                        {unfilledStar}

                    </View>
                </View>


            </View>

            <View style={styles.numbers}>
                <View style={styles.friends}>
                    <Text style={styles.numberText}>67</Text>
                    <Text style={styles.username}>Friends</Text>
                </View>
                <View style={styles.friends}>
                    <Text style={styles.numberText}>80</Text>
                    <Text style={styles.username}>Lends</Text>
                </View>
                <View style={styles.friends}>
                    <Text style={styles.numberText}>15</Text>
                    <Text style={styles.username}>Borrows</Text>
                </View>
            </View>

        </View>

        <Text style={styles.largeText}>James's Top Traits</Text>

        <View style={styles.traits}>
            <View style={styles.traitWithText}>
                <MaterialCommunityIcons name="hanger" size={'50%'} color={themes.colors.grey} />
                <Text style={styles.traitText}>Organized</Text>
            </View>
            <View style={styles.traitWithText}>
                <MaterialIcons name="soap" size={'50%'} color={themes.colors.grey} />
                <Text style={styles.traitText}>Clean</Text>
            </View>
            <View style={styles.traitWithText}>
                <FontAwesome name="handshake-o" size={'50%'} color={themes.colors.grey} />
                <Text style={styles.traitText}>Effortless</Text>
            </View>
            <View style={styles.traitWithText}>
                <Fontisto name="clock" size={'50%'} color={themes.colors.grey} />
                <Text style={styles.traitText}>On Time</Text>
            </View>

        </View>
        
        <Text style={styles.largeText}>Recent Activity</Text>
        <FeedList feed={sampleFeed}/>
 
      <View style={styles.homeBar}>
          <Pressable onPress={() => {navigation.navigate("home-screen")}}>
            <Image
            source={Icons.home.light}
            style={styles.homeBarButton}>
            </Image>
          </Pressable>

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
        source={Icons.profile.dark}
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
    fontFamily: 'Raleway',
    color: themes.colors.black,
    fontSize: themes.fontSizes.title,
    //textAlign: "left",
    paddingTop: "10%",
    //paddingRight: '60%',
    marginRight: '50%'
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
  settingsButton: {
      width: 32,
      height: 32,
      marginLeft: '50%'
  },
  postButton: {
    width: 80,
    height: 80,
  },
  profileTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '10%'
  },
  profilePhoto: {
    width: 128,
    height: 128,
    alignContent: 'flex-start',
    //marginRight: '10%',
    borderRadius: '100%',
    //marginLeft: '10%'
  },
  profileInfo: {
    justifyContent: 'space-between',
  },
  nameAndPhoto: {
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%'
    // justifyContent: 'space-between'
  },
  nameText: {
    fontSize: themes.fontSizes.title,
    fontFamily: 'Raleway',
    color: themes.colors.black
  },
  nameBox: {
    height: 128,
    marginRight: '5%',
    marginLeft: '5%',
    justifyContent: 'space-between',
    width: '65%'
  },
  username: {
      fontSize: themes.fontSizes.largeBody,
      fontFamily: 'Raleway'
  },
  stars: {
    flexDirection: 'row'
  },
  numbers: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '15%',
      marginRight: '15%',
      marginTop: '10%'
  },
  friends: {
      flexDirection: 'column',
      alignItems: 'center'
  },
  numberText: {
    fontSize: themes.fontSizes.title,
    fontFamily: 'Raleway',
    color: themes.colors.black,
    alignItems: 'center',
    //marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center'
  },
  largeText: {
      fontSize: themes.fontSizes.subtitle,
      color: themes.colors.black,
      fontFamily: 'Raleway',
      textAlign: 'left',
      width: '100%',
      marginTop: '10%',
      marginLeft: '10%'
  },
  traits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '5%',
   alignItems: 'flex-start'

},
traitWithText: {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '25%',

},
traitText: {
  fontSize: themes.fontSizes.smallBody,
  color: themes.colors.grey,
  fontFamily: 'Raleway',
  marginTop: '5%',
  textAlign: 'center'
},
});