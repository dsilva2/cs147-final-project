import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import themes from '../../assets/Themes/themes';
import Icons from '../../assets/Icons';
import SuggestedFriendItem from './SuggestedFriendItem';
import { useState } from 'react';
import SuggestedCommunityItem from './SuggestedCommunityItem';


export default function ExplorePage ({navigation, route}) {


    const [searchText, onChangeSearch] = useState('');
    // console.log(searchText)


    // let params = route.params

    // console.log(params)

    



    return(
        <View style={styles.container}>
            <View style={styles.searchArea}>
                <Text style={styles.exploreText}>Explore</Text>
                <View style={styles.searchBarView}>
                    <Image style={styles.searchIcon} source={require("../../assets/Icons/search_button_light.png")} />
                
                    <TextInput style={styles.searchInput}
                    onChangeText={onChangeSearch}
                    value={searchText}
                    placeholder="Find Friends or Communities"
                    placeholderTextColor={themes.colors.grey}
                    />

                </View>

            </View>

            <View style={styles.suggestedFriendsView}>
                <Text style={styles.suggestedFriendsText}>
                    Suggested Friends
                </Text>
                <SuggestedFriendItem  name={"Rayan Rizvi"} handle={"@rizvi"} />
                <SuggestedFriendItem  name={"Lily Bailey"} handle={"@lilybailey"} />
                <SuggestedFriendItem  name={"William Seymour"} handle={"@sway"} />
                <SuggestedFriendItem  name={"Christian Pulisic"} handle={"@captainamerica"} />

            </View>


            <View style={styles.suggestedCommunitiesSection}>
                <Text style={styles.suggestedFriendsText}>Suggested Communities</Text>
                <View style={styles.suggestedCommunitiesView}>
                    <Pressable style={styles.aCommunityLeft} onPress={() => navigation.navigate("community-page", {communityName: "FashionX", aboutParagraph: "Stanford FashionX aims to user in the next wave of innovators, creatives, and activists within the fashion industry. Those who challenge tradition, initiate progress, and solve fashion's looming questions."})}> 
                    
                        <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.communityImage}></Image>
                        <Text style={styles.communityNameText}>FashionX</Text>
                        <Text style={styles.numMembersText}> 8 Members</Text>
                    </Pressable>
                    <Pressable style={styles.aCommunity} onPress={() => navigation.navigate("community-page", {communityName: "Stanford SigEp", aboutParagraph: "Help other brothers at SigEp find items they may need! Whether you're living in the house or not, we an all use daha to help share our items!"})}> 
                        <Image source={require("../../assets/Icons/sigep.png")} style={styles.communityImage}></Image>
                        <Text style={styles.communityNameText}>Stanford SigEp</Text>
                        <Text style={styles.numMembersText}> 8 Members</Text>
                    </Pressable>
                    <Pressable style={styles.aCommunityRight} onPress={() => navigation.navigate("community-page", {communityName: "Tour Guides", aboutParagraph: "Join our community of the best backwards walkers on campus! Help other tour guides find items they might need! See you around campus!"})}> 
                        <Image source={require("../../assets/Icons/tour_guides.png")} style={styles.communityImage}></Image>
                        <Text style={styles.communityNameText}>Tour Guides</Text>
                        <Text style={styles.numMembersText}> 8 Members</Text>
                    </Pressable>
                    

                </View>

            </View>
            

            <View style={styles.homeBar}>

                <Pressable onPress={() => navigation.navigate("home-screen")}>
                    <Image
                    source={Icons.home.light}
                    style={styles.homeBarButton}>
                    </Image>
                </Pressable>
                

                <Pressable onPress={() => navigation.navigate("explore-page", {params: {someText: "This is some text"}})}> 
                    <Image
                    source={Icons.search.dark}
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
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: themes.colors.white,
        // backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',

    },

    searchArea: {
        marginTop: '15%',
        // paddingTop: '15%',
        width: '100%',
        // flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        height: '15%',

    },
    searchIcon: {
        aspectRatio: 1,
        // height: 10,
        width: "6%",
        marginLeft: '5%',
        paddingRight: '5%',

    },

    searchBarView: {
        height: "30%",
        alignItems: 'center',
        marginTop: '5%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: themes.colors.black,
        width: '85%',
        borderRadius: 99999
    },
    searchInput: {
        // marginLeft: 20,
        // backgroundColor: 'green',
        marginLeft: '2.5%',
        fontFamily: 'Raleway',
        color: themes.colors.black, 
    },

    exploreText: {
        fontFamily: 'Raleway',
        fontSize: themes.fontSizes.title, 
        // marginLeft: '10%',
        marginRight: '55%',

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
          width: '100%',
        //   backgroundColor: 'blue',
          justifyContent: 'space-around'

        //   aspectRatio: 1,
        //   flex
      }, 


      communityImage: {

        width: '50%',
        height: '50%',
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
        marginBottom: '5%',

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
        marginBottom: '5%',

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
        marginBottom: '5%', 

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
    }

})