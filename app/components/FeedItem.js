import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import themes from '../../assets/Themes/themes';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect }from "react"

 

export default function FeedItem({postCreatorName, itemNeeded, sizeNeeded, colorNeeded, occasionNeeded, dateNeededBy, dateReturnedBy, details}){

    const navigation = useNavigation();

    let needOrNeeds = "needs"; 
    if (postCreatorName === "You"){
        needOrNeeds = "need";
    }
    let heartDisplayed;
    const [heart, setHeartColor] = useState(false)

    if (heart) {
        heartDisplayed = <AntDesign name="heart" size={'25%'} color={themes.colors.grey} />
    }
    if (!heart) {
        heartDisplayed = <AntDesign name="hearto" size={'25%'} color={themes.colors.grey} />
    }

    // let str = `../../assets/Icons/${name}.jpg`

    let str = "../../assets/Icons/dan.jpg"; 

    let image; 

    if (postCreatorName == "Lily Bailey"){
        image = <Image source={require("../../assets/Icons/lily.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "William Seymour"){
        image = <Image source={require("../../assets/Icons/william.jpg")} style={styles.profileImage}></Image>
    } else if ((postCreatorName == "Calvin Laughlin")){
        image = <Image source={require("../../assets/Icons/calvin.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "Dan Healy"){
        image = <Image source={require("../../assets/Icons/dan.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "Benjamin Zaidel"){
        image = image = <Image source={require("../../assets/Icons/benjamin.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "Irene Au"){
        image = image = <Image source={require("../../assets/Icons/irene.jpg")} style={styles.profileImage}></Image>
    } else if (postCreatorName == "You"){
        image = image = <Image source={require("../../assets/Icons/james.jpg")} style={styles.profileImage}></Image>

    }



    let gotchaButton = <Pressable style={styles.gotchaButton} onPress={() => {navigation.navigate("new-post")}}><Text style={styles.gotchaText}>GOTCHU!</Text></Pressable>
    let postCreatorNameText = <Text style={styles.nameText}>{postCreatorName}</Text>

    if (postCreatorName == "You"){
        gotchaButton = <Pressable style={styles.gotchaButtonYou}></Pressable>
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
                
                <Text style={styles.itemDescriptionText}>{needOrNeeds} a {itemNeeded}</Text>
                <Text style={styles.needByText}>by {dateNeededBy}</Text>

                <View style={styles.postInfoButtonsView}>
                    <Pressable style={styles.leftmostInfoButton}>
                        <Ionicons name="chatbubble-outline" size={'25%'} color={themes.colors.grey} />
                    </Pressable>
                    <Pressable style={styles.infoButton}>
                        <AntDesign name="retweet" size={'25%'} color={themes.colors.grey} />
                    </Pressable>
                    <Pressable style={styles.infoButton} onPress={() => setHeartColor(!heart)}>
                        {heartDisplayed}
                    </Pressable>

                    {/* <Pressable style={styles.gotchaButton} onPress={() => {navigation.navigate("new-post")}}>
                        <Text style={styles.gotchaText}>Gotcha!</Text>

                    </Pressable> */}
                    {gotchaButton}

                </View>

            </Pressable>
            
        </Pressable>

        </SafeAreaView>

    )


}

const styles = StyleSheet.create({
    container: {

        backgroundColor: themes.colors.white,
        // backgroundColor: 'blue',
        
        flexDirection: 'row',
        display: 'flex',
        // height: '15%',
        height: 160,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: themes.colors.grey,
        borderBottomWidth: .25, 
        // aspectRatio: 1,
    }, 
    profileImageView: {
        // backgroundColor: 'red',
        height: '100%',
        // flex: 3,
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    profileImage:{
    
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: '50%',
        marginLeft: '20%',
        marginBottom: "35%"
    },

    postInfoView: {
        justifyContent: 'space-between',
        
    },

    postInfoButtonsView: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        // marginBottom: '2.5%',
        marginTop: "2.5%"
    }, 
    
    nameText:{
        // marginBottom: '2.5%',
        marginTop: "5%",
        marginLeft: '2.5%', 
        fontSize: themes.fontSizes.subtitle,
        color: themes.colors.black,
        fontFamily: 'Raleway',
    },

    nameTextYou: {
        // marginBottom: '2.5%',
        marginTop: "5%",
        marginLeft: '2.5%', 
        fontSize: themes.fontSizes.subtitle,
        color: themes.colors.orange,
        fontFamily: 'Raleway',
        

    },
    
    itemDescriptionText: {
        marginLeft: '2.5%',
        fontSize: themes.fontSizes.mediumBody,
        color: themes.colors.black,
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
        color: themes.colors.grey,
        fontFamily: 'Raleway',
    },

    leftmostInfoButton: {
        marginLeft: '2.5%',
    }, 

    infoButton: {
        marginLeft: '6%',
    }, 

    gotchaButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '16.5%',
        width: '30%',
        backgroundColor: themes.colors.orange,
        borderRadius: 99999,
    }, 
    
    gotchaText: {
        color: 'white',
        fontFamily: "RacingSansOne"
    }, 
    
    gotchaButtonYou: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
        width: '30%',
        backgroundColor: themes.colors.white,
        borderRadius: 99999,

    }


})