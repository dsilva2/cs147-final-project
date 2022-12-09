import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';
import 'react-native-gesture-handler';
import { supabase } from '../../supabase/supabase';
import { useState, useEffect } from "react"
import NewPost from './new_post';



const PreReview = ({ navigation, route}) => {
  const [data, setData] = useState()
  const { origin } = route.params;
  const { makingNewPost } = route.params

  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2].name;
  console.log(prevRoute.name)


  const orangeButton = <Pressable 
    style={styles.requestButton} 
    onPress={() => {navigation.navigate("review", { userInfo: origin})}}>
    <Text style={styles.writeReviewText}>Write a Review</Text>
    </Pressable>


  


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

    let ownImage = <Image source={require("../../assets/Icons/james.jpg")} style={styles.ownPhoto}></Image>

  return (
    
    <View style={styles.container}>
        <View style={styles.topBar}>
            <Text style={styles.topBarText}>
                Recent Activity
            </Text>
            <Pressable onPress={() => {navigation.navigate(prevRoute, { userInfo: origin, image })}}>
                <Text style={styles.xText}>✕</Text>
            </Pressable>
        </View>



      <Pressable>
        <View style={styles.dahaPhoto}>
            {ownImage}
            {image}
        </View>
        <View style={styles.dahaPhoto}>
            <Text style={styles.borrowedText}>You borrowed a {origin[1]} from {origin[0]}</Text>
        </View>
      </Pressable>


    <View style={styles.myDahaInfo}>
      {/* <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>{areOrIs} looking for</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[1]}</Text>
      </View> */}

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
          <Text style={styles.textInfo}>Needed by</Text>
        </View>
        <Text style={styles.itemInfo}>{origin[5]}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>Returned by</Text>
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
        <Text style={styles.statusText}>Fulfilled</Text>
        {/* <Text style={styles.statusText}>{status}</Text> */}
      </View>
    </View>
    {orangeButton}


    </View>
  );
};

export default PreReview;

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
    fontSize: themes.fontSizes.xText,
    textAlign: 'right',
    marginRight: '5%'
  },
  nameText: {
    color: themes.colors.black,
    fontSize: themes.fontSizes.title,
    fontFamily: 'Raleway',

  },
  myDahaInfo: {
    justifyContent: 'space-between'
  },
  myDahaPhoto: {
    width: themes.imageSizes.profilePhoto,
    height: themes.imageSizes.profilePhoto,
    borderRadius: 9999,
    marginRight: '-10%',
  },
  ownPhoto: {
    width: themes.imageSizes.profilePhoto,
    height: themes.imageSizes.profilePhoto,
    borderRadius: 9999,
    marginTop: '10%'
  },
  dahaPhoto: {
    flexDirection: 'row-reverse',
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
    fontSize: themes.fontSizes.largeBody,

  },
  itemInfo: {
    color: themes.colors.black,
    fontFamily: 'Raleway',
    fontSize: themes.fontSizes.largeBody,


  },
  statusText: {
    color: themes.colors.orange,
    fontFamily: 'Raleway',
    fontSize: themes.fontSizes.largeBody,

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
  requestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    backgroundColor: themes.colors.orange,
    borderRadius: 99999, 
    margin: '10%'
}, 
writeReviewText: {
    fontSize: themes.fontSizes.largeBody,
    fontFamily: 'Raleway',
    color: themes.colors.white
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  topBarText: {
      fontSize: themes.fontSizes.title,
      color: themes.colors.black,
      fontFamily: 'Raleway'
  },
  borrowedText: {
      fontSize: themes.fontSizes.subtitle,
      color: themes.colors.black,
      fontFamily: 'Raleway',
      marginHorizontal: '2.5%',
      textAlign: 'center'
  }
});
