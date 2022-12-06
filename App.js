import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import HomeScreen from './app/components/blank_home_screen';
import NewPost from './app/components/new_post';
import MyDaha from './app/components/my_daha';
import OwnProfile from './app/components/own_profile';
import OtherProfile from './app/components/other_profile';
import PreReview from './app/components/pre-review';
import Review from './app/components/review';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import PostReview from './app/components/post-review';


const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    RacingSansOne: require('./assets/Fonts/Racing_Sans_One/RacingSansOne-Regular.ttf'),
    Raleway: require('./assets/Fonts/Raleway/static/Raleway-Regular.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home-screen" component={HomeScreen} />
          <Stack.Screen name="new-post" component={NewPost} />
          <Stack.Screen name="my-daha" component={MyDaha} />
          <Stack.Screen name="own-profile" component={OwnProfile} />
          <Stack.Screen name="other-profile" component={OtherProfile} />
          <Stack.Screen name="pre-review" component={PreReview} />
          <Stack.Screen name="review" component={Review} />
          <Stack.Screen name="post-review" component={PostReview} />


      </Stack.Navigator>
            
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
