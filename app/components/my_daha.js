import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { supabase } from '../../supabase/supabase';
import { useState, useEffect } from "react"
import NewPost from './new_post';

// ORIGIN ARRAY IS SET UP 
// origin[0]: postCreatorName
// origin[1]: itemText
// origin[2]: sizeText
// origin[3]: colorText
// origin[4]: occasionText
// origin[5]: needByText
// origin[6]: returnByText
// origin[5]: detailsText


const MyDaha = ({ navigation, route}) => {
  const [data, setData] = useState()
  const { origin } = route.params;
  const { makingNewPost } = route.params



  


  let newPostObj; 
  if (makingNewPost){
    // DO THE STUFF TO SEND THIS INFO TO HOME SCREEN AND ADD TO THE ARRAY
    newPostObj = {
      name: "You",
      item: origin[1],
      size: origin[2], 
      color: origin[3],
      color: origin[4], 
      needBy: origin[5], 
      returnBy: origin[6],
      details: origin[7]
    }
  } else {
    newPostObj = null;
  }


  //const {data, error} = supabase.from('postInfo').select("*").then((res) => console.log(res))
  // console.log(makingNewPost)
  // console.log("HELLO")
  // console.log(origin)
  async function getData() {
    const {data, error} = await supabase.from('postInfo').select("*")
    if (data) {
      setData(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  // console.log(data)
  // const sampleFeed = [
  //   {
  //     postCreatorName: "Calvin Laughlin",
  //     itemNeeded: "banana costume",
  //     sizeNeeded: 'large',
  //     colorNeeded: 'yellow',
  //     occasionNeeded: 'party',
  //     dateNeededBy: "friday @ 5:00pm",
  //     dateReturnedBy: 'saturday @ noon',
  //     details: 'please help',
  //     returnDate: "saturday @ noon",
  //   }, 
  //   {
  //     postCreatorName: "Olivia Wang", 
  //     itemNeeded: "blue hat",
  //     dateNeededBy: "thursday @ 10:00am",
  //     returnDate: "saturday @ noon",
  //     dateReturnedBy: 'saturday @ noon',
  //   }, 
  //   {
  //     postCreatorName: "Ava Deconcini",
  //     itemNeeded: "Sweater Vest", 
  //     dateNeededBy: "Tuesday @ 4:30pm",
  //     returnDate: "saturday @ noon",
  //     dateReturnedBy: 'saturday @ noon',
  //   },
  //   {
  //     postCreatorName: "Christian Pulisic",
  //     itemNeeded: "Fur Coat", 
  //     dateNeededBy: "Wednesday @ 10:30am",
  //     returnDate: "saturday @ noon",
  //     dateReturnedBy: 'saturday @ noon',
  //   }, 
  //   {
  //     postCreatorName: "Irene Au", 
  //     itemNeeded: "Braun Watch", 
  //     dateNeededBy: "Wednesday @ 3:20pm",
  //     dateReturnedBy: 'saturday @ noon',
  //   }
  // ]
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].name, data[i].size, data[i].item)
  //   sampleFeed.push({postCreatorName: "Eli Waldman", itemNeeded: "Cape Cod sweatshirt", dateNeededBy: "Now", dateReturnedBy: 'tmo'})
  // }
  // console.log(sampleFeed)

  let areOrIs = "is"
  if (origin[0] == "You") areOrIs = "are"


  let image; 

    if (origin[0] == "Lily Bailey"){
        image = <Image source={require("../../assets/Icons/lily.jpg")} style={styles.myDahaPhoto}></Image>
    } else if ((origin[0] == "Calvin Laughlin")){
        image = <Image source={require("../../assets/Icons/calvin.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (origin[0] == "Dan Healy"){
        image = <Image source={require("../../assets/Icons/dan.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (origin[0] == "Benjamin Zaidel"){
        image = image = <Image source={require("../../assets/Icons/benjamin.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (origin[0] == "Irene Au"){
        image = image = <Image source={require("../../assets/Icons/irene.jpg")} style={styles.myDahaPhoto}></Image>
    } else if (origin[0] == "You"){
      image = image = <Image source={require("../../assets/Icons/james.jpg")} style={styles.myDahaPhoto}></Image>
    }

  return (
    
    <View style={styles.container}>

      <Pressable onPress={() => {navigation.navigate("home-screen", {newObj: newPostObj})}}>
        <Text style={styles.xText}>✕</Text>
      </Pressable>

        <View style={styles.dahaPhoto}>
            {/* <Image
            source={Icons.drew_photo.pic}
            style={styles.myDahaPhoto}>
            </Image> */}
            {image}
        </View>
        <View style={styles.dahaPhoto}>
            <Text style={styles.nameText}>{origin[0]}</Text>
        </View>


    <View style={styles.myDahaInfo}>
      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>{areOrIs} looking for</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[1]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Size</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[2]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Color</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[3]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Occasion</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[4]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Needs by</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[5]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Return by</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[6]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Details</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[7]}</Text>
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
      <Pressable onPress={() => {navigation.navigate("new-post")}}>
        <Image
          source={Icons.post_options.edit}
          style={styles.changePost}>
        </Image>
      </Pressable>

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
