import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import themes from '../../assets/Themes/themes';

 

export default function FeedItem({navigation, postCreatorName, itemNeeded, dateNeededBy}){


    const pressedGotcha = () => {
        console.log(`Gotcha, ${postCreatorName}!`);
    }

    return(
        <SafeAreaView>
        <Pressable style={styles.container}>
            <View style={styles.profileImageView}>
                <Image source={require("../../assets/Icons/drew_picture.png")} style={styles.profileImage}></Image>
            </View>

            <View style={styles.postInfoView}>
                <Text style={styles.nameText}>{postCreatorName}</Text>
                
                <Text style={styles.itemDescriptionText}>needs a {itemNeeded}</Text>
                <Text style={styles.needByText}>by {dateNeededBy}</Text>

                <View style={styles.postInfoButtonsView}>
                    <Pressable style={styles.infoButton}>
                        <Ionicons name="chatbubble-outline" size={'25%'} color={themes.colors.grey} />
                    </Pressable>
                    <Pressable style={styles.infoButton}>
                        <AntDesign name="retweet" size={'25%'} color={themes.colors.grey} />
                    </Pressable>
                    <Pressable style={styles.infoButton}>
                        <AntDesign name="hearto" size={'25%'} color={themes.colors.grey} />
                    </Pressable>

                    <Pressable style={styles.gotchaButton} onPress={pressedGotcha}>
                        <Text style={styles.gotchaText}>Gotcha!</Text>

                    </Pressable>

                </View>

            </View>
            
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
        height: 125,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: themes.colors.grey,
        borderBottomWidth: 1, 
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
    },

    postInfoView: {
        justifyContent: 'space-between',
    },

    postInfoButtonsView: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        marginBottom: '2.5%',
    }, 
    
    nameText:{
        // marginBottom: '5%',
        marginTop: "5%",
        marginLeft: '2.5%', 
        fontSize: themes.fontSizes.subtitle,
        color: themes.colors.black,

    },
    itemDescriptionText: {
        marginLeft: '2.5%',
        fontSize: themes.fontSizes.mediumBody,
        color: themes.colors.black,
    },
    needByText: {
        marginLeft: '2.5%',
        marginBottom: '2.5%',
        fontSize: themes.fontSizes.smallBody, 
        color: themes.colors.grey,
    },

    infoButton: {
        marginLeft: '2.5%',
    }, 

    gotchaButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '25%',
        width: '30%',
        backgroundColor: themes.colors.orange,
        borderRadius: 99999,
    }, 

    gotchaText: {
        color: 'white',
    }


})