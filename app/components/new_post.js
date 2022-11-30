import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';

export default function NewPost() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>daha</Text>
      <View style={styles.itemDescription}>
        <Text style={styles.largeText}>Item</Text>
        <Text style={styles.mediumText}>Tell us in a few words what you’re looking to borrow...</Text>
      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.largeText}>Size</Text>
        <Text style={styles.largeText}>Color</Text>
        <Text style={styles.largeText}>Occasion</Text>
      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.largeText}>Need by</Text>
        <Text style={styles.largeText}>Return by</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemDescription: {
    height: '30%',
    width: '85%',
  },
  itemInfo: {
    height: '30%',
    width: '85%',
    paddingRight: '50%',
  },
  titleText: {
    //fontFamily: 'Lato-Black',
    color: themes.colors.orange,
    fontSize: 48,
    textAlign: "center",
    paddingTop: "20%",
  },
  largeText: {
      color: themes.colors.darkGrey,
      fontSize: 22,
      textAlign: 'left',
  },
  mediumText: {
    color: themes.colors.grey,
    fontSize: 17,
    textAlign: 'left',
},
});
