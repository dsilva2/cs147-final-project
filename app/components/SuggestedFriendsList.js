import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Pressable, ScrollView } from 'react-native';
// import themes from '../../assets/Themes/themes';
import Icons from '../../assets/Icons';
import SuggestedFriendItem from './SuggestedFriendItem';

export default function SuggestedFriendsList ({navigation, data}) {

    let sampleFriends = [
        {name: "Lily Bailey", handle: "@lilybailey"},
        {name: "Peter Ling", handle: "@pling"},
        {name: "William Seymour", handle: "@sway"}
    ]

    const renderSuggestedFriendItem = ({item}) => {
        return <SuggestedFriendItem 
        name={item.name}
        handle={item.handle}
        />
    }



    return (

        <ScrollView>
        <View style={styles.container}> 
            {/* <Text>What the fuck is up</Text> */}
            <View style={styles.testView}>
             
            </View>
            <FlatList
            style={styles.list}
            data={sampleFriends}
            renderItem={(item) => renderSuggestedFriendItem(item)}
            keyExtractor={(item, index) => index}
            >
            </FlatList>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'yellow',
        width: "100%",
        // height: '100%',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    }, 
    list: {
        backgroundColor: 'blue'
    }, 
    testView: {
        height: '50%',
    }
})