import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';


export default function SplashScreenMotto({navigation}) {
    setTimeout(() => {
        navigation.navigate("home-screen"); //this.props.navigation.navigate('Login')
    }, 3000);
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>does anyone have a...</Text>
        <Text style={styles.subText}>explore your community's closet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: '100%',
  },
  
  titleText: {
    fontFamily: 'RacingSansOne',
    color: themes.colors.orange,
    fontSize: themes.fontSizes.title,
  },
  subText: {
      fontFamily: 'Raleway',
      color: themes.colors.black,
      fontSize: themes.fontSizes.largeBody

  }

});
