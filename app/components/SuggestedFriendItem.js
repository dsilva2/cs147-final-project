import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, ScrollView } from 'react-native';
import themes from '../../assets/Themes/themes';
import Icons from '../../assets/Icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function SuggestedFriendItem ({name, handle, navigation}) {

    const [addedUser, setAddedUser] = useState(false)

    const toAddButton = <Pressable style={styles.addButton} onPress={() => setAddedUser(true)}><Text style={styles.addText}>Add</Text></Pressable>
    const alreadyAddedButton = <Pressable style={styles.addedButton} onPress={() => setAddedUser(false)}><Text style={styles.addText}>Added</Text></Pressable>
    let addToDisplay = toAddButton; 

    if (addedUser){
        addToDisplay = alreadyAddedButton; 
    }

    let image; 

    if (name == "Lily Bailey"){
        image = <Image source={require("../../assets/Icons/lily.jpg")} style={styles.profileImage}></Image>
    } else if (name == "William Seymour"){
        image = <Image source={require("../../assets/Icons/william.jpg")} style={styles.profileImage}></Image>
    } else if ((name == "Calvin Laughlin")){
        image = <Image source={require("../../assets/Icons/calvin.jpg")} style={styles.profileImage}></Image>
    } else if (name == "Dan Healy"){
        image = <Image source={require("../../assets/Icons/dan.jpg")} style={styles.profileImage}></Image>
    } else if (name == "Benjamin Zaidel"){
        image = image = <Image source={require("../../assets/Icons/benjamin.jpg")} style={styles.profileImage}></Image>
    } else if (name == "Irene Au"){
        image = image = <Image source={require("../../assets/Icons/irene.jpg")} style={styles.profileImage}></Image>
    } else if (name == "You"){
        image = image = <Image source={require("../../assets/Icons/james.jpg")} style={styles.profileImage}></Image>
    } else if (name == "Rayan Rizvi"){
        image = image = <Image source={require("../../assets/Icons/rayan.jpg")} style={styles.profileImage}></Image>

    } else if (name == "Christian Pulisic"){
        image = image = <Image source={require("../../assets/Icons/christian.png")} style={styles.profileImage}></Image>

    }

    return (

        <Pressable style={styles.container} onPress={() => console.log("Clicked a suggested friend")}>
            <View style={styles.imageView}>
                {image}

            </View>

            <View style={styles.nameTextView}>
                <View style={styles.textComponents}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.nameText}>{handle}</Text>

                </View>
                

            </View>

            <View style={styles.buttonsView}>
                {/* <Pressable style={styles.addButton}>
                    <Text style={styles.addText}>Add</Text>
                </Pressable> */}
                {addToDisplay}

                {/* <Pressable onPress={() => console.log("Pressed X")}>
                    <Text style={styles.xText}>X</Text>
                </Pressable> */}


            </View>

        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: themes.containerSizes.suggestedFriendItem, 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',
        display: 'flex', 
        // backgroundColor: "red",

    },

    imageView: {
        // backgroundColor: 'yellow',
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    profileImage: {
        aspectRatio: 1,
        height: "80%",
        width: '80%',
        borderRadius: 99999,
        marginLeft: '35%',
    },

    nameTextView: {
        // backgroundColor: 'green',
        // marginTop: '5%',
        width: '40%',
        height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginBottom: '7.5%',
        // borderBottomWidth: 1,
    },

    nameText: {
        fontSize: themes.fontSizes.mediumBody, 
        fontFamily: "Raleway", 
        color: themes.colors.black

    },

    xText: {
        color: themes.colors.grey,
        fontSize: themes.fontSizes.xText,
        marginRight: '10%',
    },

    textComponents: {
        marginLeft: '17%',
        marginTop: '20%',
    },
    buttonsView: {
        // backgroundColor: 'green',
        width: '40%',
        height: '100%', 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        

    }, 

    addText: {
        fontFamily: "Raleway", 
        color: themes.colors.white

    },

    addButton: {
        backgroundColor: themes.colors.orange,
        width: '40%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99999,
        // marginRight: '10%',

    },

    addedButton: {
        backgroundColor: themes.colors.grey,
        width: '40%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99999,
        // marginRight: '10%',

    }

})