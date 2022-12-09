//import * as React from 'react';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import { Feather } from '@expo/vector-icons';
import 'react-native-gesture-handler';

//var desiredItem = "Tell us in a few words what you’re looking to borrow..."
var desiredItem = "..asdf."
var detailsBlank = "Elaborate as you'd like..."





// const onPressPost = ({postCreatorName, itemText, sizeText, colorText, occasionText, detailsText}) => {
//   navigation.navigate("my-daha", { origin: [postCreatorName, itemText, sizeText, colorText, occasionText, detailsText] })
// }


export default function DMScreen({navigation, route}) {
    const { origin } = route.params;

    const routes = navigation.getState()?.routes;
    let prevRoute = routes[routes.length - 2].name;
    if (prevRoute == 'my-daha') {
        prevRoute = 'home-screen'
    }

    let image; 

    if (origin == "Christian Pulisic"){
        image = <Image source={require("../../assets/Icons/christian.png")} style={styles.profileImage}></Image>
    } else if (origin == "William Seymour"){
        image = <Image source={require("../../assets/Icons/william.jpg")} style={styles.profileImage}></Image>
    } else if ((origin == "Ells Boone")){
        image = <Image source={require("../../assets/Icons/ells.jpg")} style={styles.profileImage}></Image>
    } else if (origin == "Dan Healy"){
        image = <Image source={require("../../assets/Icons/dan.jpg")} style={styles.profileImage}></Image>
    } else if (origin == "FashionX Group"){
        image = image = <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.profileImage}></Image>
    } else if (origin == "Irene Au"){
        image = image = <Image source={require("../../assets/Icons/irene.jpg")} style={styles.profileImage}></Image>
    } else if (origin == "Rayan Rizvi"){
        image = image = <Image source={require("../../assets/Icons/rayan.jpg")} style={styles.profileImage}></Image>
    }
    else if (origin == "Dakota Riemersma"){
        image = image = <Image source={require("../../assets/Icons/dakota.jpg")} style={styles.profileImage}></Image>
    }
    else if (origin == "Cat Harbour"){
        image = image = <Image source={require("../../assets/Icons/cat.jpeg")} style={styles.profileImage}></Image>
    }
    else if (origin == "SigEp Group"){
        image = image = <Image source={require("../../assets/Icons/sigep.png")} style={styles.profileImage}></Image>
    }
    else if (origin == "Chloe Raygoza"){
        image = image = <Image source={require("../../assets/Icons/chloe.jpeg")} style={styles.profileImage}></Image>
    }
    else if (origin == "Benjamin Zaidel"){
        image = image = <Image source={require("../../assets/Icons/benjamin.jpg")} style={styles.profileImage}></Image>
    }
    else if (origin == "Lily Bailey"){
        image = image = <Image source={require("../../assets/Icons/lily.jpg")} style={styles.profileImage}></Image>
    }
    else if (origin == "Calvin Laughlin"){
        image = image = <Image source={require("../../assets/Icons/calvin.jpg")} style={styles.profileImage}></Image>
    }
    
  return (
    <View style={styles.container}>
        <View>
            <Pressable onPress={() => {navigation.navigate(prevRoute)}}>
                <Text style={styles.xText}>✕</Text>
            </Pressable>
            <View style={styles.topBar}>
                {image}
                <Text style={styles.nameText}>{origin}</Text>
            </View> 
        </View>
        <View style={styles.bottomButtons}>
            <Feather name="camera" size={'25%'} color={themes.colors.black} />
            <View style={styles.messageButton}>
                <Text style={styles.messageText}>Message </Text>
                <Text style={styles.sendText}>Send </Text>
            </View>

        </View>




      
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    alignItems: 'center',
    width: "100%",
    height: '100%',
    paddingTop: '10%',
    justifyContent: 'space-between'
  },
  xText: {
    color: themes.colors.grey,
    fontSize: themes.fontSizes.xText,
    textAlign: 'right',
    marginLeft: '85%',
    marginRight: '5%',
    marginTop: '10%'
  },
  bottomButtons: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginBottom: '15%'
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },

  
  nameText: {
    fontFamily: 'Raleway',
    color: themes.colors.black,
    fontSize: themes.fontSizes.subtitle,
    textAlign: "center",
    //paddingTop: "20%",
  },
profileImage:{
    width: '20%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: '50%',
    borderRadius: 9999,
},
messageButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themes.colors.black,
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%'
},
messageText: {
    fontFamily: 'Raleway',
    marginLeft: '2.5%',
    color: themes.colors.grey,
    fontSize: themes.fontSizes.mediumBody
},
sendText: {
    fontFamily: 'Raleway',
    marginRight: '2.5%',
    color: themes.colors.orange,
    fontSize: themes.fontSizes.mediumBody
}

});
