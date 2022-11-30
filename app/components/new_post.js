import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

export default function NewPost({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>daha</Text>
      <View style={styles.info}>
        <Pressable style={styles.itemDescription} onPress={() => {navigation.navigate("my-daha")}}>
            <Text style={styles.largeText}>Item</Text>
            <Text style={styles.mediumText}>Tell us in a few words what you’re looking to borrow...</Text>
        </Pressable>



        <Pressable style={styles.textWithArrowBorder}>
            <Text style={styles.largeText}>Size</Text>
            <Text style={styles.largeText}>→</Text>
        </Pressable>

        <Pressable style={styles.textWithArrow}>
            <Text style={styles.largeText}>Color</Text>
            <Text style={styles.largeText}>→</Text>
        </Pressable>

        <Pressable style={styles.textWithArrow}>
            <Text style={styles.largeText}>Occasion</Text>
            <Text style={styles.largeText}>→</Text>
        </Pressable>

        <Pressable style={styles.textWithArrowBorder}>
            <Text style={styles.largeText}>Need by</Text>
            <Text style={styles.largeText}>→</Text>
        </Pressable>

        <Pressable style={styles.textWithArrow}>
            <Text style={styles.largeText}>Return by</Text>
            <Text style={styles.largeText}>→</Text>
        </Pressable>

        <Pressable style={styles.itemDescription}>
            <Text style={styles.largeText}>Details</Text>
            <Text style={styles.mediumText}>Elaborate as you'd like...</Text>
        </Pressable>


        

      </View>

        <Pressable style={styles.postButton} onPress={() => {navigation.navigate("home-screen")}}>
            <Text style={styles.postButtonText}>Post →</Text>
        </Pressable>

      



      
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    alignItems: 'center',
  },
  textWithArrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWithArrowBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%'
  },
  largeText: {
    color: themes.colors.black,
    fontSize: 22,
    textAlign: 'left',
    paddingBottom: '5%',
    justifyContent: 'space-between',
},
   itemInfo: {
    width: '100%',
    paddingBottom: '10%',
    paddingTop: '10%',
  },
  info: {
    //alignItems: 'left',
    //justifyContent: 'space-between',
    marginLeft: '2.5%',
    justifyContent: 'flex-start',
    width: '85%',
  },
  itemDescription: {
    width: '85%',
    paddingBottom: '10%',
    paddingTop: '10%',

  },
  titleText: {
    //fontFamily: 'Racing-Sans-One',
    color: themes.colors.orange,
    fontSize: 48,
    textAlign: "center",
    paddingTop: "20%",
  },
  mediumText: {
    color: themes.colors.darkGrey,
    fontSize: 17,
    textAlign: 'left',
},
postButton: {
    height: '5%',
    backgroundColor: themes.colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    flexDirection: 'row',
    marginLeft: '50%',
    marginTop: '20%'
  },
  postButtonText: {
    color: themes.colors.white,
    fontSize: 22,
    paddingLeft: '10%',
    paddingRight: '10%',
  },

});
