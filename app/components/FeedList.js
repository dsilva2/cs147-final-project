import { StyleSheet, Image, SafeAreaView, Text, View, Pressable, FlatList } from "react-native";
import themes from "../../assets/Themes/themes";
import FeedItem from "./FeedItem";

export default function FeedList ({feed, navigation}) {


    const renderFeedItem = ({item}) => {
        return <FeedItem 
        postCreatorName={item.postCreatorName}
        itemNeeded={item.itemNeeded}
        sizeNeeded={item.sizeNeeded}
        colorNeeded={item.colorNeeded}
        occasionNeeded={item.occasionNeeded}
        dateNeededBy={item.dateNeededBy}
        dateReturnedBy={item.dateReturnedBy}
        details={item.details}
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