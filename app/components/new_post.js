import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';

export default function NewPost() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>daha</Text>
      <View style={styles.info}>
      <View style={styles.itemDescription}>
        <Text style={styles.largeText}>Item</Text>
        <Text style={styles.mediumText}>Tell us in a few words what you’re looking to borrow...</Text>
      </View>



      <View style={styles.itemInfo}>
        <View style={styles.textWithArrow}>
            <Text style={styles.largeText}>Size</Text>
        </View>
        <View style={styles.textWithArrow}>
            <Text style={styles.largeText}>Color</Text>
        </View>
        <View style={styles.textWithArrow}>
            <Text style={styles.largeText}>Occasion</Text>
        </View>

      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.largeText}>Need by</Text>
        <Text style={styles.largeText}>Return by</Text>
      </View>

      <View style={styles.itemDescription}>
        <Text style={styles.largeText}>Details</Text>
        <Text style={styles.mediumText}>Elaborate as you'd like...</Text>
      </View>


      <View style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </View>
      
      </View>

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
    marginLeft: '2.5%'
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
    marginBottom: '10%',
    marginLeft: '50%',
    marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,

  },
  postButtonText: {
    color: themes.colors.white,
    fontSize: 22,
  },

});
