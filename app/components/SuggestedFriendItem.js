import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, ScrollView } from 'react-native';
import themes from '../../assets/Themes/themes';
import Icons from '../../assets/Icons';


export default function SuggestedFriendItem ({name, handle}) {

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

    }

    return (

        
        <SafeAreaView style={styles.container}>
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
                <Pressable style={styles.addButton} onPress={() => console.log("Pressed Add")}>
                    <Text style={styles.addText}>Add</Text>
                </Pressable>

                <Pressable onPress={() => console.log("Pressed X")}>
                    <Text style={styles.xText}>X</Text>
                </Pressable>


            </View>

        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75, 
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
        fontSize: 32,
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

    }

})