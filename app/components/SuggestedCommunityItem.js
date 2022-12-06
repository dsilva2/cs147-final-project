import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Pressable, ScrollView } from 'react-native';
import themes from '../../assets/Themes/themes';

export default function SuggestedCommunityItem ({navigation, name, numMembers}) {

    // let image; 
    // if (name == "FasionX"){
    //     image = <Image source={require("../../assets/Icons/FashionX.jpeg")}/>
    // }

    return (

        <View style={styles.container}>
            <Text>Some Community</Text>
            {/* <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.image}/> */}


        </View>
    )



}

const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'blue',
        height: '100%',
        width: '100%',
    }, 

    image: {
        // width: 70, 
        // height: 70,
        // aspectRatio: 1,
    }



})