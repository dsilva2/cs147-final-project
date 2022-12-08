//import * as React from 'react';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//var desiredItem = "Tell us in a few words what you’re looking to borrow..."
var desiredItem = "..asdf."
var detailsBlank = "Elaborate as you'd like..."



// const onPressPost = ({postCreatorName, itemText, sizeText, colorText, occasionText, detailsText}) => {
//   navigation.navigate("my-daha", { origin: [postCreatorName, itemText, sizeText, colorText, occasionText, detailsText] })
// }


export default function NewPost({navigation, sampleFeed, setFeed}) {
    const [itemText, onChangeItem] = useState('');
    const [sizeText, onChangeSize] = useState('');
    const [colorText, onChangeColor] = useState('');
    const [occasionText, onChangeOccasion] = useState('');
    const [detailsText, onChangeDetails] = useState('');
    const [needByText, onChangeNeedBy] = useState('');
    const [returnByText, onChangeReturnBy] = useState('');
    const postCreatorName = "You"

    // postCreatorName: "Calvin Laughlin",
    //   itemNeeded: "banana costume",
    //   sizeNeeded: 'large',
    //   colorNeeded: 'yellow',
    //   occasionNeeded: 'party',
    //   dateNeededBy: "friday @ 5:00pm",
    //   dateReturnedBy: 'saturday @ noon',
    //   details: 'please help',
    //   returnDate: "saturday @ noon",

    let newPostObj = {
      postCreatorName: postCreatorName,
      itemNeeded: itemText, 
      sizeNeeded: sizeText,
      colorNeeded: colorText, 
      occasionNeeded: occasionText,
      dateNeededBy: "Some Sample Date",
      dateReturnedBy: "Some Other Sample Day",
      details: detailsText,
      returnDate: "Some Return Day", 
    }

    // console.log(item)
    
  return (
    <View style={styles.container}>
      <View style={styles.info}>

            <View style={styles.topBar}>
                <Text style={styles.titleText}>daha</Text>
                <Pressable onPress={() => {navigation.navigate("home-screen")}}>
                    <Text style={styles.xText}>✕</Text>
                </Pressable>
            </View> 

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Item*</Text>

            <TextInput style={styles.mediumText}
                onChangeText={onChangeItem}
                value={itemText}
                placeholder="Tell us what you’re looking to borrow..."
                placeholderTextColor={themes.colors.grey}
            />
        </Pressable>

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Size</Text>

            <TextInput style={styles.mediumText}
                onChangeText={onChangeSize}
                value={sizeText}
                placeholder="Any size, 9.5, 27x33, ..."
                placeholderTextColor={themes.colors.grey}
            />
        </Pressable>

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Color</Text>

            <TextInput style={styles.mediumText}
                onChangeText={onChangeColor}
                value={colorText}
                placeholder="Any color, navy blue, tie-dye..."
                placeholderTextColor={themes.colors.grey}
            />
        </Pressable>

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Occasion</Text>

            <TextInput style={styles.mediumText}
                onChangeText={onChangeOccasion}
                value={occasionText}
                placeholder="Date, dance, class..."
                placeholderTextColor={themes.colors.grey}
            />
        </Pressable>

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Need by*</Text> 
            <TextInput style={styles.mediumText}
                onChangeText={onChangeNeedBy}
                value={needByText}
                placeholder="tomorrow @ 7pm, asap..."
                placeholderTextColor={themes.colors.grey}
            />
            {/* <Text style={styles.largeText}>→</Text> */}
        </Pressable>

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Return by*</Text>
            <TextInput style={styles.mediumText}
                onChangeText={onChangeReturnBy}
                value={returnByText}
                placeholder="thursday @ 2pm..."
                placeholderTextColor={themes.colors.grey}
            />
            {/* <Text style={styles.largeText}>→</Text> */}
        </Pressable>

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Details</Text>
            <TextInput style={styles.mediumText}
            onChangeText={onChangeDetails}
            value={detailsText}
            //multiline={true}
            placeholder="Elaborate as you'd like..."
            placeholderTextColor={themes.colors.grey}/>       
        </Pressable>

    

        

      </View>
      {/* <Pressable style={styles.postButtonImage} onPress={() => {navigation.navigate("my-daha", { origin: [postCreatorName, itemText, sizeText, colorText, occasionText, detailsText] }); setFeed([...sampleFeed, {name: postCreatorName, item: itemText, size: sizeText, color: colorText,}])}}> */}
      <Pressable style={styles.postButtonImage} onPress={() => {navigation.navigate("my-daha", { origin: [postCreatorName, itemText, sizeText, colorText, occasionText, needByText, returnByText, detailsText], makingNewPost: true })}}>

        <Image
            source={Icons.post_button.orange}
            style={styles.myDahaPhoto}>
        </Image>
      </Pressable>
            
        {/* <Pressable style={styles.postButton} onPress={() => {navigation.navigate("my-daha", { origin: [itemText, detailsText] })}}>
            <Text style={styles.postButtonText}>Post →</Text>
        </Pressable> */}




      
      

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
  },
  xText: {
    color: themes.colors.grey,
    fontSize: themes.fontSizes.xText,
    textAlign: 'right',
    marginLeft: '85%',
    marginRight: '5%'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: '85%',
    paddingRight: '25%',
    alignItems: 'center'
  },
  textWithArrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWithArrowBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20%'
  },
  largeText: {
    color: themes.colors.black,
    fontSize: themes.fontSizes.subtitle,
    textAlign: 'left',
    paddingBottom: '5%',
    justifyContent: 'space-between',
    fontFamily: 'Raleway'
},
   itemInfo: {
    width: '100%',
    paddingBottom: '10%',
    paddingTop: '10%',
  },
  info: {
    marginLeft: '2.5%',
    justifyContent: 'space-between',
    width: '85%',
    height: '80%'
  },
  itemDescription: {
    width: '85%',
    //paddingBottom: '5%',
    paddingTop: '5%',

  },
  titleText: {
    fontFamily: 'RacingSansOne',
    color: themes.colors.orange,
    fontSize: themes.fontSizes.logo,
    textAlign: "center",
    //paddingTop: "20%",
  },
  mediumText: {
    color: themes.colors.orange,
    fontSize: 17,
    textAlign: 'left',
    width: '100%',
    fontFamily: 'Raleway',

},
postButton: {
    height: '5%',
    backgroundColor: themes.colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    flexDirection: 'row',
    marginLeft: '50%',
    marginTop: '20%'
  },
  postButtonText: {
    color: themes.colors.white,
    fontSize: themes.fontSizes.subtitle,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  postButtonImage: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginLeft: '50%',
    marginTop: '10%'
  },

});
