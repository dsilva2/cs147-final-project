import { View, Text, StyleSheet, Image } from 'react-native';
import Icons from "../../assets/Icons";


// This is an example of destructuring props
// We can also take in the props as an object like so:
// const Comment = (props) =>
// and the props object will look like 
// props = {
//   commentUser: "Text",
//   timeStamp: "Text",
//   commentText: "Text"
// }
const Comment = ({ commentUser, timeStamp, commentText }) => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.name}>
            <Image
            source={Icons.home.dark}
            style={styles.homeBarButton}>
            </Image>
          {/* We put curly braces around variables to show their value in JSX */}
          <Text>{commentUser}</Text>
        </View>
        <Text>{timeStamp}</Text>
      </View>
      <Text>{commentText}</Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: '100%'
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4
  },
  profilePic: {
    height: 24,
    width: 24,
    borderRadius: '50%',
    marginRight: 4,
  },
});
