import { View, Text, StyleSheet, Image, Pressable, TextInput, Modal } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { supabase } from '../../supabase/supabase';
import { useState, useEffect } from "react"
import NewPost from './new_post';
import { MaterialCommunityIcons, Fontisto, FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';




const Review = ({ navigation, route}) => {
    const { userInfo } = route.params;
    console.log("REVIEW", userInfo)
    const firstName = (userInfo[0].split(" "))[0]
    const [itemText, onChangeItem] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    let filledStar = <MaterialCommunityIcons name="star-four-points" size={'50%'} color={themes.colors.orange} />
    let unfilledStar = <MaterialCommunityIcons name="star-four-points-outline" size={'50%'} color={themes.colors.orange} />
    let orangeSubmit = <Pressable 
        style={styles.submitButton} 
        onPress={() => setModalVisible(true)}>
        <Text style={styles.submitText}>Submit</Text>
    </Pressable>
    let greySubmit = <View 
    style={styles.submitButtonUnfinished} 
    onPress={() => {navigation.navigate("home-screen")}}>
    <Text style={styles.submitText}>Submit</Text>
    </View>
    let firstStar, secondStar, thirdStar, fourthStar, fifthStar;
    let smileDisplayed, smileText;
    let bunnyDisplayed, bunnyText;
    let heartDisplayed, heartText;
    let checkBoxDisplayed, checkBoxText;
    let hangerDisplayed, hangerText;
    let soapDisplayed, soapText;
    let handshakeDisplayed, handshakeText;
    let clockDisplayed, clockText;
    let buttonDisplayed;
    const commentPlaceholder = 'How was your daha experience with ' + firstName + "?"
    const thanksForReviewing = 'Thank you for reviewing ' + firstName + "!"
    const[firstFilling, setFirstStar] = useState(false)
    const[secondFilling, setSecondStar] = useState(false)
    const[thirdFilling, setThirdStar] = useState(false)
    const[fourthFilling, setFourthStar] = useState(false)
    const[fifthFilling, setFifthStar] = useState(false)
    const [starFilling, setStarFilling] = useState(false)
    const[bunny, setBunnyColor] = useState(false)
    const [smile, setSmileColor] = useState(false)
    const [heart, setHeartColor] = useState(false)
    const [checkBox, setCheckboxColor] = useState(false)
    const [hanger, setHangerColor] = useState(false)
    const [soap, setSoapColor] = useState(false)
    const [handshake, setHandshakeColor] = useState(false)
    const [clock, setClockColor] = useState(false)

    if (firstFilling) {
        firstStar = filledStar
    }
    if (!firstFilling) {
        firstStar = unfilledStar
    }
    if (secondFilling) {
        secondStar = filledStar
    }
    if (!secondFilling) {
        secondStar = unfilledStar
    }
    if (thirdFilling) {
        thirdStar = filledStar
    }
    if (!thirdFilling) {
        thirdStar = unfilledStar
    }
    if (fourthFilling) {
        fourthStar = filledStar
    }
    if (!fourthFilling) {
        fourthStar = unfilledStar
    }
    if (fifthFilling) {
        fifthStar = filledStar
        buttonDisplayed = orangeSubmit
    }
    if (!fifthFilling) {
        fifthStar = unfilledStar
        buttonDisplayed = greySubmit
    }
    if (smile) {
        smileDisplayed = <FontAwesome5 name="smile-beam" size={'50%'} color={themes.colors.orange} />
        smileText = <Text style={styles.traitTextOrange}>Courteous</Text>
    }
    if (!smile) {
        smileDisplayed = <FontAwesome5 name="smile-beam" size={'50%'} color={themes.colors.grey} />
        smileText = <Text style={styles.traitText}>Courteous</Text>
    }
    if (bunny) {
        bunnyDisplayed = <MaterialCommunityIcons name="rabbit" size={'50%'} color={themes.colors.orange} />
        bunnyText = <Text style={styles.traitTextOrange}>Fast-Responder</Text>
    }
    if (!bunny) {
        bunnyDisplayed = <MaterialCommunityIcons name="rabbit" size={'50%'} color={themes.colors.grey} />
        bunnyText = <Text style={styles.traitText}>Fast-Responder</Text>
    }
    if (heart) {
        heartDisplayed = <MaterialCommunityIcons name="heart-plus" size={'50%'} color={themes.colors.orange} />
        heartText =  <Text style={styles.traitTextOrange}>Friendly</Text>
    }
    if (!heart) {
        heartDisplayed = <MaterialCommunityIcons name="heart-plus" size={'50%'} color={themes.colors.grey} />
        heartText = <Text style={styles.traitText}>Friendly</Text>
    }
    if (checkBox) {
        checkBoxDisplayed = <Fontisto name="checkbox-active" size={'50%'} color={themes.colors.orange} />
        checkBoxText= <Text style={styles.traitTextOrange}>Active</Text>

    }
    if (!checkBox) {
        checkBoxDisplayed = <Fontisto name="checkbox-active" size={'50%'} color={themes.colors.grey} />
        checkBoxText= <Text style={styles.traitText}>Active</Text>
    }
    if (hanger) {
        hangerDisplayed = <MaterialCommunityIcons name="hanger" size={'50%'} color={themes.colors.orange} />
        hangerText= <Text style={styles.traitTextOrange}>Organized</Text>

    }
    if (!hanger) {
        hangerDisplayed = <MaterialCommunityIcons name="hanger" size={'50%'} color={themes.colors.grey} />
        hangerText= <Text style={styles.traitText}>Organized</Text>
    }
    if (soap) {
        soapDisplayed = <MaterialIcons name="soap" size={'50%'} color={themes.colors.orange} />
        soapText = <Text style={styles.traitTextOrange}>Clean</Text>

    }
    if (!soap) {
        soapDisplayed = <MaterialIcons name="soap" size={'50%'} color={themes.colors.grey} />
        soapText = <Text style={styles.traitText}>Clean</Text>
    }
    if (handshake) {
        handshakeDisplayed = <FontAwesome name="handshake-o" size={'50%'} color={themes.colors.orange} />
        handshakeText = <Text style={styles.traitTextOrange}>Effortless Transactions</Text>

    }
    if (!handshake) {
        handshakeDisplayed = <FontAwesome name="handshake-o" size={'50%'} color={themes.colors.grey} />
        handshakeText = <Text style={styles.traitText}>Effortless Transactions</Text>
    }
    if (clock) {
        clockDisplayed = <Fontisto name="clock" size={'50%'} color={themes.colors.orange} />
        clockText = <Text style={styles.traitTextOrange}>On Time</Text>

    }
    if (!clock) {
        clockDisplayed = <Fontisto name="clock" size={'50%'} color={themes.colors.grey} />
        clockText = <Text style={styles.traitText}>On Time</Text>
    }

    let image; 

    if (userInfo[0] == "Lily Bailey"){
        image = <Image source={require("../../assets/Icons/lily.jpg")} style={styles.myDahaPhoto}></Image>
    } else if ((userInfo[0] == "Calvin Laughlin")){
        image = <Image source={require("../../assets/Icons/calvin.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (userInfo[0] == "Dan Healy"){
        image = <Image source={require("../../assets/Icons/dan.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (userInfo[0] == "Benjamin Zaidel"){
        image = image = <Image source={require("../../assets/Icons/benjamin.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (userInfo[0] == "Irene Au"){
        image = image = <Image source={require("../../assets/Icons/irene.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (userInfo[0] == "You"){
      image = image = <Image source={require("../../assets/Icons/james.jpg")} style={styles.myDahaPhoto}></Image>
    }



  return (
    
    <View style={styles.container}>
        <View style={styles.topBar}>
            <Text style={styles.topBarText}>
                Review
            </Text>
            <Pressable onPress={() => {navigation.navigate("home-screen")}}>
                <Text style={styles.xText}>✕</Text>
            </Pressable>
        </View>

        <View style={styles.reviewBox}>
            <View style={styles.starsBox}>
                <Text style={styles.largeText}>
                    Rate your experience*
                </Text>
                <View style={styles.stars} onPress={() => setStarFilling(!starFilling)}>
                    <Pressable onPress={() => setFirstStar(!firstFilling)}>
                        {fifthStar}
                    </Pressable>
                    <Pressable onPress={() => setSecondStar(!secondFilling)}>
                        {fifthStar}
                    </Pressable>
                    <Pressable onPress={() => setThirdStar(!thirdFilling)}>
                        {fifthStar}
                    </Pressable>
                    <Pressable onPress={() => setFourthStar(!fourthFilling)}>
                        {fifthStar}
                    </Pressable>
                    <Pressable onPress={() => setFifthStar(!fifthFilling)}>
                        {fifthStar}
                    </Pressable>
                </View>
            </View>

            <View style={styles.selectBox}>
                <Text style={styles.largeText}>
                    Select all that apply
                </Text>
                <View style={styles.traits}>
                    <Pressable style={styles.traitWithText} onPress={() => setBunnyColor(!bunny)}>
                        {bunnyDisplayed}
                        {bunnyText}
                    </Pressable>
                    <Pressable style={styles.traitWithText} onPress={() => setSmileColor(!smile)}>
                        {smileDisplayed}
                        {smileText}
                    </Pressable>
                    <Pressable style={styles.traitWithText} onPress={() => setHeartColor(!heart)}>
                        {heartDisplayed}
                        {heartText}
                    </Pressable>
                    <Pressable style={styles.traitWithText} onPress={() => setCheckboxColor(!checkBox)}>
                        {checkBoxDisplayed}
                        {checkBoxText}
                    </Pressable>

                </View>
                <View style={styles.traits}>
                    <Pressable style={styles.traitWithText} onPress={() => setHangerColor(!hanger)}>
                        {hangerDisplayed}
                        {hangerText}
                    </Pressable>
                    <Pressable style={styles.traitWithText} onPress={() => setSoapColor(!soap)}>
                        {soapDisplayed}
                        {soapText}
                    </Pressable>
                    <Pressable style={styles.traitWithText} onPress={() => setHandshakeColor(!handshake)}>
                        {handshakeDisplayed}
                        {handshakeText}
                    </Pressable>
                    <Pressable style={styles.traitWithText} onPress={() => setClockColor(!clock)}>
                        {clockDisplayed}
                        {clockText}
                    </Pressable>

                </View>

            </View>

            <View style={styles.commentBox}>
                <Text style={styles.largeText}>
                    Comment
                </Text>
                <TextInput style={styles.mediumText}
                onChangeText={onChangeItem}
                value={itemText}
                placeholder={commentPlaceholder}
                placeholderTextColor={themes.colors.grey}
                multiline={true}
                />
            </View>

        </View>


    
    <View>
        {buttonDisplayed}
    </View>
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
              onPress={() => {navigation.navigate("post-review", {origin: userInfo})}}
              onPressOut={() => setModalVisible(false)}
            >
              <Text style={styles.xText}>✕</Text>
            </Pressable>
            <View style={styles.stars}>{image}</View>
            <Text style={styles.reviewNameText}>
                {userInfo[0]}
            </Text>
            <View style={styles.reviewStars}>
                {filledStar}
                {filledStar}
                {filledStar}
                {filledStar}
                {filledStar}
            </View>
            <Text style={styles.thanksText}>{thanksForReviewing}</Text>
        </View>
      </Modal>

    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 8,
    width: '100%',
    paddingTop: '20%',
    backgroundColor: themes.colors.white,
    height: '100%',
  },
  xText: {
    color: themes.colors.grey,
    fontSize: 32,
    textAlign: 'right',
    marginRight: '5%',
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    backgroundColor: themes.colors.orange,
    borderRadius: 99999, 
    margin: '10%',
    marginLeft: '50%'
}, 
submitButtonUnfinished: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    backgroundColor: themes.colors.grey,
    borderRadius: 99999, 
    margin: '10%',
    marginLeft: '50%'
}, 
submitText: {
    fontSize: themes.fontSizes.subtitle,
    fontFamily: 'Raleway',
    color: themes.colors.white
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  topBarText: {
      fontSize: themes.fontSizes.title,
      color: themes.colors.black,
      fontFamily: 'Raleway'
  },
  largeText: {
    fontSize: themes.fontSizes.subtitle,
    fontFamily: 'Raleway',
    color: themes.colors.black,
  },
  reviewBox: {
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
    //backgroundColor: themes.colors.orange,
    height: '80%'
  },
  mediumText: {
      fontSize: themes.fontSizes.largeBody,
      fontFamily: 'Raleway',
      color: themes.colors.orange
  },
  commentBox: {
    height: '20%'
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%'
  },
  traits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '10%',
    alignItems: 'flex-start'
},
traitWithText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '27.5%',

},
traitText: {
    fontSize: themes.fontSizes.smallBody,
    color: themes.colors.grey,
    fontFamily: 'Raleway',
    marginTop: '5%',
    textAlign: 'center'
  },
  traitTextOrange: {
    fontSize: themes.fontSizes.smallBody,
    color: themes.colors.orange,
    fontFamily: 'Raleway',
    marginTop: '5%',
    textAlign: 'center'
  },
  
starsBox: {
    marginTop: '10%'
},
selectBox: {
    marginTop: '5%'
},
modalView: {
    justifyContent: 'center',
    width: '80%',
    height: '40%',
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
    borderWidth: 1,
    borderColor: themes.colors.black
},
myDahaPhoto: {
    width: 128,
    height: 128,
    borderRadius: 9999,
  },
  thanksText: {
    fontSize: themes.fontSizes.largeBody,
    fontFamily: 'Raleway',
    color: themes.colors.black,
    textAlign: 'center',
    marginVertical: '5%',
  },
  reviewNameText: {
    fontSize: themes.fontSizes.title,
    color: themes.colors.black,
    fontFamily: 'Raleway',
    textAlign: 'center',
    marginTop: '2.5%',
},
reviewStars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2.5%'
}
});
