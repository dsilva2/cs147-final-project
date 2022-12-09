import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedList from './FeedList';
import PastDahaList from './PastDahaList';
import 'react-native-gesture-handler';
import { supabase } from '../../supabase/supabase';
import { useState, useEffect }from "react"
import { MaterialCommunityIcons, Fontisto, FontAwesome, MaterialIcons } from '@expo/vector-icons';



export default function OtherProfile({navigation, route}) {

    const { userInfo } = route.params;
    
    console.log(userInfo)

    const [modalVisible, setModalVisible] = useState(false)


    let lowercaseName = userInfo[0].toLowerCase();
    lowercaseName = lowercaseName.replace(/\s/g, '');
    const firstName = (userInfo[0].split(" "))[0]
    const confirmationMessage = 'Your friend request to ' + userInfo[0] + " has been sent!"

    const filledStar = <MaterialCommunityIcons name="star-four-points" size={'25%'} color={themes.colors.orange} />
    const unfilledStar = <MaterialCommunityIcons name="star-four-points-outline" size={'25%'} color={themes.colors.orange} />


    let requestStatus;
    const [requestSent, sendRequest] = useState(false)

    const sentRequest = <Pressable style={styles.requestButton} onPress={() => setModalVisible(true)}><Text style={styles.friendRequestText}>Send Friend Request</Text></Pressable>
    const pendingRequest = <View style={styles.requestedButton}><Text style={styles.friendRequestText}>Request Pending</Text></View>

    if (!requestSent) {
        requestStatus = sentRequest
    }
    if (requestSent) {
        requestStatus = pendingRequest
    }

    let image; 

    if (userInfo[0] == "Lily Bailey"){
        image = <Image source={require("../../assets/Icons/lily.jpg")} style={styles.profilePhoto}></Image>
    } else if ((userInfo[0] == "Calvin Laughlin")){
        image = <Image source={require("../../assets/Icons/calvin.jpg")} style={styles.profilePhoto}></Image>
    } else if (userInfo[0] == "Dan Healy"){
        image = <Image source={require("../../assets/Icons/dan.jpg")} style={styles.profilePhoto}></Image>
    } else if (userInfo[0] == "Benjamin Zaidel"){
        image = image = <Image source={require("../../assets/Icons/benjamin.jpg")} style={styles.profilePhoto}></Image>
    } else if (userInfo[0] == "Irene Au"){
        image = image = <Image source={require("../../assets/Icons/irene.jpg")} style={styles.profilePhoto}></Image>
    } else if (userInfo[0] == "You"){
      image = image = <Image source={require("../../assets/Icons/james.jpg")} style={styles.profilePhoto}></Image>
    }

    

    const sampleFeed = [
        {
          postCreatorName: userInfo[0],
          itemNeeded: "blue hat",
          dateNeededBy: "thursday @ 10:00am",
          returnDate: "saturday @ noon",
          dateReturnedBy: 'saturday @ noon',
        }, 
        {
            postCreatorName: userInfo[0],
            itemNeeded: "Sweater Vest", 
          dateNeededBy: "Tuesday @ 4:30pm",
          returnDate: "saturday @ noon",
          dateReturnedBy: 'saturday @ noon',
        },
        {
            postCreatorName: userInfo[0],
            itemNeeded: "shirt", 
            dateNeededBy: "Tuesday @ 4:30pm",
            returnDate: "saturday @ noon",
            dateReturnedBy: 'saturday @ noon',
          },
          {
            postCreatorName: userInfo[0],
            itemNeeded: "pair of pants", 
            dateNeededBy: "Tuesday @ 4:30pm",
            returnDate: "saturday @ noon",
            dateReturnedBy: 'saturday @ noon',
          },
       ]



  
  return (
    <View style={styles.container}>

        <Pressable onPress={() => {navigation.navigate("home-screen")}}>
            <Text style={styles.xText}>✕</Text>
        </Pressable>




        <View style={styles.profileInfo}>
            <View style={styles.nameAndPhoto}>
                {image}
                <View style={styles.nameBox}>
                    <Text style={styles.nameText}>{userInfo[0]}</Text>
                    <Text style={styles.username}>@{lowercaseName}</Text>
                    <View style={styles.stars}>
                        {filledStar}
                        {filledStar}
                        {filledStar}
                        {filledStar}
                        {unfilledStar}

                    </View>
                </View>


            </View>

            <Pressable style={styles.friendRequest} onPress={() => sendRequest(!requestSent)}>
                {requestStatus}
            </Pressable>

            <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <Pressable
                onPress={() => {sendRequest(true)}}
                onPressOut={() => setModalVisible(false)}
              >
                <Text style={styles.modalXText}>✕</Text>
              </Pressable>
              <View style={styles.modalImage}>{image}</View>
              <Text style={styles.requestNameText}>
                  {userInfo[0]}
              </Text>
              <Text style={styles.confirmationText}>{confirmationMessage}</Text>
          </View>
        </Modal>

            

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

        <Text style={styles.largeText}>{firstName}'s Top Traits</Text>

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
                <Text style={styles.traitText}>Effortless Transactions</Text>
            </View>
            <View style={styles.traitWithText}>
                <Fontisto name="clock" size={'50%'} color={themes.colors.grey} />
                <Text style={styles.traitText}>On Time</Text>
            </View>

        </View>
        
        <Text style={styles.largeText}>Recent Activity</Text>
        <PastDahaList feed={sampleFeed}/>
 
      <View style={styles.homeBar}>
        <Image
        source={Icons.home.light}
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
    color: themes.colors.white,
    fontSize: themes.fontSizes.title,
    //textAlign: "left",
    paddingTop: "10%",
    //paddingRight: '60%',
    marginRight: '50%'
  },
  xText: {
    color: themes.colors.grey,
    fontSize: themes.fontSizes.xText,
    textAlign: 'right',
    marginLeft: '85%',
    marginRight: '5%',
    marginTop: '10%',
    marginBottom: '10%'
  },
  requestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    backgroundColor: themes.colors.orange,
    borderRadius: 99999, 
}, 
requestedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    backgroundColor: themes.colors.grey,
    borderRadius: 99999, 
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
  settingsButton: {
      width: themes.imageSizes.settingsButton,
      height: themes.imageSizes.settingsButton,
      marginLeft: '50%'
  },
  postButton: {
    width: themes.imageSizes.postButton,
    height: themes.imageSizes.postButton,
  },
  profileTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '10%'
  },
  profilePhoto: {
    width: themes.imageSizes.profilePhoto,
    height: themes.imageSizes.profilePhoto,
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
    marginBottom: '5%'
    // justifyContent: 'space-between'
  },
  nameText: {
    fontSize: themes.fontSizes.title,
    fontFamily: 'Raleway',
    color: themes.colors.black
  },
  nameBox: {
    height: themes.imageSizes.profilePhoto,
    marginRight: '5%',
    marginLeft: '5%',
    justifyContent: 'space-between',
    width: '65%'
  },
  username: {
      fontSize: themes.fontSizes.largeBody,
      fontFamily: 'Raleway',
      color: themes.colors.black
  },
  stars: {
    flexDirection: 'row',
  },
  friendRequest: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  friendRequestText: {
    fontSize: themes.fontSizes.largeBody,
    fontFamily: 'Raleway',
    color: themes.colors.white,
    paddingTop: '2.5%',
    paddingBottom: '2.5%'
  },
  numbers: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '15%',
      marginRight: '15%',
      marginTop: '5%'
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
  modalView: {
    justifyContent: 'center',
    width: '80%',
    height: '35%',
    marginHorizontal: '10%',
    marginTop: '62.5%',
    //marginBottom: '20%',
    backgroundColor: themes.colors.white,
    shadowColor: themes.colors.black,
    shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 1,
      shadowRadius: 500,
      elevation: 5,
    borderRadius: 20,
    borderWidth: 0.25,
    borderColor: themes.colors.black
},
modalXText: {
  color: themes.colors.grey,
  fontSize: themes.fontSizes.xText,
  textAlign: 'right',
  marginRight: '5%',
  marginTop: '10%'
},
modalImage: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '10%'
},
requestNameText: {
  fontSize: themes.fontSizes.title,
  color: themes.colors.black,
  fontFamily: 'Raleway',
  textAlign: 'center',
  marginTop: '2.5%',
},
confirmationText: {
  fontSize: themes.fontSizes.largeBody,
  fontFamily: 'Raleway',
  color: themes.colors.black,
  textAlign: 'center',
  marginVertical: '5%',
  marginBottom: '10%'
},
});