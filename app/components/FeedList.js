import { StyleSheet, Image, SafeAreaView, Text, View, Pressable, FlatList } from "react-native";
import themes from "../../assets/Themes/themes";
import FeedItem from "./FeedItem";

export default function FeedList ({feed, navigation}) {


    const renderFeedItem = ({item}) => {
        return <FeedItem 
        postCreatorName={item.postCreatorName}
        itemNeeded={item.itemNeeded}
        dateNeededBy={item.dateNeededBy}
        />
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList
                data={feed}
                renderItem={(item) => renderFeedItem(item)}
                keyExtractor={(item, index) => index}>
            </FlatList>


        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // backgroundColor: 'red',
        flex: 1,

    },
    
    
})