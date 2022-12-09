import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import themes from '../../assets/Themes/themes';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect }from "react"

 

export default function MessageItem({postCreatorName, itemNeeded, sizeNeeded, colorNeeded, occasionNeeded, dateNeededBy, dateReturnedBy, details}){

    const navigation = useNavigation();

    let heartDisplayed;
    const [heart, setHeartColor] = useState(false)

    if (heart) {
        heartDisplayed = <AntDesign name="heart" size={'25%'} color={themes.colors.orange} />
    }
    if (!heart) {
        heartDisplayed = <AntDesign name="hearto" size={'25%'} color={themes.colors.orange} />
    }

    // let str = `../../assets/Icons/${name}.jpg`

    let str = "../../assets/Icons/dan.jpg"; 

    let image; 

    if (postCreatorName == "Christian Pulisic"){
        image = <Image source={require("../../assets/Icons/christian.png")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "William Seymour"){
        image = <Image source={require("../../assets/Icons/william.jpg")} style={styles.profileImage}></Image>
    } else if ((postCreatorName == "Ells Boone")){
        image = <Image source={require("../../assets/Icons/ells.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "Dan Healy"){
        image = <Image source={require("../../assets/Icons/dan.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "FashionX Group"){
        image = image = <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "Irene Au"){
        image = image = <Image source={require("../../assets/Icons/irene.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "Rayan Rizvi"){
        image = image = <Image source={require("../../assets/Icons/rayan.jpg")} style={styles.profileImage}></Image>
    }
    else if (postCreatorName == "Dakota Riemersma"){
        image = image = <Image source={require("../../assets/Icons/dakota.jpg")} style={styles.profileImage}></Image>
    }
    else if (postCreatorName == "Cat Harbour"){
        image = image = <Image source={require("../../assets/Icons/cat.jpeg")} style={styles.profileImage}></Image>
    }
    else if (postCreatorName == "SigEp Group"){
        image = image = <Image source={require("../../assets/Icons/sigep.png")} style={styles.profileImage}></Image>
    }
    else if (postCreatorName == "Chloe Raygoza"){
        image = image = <Image source={require("../../assets/Icons/chloe.jpeg")} style={styles.profileImage}></Image>
    }



    let postCreatorNameText = <Text style={styles.nameText}>{postCreatorName}</Text>

    if (postCreatorName == "You"){
        postCreatorNameText = <Text style={styles.nameTextYou}>{postCreatorName}</Text>

    }


    // if (postCreatorName == "Calvin Laughlin") str = "../../assets/Icons/calvin.jpg"
    // if (postCreatorName == "Irene Au") str = "../../assets/Icons/irene.jpg"
    // if (postCreatorName == "Dan Healy") str = "../../assets/Icons/dan.jpg"
    // if (postCreatorName == "Benjamin Zaidel") str = "../../assets/Icons/benjamin.jpg"

    let name = "Calvin Laughlin"

    // console.log(str)

    // let imageString = `../../assest/ProfileImages/${postCreatorName}.jpg`
    // console.log(imageString)

    return(
        <SafeAreaView>
        <Pressable style={styles.container}>
            <View style={styles.profileImageView}>
                {/* <Image source={require(str)} style={styles.profileImage}></Image> */}
                {image}
            </View>

            {/* <Pressable style={styles.postInfoView} onPress={() => {navigation.navigate("my-daha", { origin: [postCreatorName, itemNeeded, sizeNeeded, colorNeeded, occasionNeeded, dateNeededBy, dateReturnedBy, details] })}}> */}
            <Pressable style={styles.postInfoView} onPress={() => {navigation.navigate("my-daha", { origin: [postCreatorName, itemNeeded, sizeNeeded, colorNeeded, occasionNeeded, dateNeededBy, dateReturnedBy, details], makingNewPost: false })}}>

                {/* <Text style={styles.nameText}>{postCreatorName}</Text> */}
                {postCreatorNameText}
                
                <Text style={styles.itemDescriptionText}>{itemNeeded}</Text>
                <Text style={styles.needByText}>{dateNeededBy}</Text>


            </Pressable>
            <MaterialIcons name="keyboard-arrow-right" size={'33%'} color={themes.colors.black} />

            
        </Pressable>

        </SafeAreaView>

    )


}

const styles = StyleSheet.create({
    container: {

        backgroundColor: themes.colors.white,        
        flexDirection: 'row',
        display: 'flex',
        // height: '15%',
        height: themes.containerSizes.messageItem,
        width: '100%',
        //justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    profileImageView: {
        // backgroundColor: 'red',
        height: '100%',
        // flex: 3,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    profileImage:{
    
        width: '60%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: '50%',
        borderRadius: 9999,
    },

    postInfoView: {
        justifyContent: 'space-between',
        // backgroundColor: 'green',
        width: '60%',
        
    },
    
    nameText:{
        // marginBottom: '2.5%',
        fontFamily: 'Raleway',
        marginTop: "5%",
        marginLeft: '2.5%', 
        fontSize: themes.fontSizes.subtitle,
        color: themes.colors.black,
        fontFamily: 'Raleway',
    },
    
    itemDescriptionText: {
        marginLeft: '2.5%',
        fontSize: themes.fontSizes.mediumBody,
        color: themes.colors.black,
        fontFamily: 'Raleway',
        // marginBottom: '2.5%'
        // marginTop: "1%"
        marginTop: "2.5%",
        fontFamily: 'Raleway',
    },
    needByText: {
        marginLeft: '2.5%',
        // marginBottom: '2.5%',
        marginTop: "5%",
        fontSize: themes.fontSizes.smallBody, 
        color: themes.colors.black,
        fontFamily: 'Raleway',
        paddingBottom: '2%'
    },




})