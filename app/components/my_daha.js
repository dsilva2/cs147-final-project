import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';



// This is an example of destructuring props
// We can also take in the props as an object like so:
// const Comment = (props) =>
// and the props object will look like 
// props = {
//   commentUser: "Text",
//   timeStamp: "Text",
//   commentText: "Text"
// }
const MyDaha = ({ navigation, route, isLookingFor, size, color, occasion, needsBy, returnBy, details, status }) => {
  const { origin } = route.params;

  return (
    
    <View style={styles.container}>
      <Pressable onPress={() => {navigation.navigate("new-post")}}>
        <Text style={styles.xText}>✕</Text>
      </Pressable>

        <View style={styles.dahaPhoto}>
            <Image
            source={Icons.drew_photo.dope}
            style={styles.myDahaPhoto}>
            </Image>
        </View>
        <View style={styles.dahaPhoto}>
            <Text style={styles.nameText}>Drew Silva</Text>
        </View>


    <View style={styles.myDahaInfo}>
      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>is looking for</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[0]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Size</Text>
        </View>
        <Text style={styles.itemInfo}>{size}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Color</Text>
        </View>
        <Text style={styles.itemInfo}>{color}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Occasion</Text>
        </View>
        <Text style={styles.itemInfo}>{occasion}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Needs by</Text>
        </View>
        <Text style={styles.itemInfo}>{needsBy}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Return by</Text>
        </View>
        <Text style={styles.itemInfo}>{returnBy}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Details</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[1]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Status</Text>
        </View>
        <Text style={styles.statusText}>Unfulfilled</Text>
        {/* <Text style={styles.statusText}>{status}</Text> */}
      </View>
    </View>

    <View style={styles.bottomIcons}>
            <Image
            source={Icons.post_options.edit}
            style={styles.changePost}>
            </Image>

            <Image
            source={Icons.post_options.delete}
            style={styles.changePost}>
            </Image>
    </View>

    </View>
  );
};

export default MyDaha;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 8,
    width: '100%',
    paddingTop: '20%',
    backgroundColor: themes.colors.white,
    height: '100%',
  },
  xText: {
    color: themes.colors.grey,
    fontSize: 32,
    textAlign: 'right',
    marginRight: '5%'
  },
  nameText: {
    color: themes.colors.black,
    fontSize: 34,
    fontFamily: 'Raleway',

  },
  myDahaInfo: {
    justifyContent: 'space-between'
  },
  myDahaPhoto: {
    width: 128,
    height: 128,
    borderRadius: 9999,
  },
  dahaPhoto: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '5%'
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: '10%',
    paddingBottom: '10%',
    marginRight: '5%'
  },
  changePost: {
    width: 32,
    height: 32,
    marginLeft: '5%'
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInfo: {
    color: themes.colors.grey,
    fontFamily: 'Raleway',
    fontSize: 17

  },
  itemInfo: {
    color: themes.colors.black,
    fontFamily: 'Raleway',
    fontSize: 17


  },
  statusText: {
    color: themes.colors.orange,
    fontFamily: 'Raleway',
    fontSize: 17

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
    marginTop: '7.5%',
    marginLeft: '5%',
    marginRight: '5%',
    //paddingTop: 50

  },
  profilePic: {
    height: 24,
    width: 24,
    borderRadius: '50%',
    marginRight: 4,
  },
});
