import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedList from './FeedList';
import FeedItem from './FeedItem';
import PastDahaItem from './PastDahaItem';
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


        <ScrollView style={styles.scrolling}>
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

        <Text style={styles.topTraitsText}>My Top Traits</Text>

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
        
        <Text style={styles.topTraitsText}>My Communities</Text>

        <View style={styles.suggestedCommunitiesSection}>
                <View style={styles.suggestedCommunitiesView}>
                    <Pressable style={styles.aCommunityLeft} onPress={() => console.log("Pressed Community")}> 
                    
                        <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.communityImage}></Image>
                        <Text style={styles.communityNameText}>FashionX</Text>
                        <Text style={styles.numMembersText}> 136 Members</Text>
                    </Pressable>
                    <Pressable style={styles.aCommunity} onPress={() => console.log("Pressed Community")}>
                        <Image source={require("../../assets/Icons/sigep.png")} style={styles.communityImage}></Image>
                        <Text style={styles.communityNameText}>Stanford SigEp</Text>
                        <Text style={styles.numMembersText}> 98 Members</Text>
                    </Pressable>
                    <Pressable style={styles.aCommunityRight} onPress={() => console.log("Pressed Community")}>
                        <Image source={require("../../assets/Icons/tour_guides.png")} style={styles.communityImage}></Image>
                        <Text style={styles.communityNameText}>Tour Guides</Text>
                        <Text style={styles.numMembersText}> 48 Members</Text>
                    </Pressable>
                    

                </View>

            </View>

        
        <Text style={styles.recentActivityText}>Recent Activity</Text>
        <View style={styles.list}>
        <FeedItem 
        postCreatorName="You"
        itemNeeded="blue shirt"
        sizeNeeded="Drew"
        colorNeeded="red"
        occasionNeeded="{item.occasionNeeded}"
        dateNeededBy="tomorrow"
        dateReturnedBy="{item.dateReturnedBy}"
        details="{item.details}"
        />
        <PastDahaItem 
        postCreatorName={"Benjamin Zaidel"}
        itemNeeded="sock"
        sizeNeeded="Drew"
        colorNeeded="{item.colorNeeded}"
        occasionNeeded="{item.occasionNeeded}"
        dateNeededBy="yesterday"
        dateReturnedBy="{item.dateReturnedBy}"
        details="{item.details}"
        />
        <PastDahaItem 
        postCreatorName={"Benjamin Zaidel"}
        itemNeeded="Drew"
        sizeNeeded="Drew"
        colorNeeded="{item.colorNeeded}"
        occasionNeeded="{item.occasionNeeded}"
        dateNeededBy="two days ago"
        dateReturnedBy="{item.dateReturnedBy}"
        details="{item.details}"
        />
        </View>

        </ScrollView>

 
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
    marginRight: '10%',
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
      marginTop: '10%',
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
  recentActivityText: {
    fontSize: themes.fontSizes.subtitle,
    color: themes.colors.black,
    fontFamily: 'Raleway',
    textAlign: 'left',
    width: '100%',
    marginTop: '-15%',
    marginLeft: '10%'
  },
  traits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '5%',
   alignItems: 'flex-start',
   marginLeft: '5%'


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
scrolling: {
  width: '110%',
},
list: {
  marginLeft: '5%',
  marginBottom: '50%',
  marginRight: '5%',
},
suggestedFriendsView: {
  //   backgroundColor: 'green',
    width: '100%',
},

suggestedFriendsText: {
    fontSize: themes.fontSizes.subtitle, 
    fontFamily: 'Raleway',
    color: themes.colors.black, 
    marginLeft: '7.5%',

}, 

suggestedFriendItemsView: {
    
    width: '100%', 
  //   backgroundColor: 'green',
    height: '40%',

}, 


suggestedCommunitiesSection: {
    marginTop: '1.5%',
  //   backgroundColor: 'blue',
    width: '100%',
    height: '25%',
  //   aspectRatio: 1,
}, 

suggestedCommunitiesView: {
  //   backgroundColor: 'red',
    // THIS IS WHERE THE IMAGES WILL BE
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '90%',
  //   backgroundColor: 'blue',
    justifyContent: 'space-around',
    marginHorizontal: '5%',
     marginTop: '-10%'

  //   aspectRatio: 1,
  //   flex
}, 


communityImage: {

  width: '35%',
  height: '35%',
  aspectRatio: 1,
  borderRadius: 10,
  //   width: '30%',
  // width: 0,
  //   resizeMode: 'contain',
}, 

aCommunity: {
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: 'yellow',
  height: '100%',
  width: '33.33%',
  //marginBottom: '5%',

}, 

aCommunityLeft: {
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: 'yellow',
  height: '100%',
  width: '33.33%',
  marginLeft: '2.5%',
  //marginBottom: '5%',

}, 

aCommunityRight: {
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: 'yellow',
  height: '100%',
  width: '33.33%',
  marginRight: '2.5%',
  //marginBottom: '5%', 

}, 

communityNameText: {
  color: themes.colors.black,
  fontSize: themes.fontSizes.largeBody,
  fontFamily: "Raleway",
  marginTop: '10%',
}, 

numMembersText: {
  color: themes.colors.black,
  fontSize: themes.fontSizes.smallBody,
  fontFamily: "Raleway",
},
topTraitsText: {
  fontSize: themes.fontSizes.subtitle,
      color: themes.colors.black,
      fontFamily: 'Raleway',
      textAlign: 'left',
      width: '100%',
      marginTop: '5%',
      marginLeft: '10%'
},
});