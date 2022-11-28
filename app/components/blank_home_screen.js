import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>daha</Text>
 
      <View style={styles.homeBar}>
        <Image
        source={Icons.home.dark}
        style={styles.homeBarButton}>
        </Image>

        <Image
        source={Icons.search.light}
        style={styles.homeBarButton}>
        </Image>

        <Image
        source={Icons.post.dark}
        style={styles.postButton}>
        </Image>

        <Image
        source={Icons.message.light}
        style={styles.homeBarButton}>
        </Image>

        <Image
        source={Icons.profile.light}
        style={styles.homeBarButton}>
        </Image>
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
  titleText: {
    fontFamily: 'Lato-Black',
    color: themes.colors.orange,
    fontSize: 48,
    textAlign: "left",
    paddingTop: "10%",
    paddingRight: '60%'
  },
  homeBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    alignItems: 'center',
    paddingBottom: '5%',
  },
  homeBarButton: {
    width: 48,
    height: 48,
  },
  postButton: {
    width: 80,
    height: 80,
  }
});
