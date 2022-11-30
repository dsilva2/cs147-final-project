import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import HomeScreen from './app/components/blank_home_screen';
import NewPost from './app/components/new_post';
import MyDaha from './app/components/my_daha';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home-screen" component={HomeScreen} />
          <Stack.Screen name="new-post" component={NewPost} />
          <Stack.Screen name="my-daha" component={MyDaha} />
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
