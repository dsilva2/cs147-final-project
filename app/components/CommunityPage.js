import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TextInput, ScrollView, Modal } from 'react-native';
import themes from '../../assets/Themes/themes';
import Icons from '../../assets/Icons';
import { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function CommunityPage ({ navigation, route, communitiesData}){
    let params = route.params
    let aboutParagraph = params.aboutParagraph
    let communityName = params.communityName
    console.log(params)

    let alreadyRequested = params.alreadyRequested

    if (!alreadyRequested) alreadyRequested = false; 
    console.log("***")
    console.log(alreadyRequested)
    // let communityName = "HE"

    const [modalVisible, setModalVisible] = useState(false)

    let sampleGroupMembers = [
        {name: "William Seymour"},
        {name: "Dan Healy"},
        {name: "Lily Bailey"},
        {name: "Calvin Laughlin"},
        {name: "Benjamin Zaidel"},
        {name: "Irene Au"},
        {name: "Drew Silva"},
        {name: "Rayan Rizvi"}
    ];

    // let someurl = "../../assets/Icons/william.jpg";

    // const mapAndRender = (sampleGroupMembers) => {
    //     sampleGroupMembers.map((member) => {
    //         return (
    //             <View>
    //                 <Image source={require(member.imageurl)} />

    //             </View>
    //         )
    //     })
    // }

    if (!alreadyRequested) alreadyRequested = false;

    let requestStatus;
    // let requestSent;

    const [requestSent, setRequestSend] = useState(false)

    // if (alreadyRequested) setRequestSend(true);


    

    const orangeRequest = <View style={styles.requestButton} ><Text style={styles.requestText}>Request to Join</Text></View>
    const greyRequest = <View style={styles.requestedButton}><Text style={styles.requestText}>Request Pending</Text></View>

    if (!requestSent) {
        requestStatus = orangeRequest
    } else {
        requestStatus = greyRequest
    }

    if (alreadyRequested){
        requestStatus = greyRequest

    }


    // if (!alreadyRequested) {
    //     requestStatus = orangeRequest
    // } else {
    //     requestStatus = greyRequest
    // }

    const onPressRequest = () => {

        setModalVisible();
        // if (!alreadyRequested){
            // setModalVisible();
        // } else {
        //     console.log("GOT HERE")
        //     requestStatus = orangeRequest
        //     alreadyRequested = false
        //     sendRequest(!requestSent)
        // }
        
    }

    let communityProfileImage = <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.communityImage}></Image>
    let modalImage = <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.modalImage}></Image>

    if (communityName == "Tour Guides"){
        communityProfileImage = <Image source={require("../../assets/Icons/tour_guides.png")} style={styles.communityImage}></Image>
        modalImage = <Image source={require("../../assets/Icons/tour_guides.png")} style={styles.modalImage}></Image>
    } else if (communityName == "Stanford SigEp"){
        communityProfileImage = <Image source={require("../../assets/Icons/sigep.png")} style={styles.communityImage}></Image>
        modalImage = <Image source={require("../../assets/Icons/sigep.png")} style={styles.modalImage}></Image>
    }


    



    return (
        <View style={styles.container}>

                <Pressable style={styles.xPressable} onPress={() => {navigation.navigate("explore-page")}}>
                    <Text style={styles.xText}>✕</Text>
                </Pressable>  
            

            <View style={styles.communityInfoAndButton} >
                

                {communityProfileImage}
                <Text style={styles.communityNameText}>{communityName}</Text>
                <Pressable style={styles.requestPressable} onPress={onPressRequest}>
                    {requestStatus}
                </Pressable>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(false);
                }}
                >
                    <View style={styles.modalView}> 
                    <Pressable
                    onPress={() => {navigation.navigate("community-page", {communityName: communityName, aboutParagraph: aboutParagraph, alreadyRequested: true})}}
                    onPressOut={() => setModalVisible(false)}
                    >
                     <Text style={styles.modalXText}>✕</Text>
                        {modalImage}
                     <Text style={styles.modalCommunityNameText}>{communityName}</Text>
                     <View style={styles.modalSubTextView}>
                        <Text style={styles.modalSubText} >Your request to join {communityName} has been sent!</Text>
                     </View>

                    </Pressable>
                    </View>
                </Modal>
            </View>

            <View style={styles.aboutSection}>
                <Text style={styles.aboutHeader}>About</Text>
                <View style={styles.aboutParagraph}>
                    <Text style={styles.aboutParagraphText}>{aboutParagraph}</Text>
                </View>

            </View>

            <View style={styles.memberSection}>
                <View style={styles.memberHeader}>
                    <Text style={styles.memberHeaderText}>Members</Text>
                    <Text style={styles.memberHeaderText}>{sampleGroupMembers.length}</Text>
                </View>


                <ScrollView style={styles.scrollArea}>
                    <View style={styles.mappedViewContainer}>
                        {sampleGroupMembers.map((member) => {

                            let img = <Image style={styles.memberImage} source={require("../../assets/Icons/william.jpg")}/>

                            if (member.name === "William Seymour"){
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/william.jpg")}/>
                            } else if (member.name === "Calvin Laughlin"){
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/calvin.jpg")}/>
                            } else if (member.name === "Lily Bailey"){
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/lily.jpg")}/>
                            } else if (member.name === "Irene Au"){
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/irene.jpg")}/>
                            } else if (member.name === "Dan Healy") {
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/dan.jpg")}/>
                            } else if (member.name === "Benjamin Zaidel") {
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/benjamin.jpg")}/>
                            } else if (member.name === "Rayan Rizvi") {
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/rayan.jpg")}/>
                            }


                            // {navigation.navigate("other-profile", {userInfo: member.name})}
                            return (
                            <Pressable style={styles.memberImageAndTextView}>
                                <Pressable style={styles.imagePressable} onPress={() => console.log(member.name)}>
                                    {img}
                                </Pressable>
                                <Text style={styles.memberNameText}>{member.name}</Text>
                            </Pressable>
                            )
                        })}
                    </View>
                </ScrollView>
                
            </View>


            
        </View>



    )

}

const styles = StyleSheet.create({

    container: {
        // justifyContent: 'space-between',
        padding: 8,
        width: '100%',
        paddingTop: '20%',
        backgroundColor: themes.colors.white,
        height: '100%',
        alignItems: 'center',
    },

    xPressable: {
        alignSelf: 'flex-end',
    },

    xText: {
        color: themes.colors.grey,
        fontSize: 32,
        textAlign: 'right',
        marginRight: '5%'
      },   

    communityInfoAndButton: {
        // backgroundColor: 'red',
        // justifyContent: 'center'
        alignItems: 'center',
        width: '100%',
        height: '25%',

    }, 

    communityImage: {
        height: "55%",
        width: "55%",
        aspectRatio: 1,
        borderRadius: 15,
        

    }, 

    communityNameText: {
        fontSize: themes.fontSizes.title,
        fontFamily: "Raleway", 
        color: themes.colors.black,
        marginTop: '2.5%',

    },

    requestPressable: {
        marginTop: '2.5%',
        width: "45%",
        // backgroundColor: 'red'
        // height: '100%',
        height: '20%',

    },

    requestButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        backgroundColor: themes.colors.orange,
        borderRadius: 99999, 
    }, 

    requestedButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        backgroundColor: themes.colors.grey,
        borderRadius: 99999, 

    }, 

    requestText: {
        fontSize: themes.fontSizes.largeBody, 
        fontFamily: 'Raleway',
        color: themes.colors.white,
        

        
    }, 

    modalXText: {
        color: themes.colors.grey,
        fontSize: 32,
        textAlign: 'right',
        marginRight: '5%',
      },

      modalCommunityNameText: {
        fontSize: themes.fontSizes.title,
        color: themes.colors.black,
        fontFamily: 'Raleway',
        textAlign: 'center',
        marginTop: '2.5%',
    },

    modalSubTextView: {
        // marginTop: '2.5%',
        alignSelf: 'center',
        // backgroundColor: 'blue',
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },

    modalSubText: {
        fontSize: themes.fontSizes.largeBody,
        textAlign: 'center',
        fontFamily: "Raleway",
        lineHeight: "25%",
    },

    modalImage: {
        
        // justifyContent: 'center',
        // marginTop: '10%', 
        // marginLeft: '50%',
        aspectRatio: 1,
        // width: '50%',
        // height: '50%',
        alignSelf: 'center',
        height: "50%",
        width: "50%",
        borderRadius: 10,

      },


    aboutSection: {
        marginTop: '7.5%',
        width: '90%',
        // height: "30%",
        // backgroundColor: 'yellow',
        // backgroundColor: 'blue',
        alignSelf: 'center',
    },

    aboutHeader: {
        fontSize: themes.fontSizes.subtitle,
        fontFamily: 'Raleway',
        color: themes.colors.black, 
        // marginBottom: '2.5%',


    }, 

    aboutParagraph: {
        width: '100%',
        
    }, 

    aboutParagraphText: {

        color: themes.colors.black, 
        fontFamily: "Raleway",
        fontSize: themes.fontSizes.largeBody,
        lineHeight: 25,
        // backgroundColor: 'green',
    },

    memberSection: {
        marginTop: '10%',
        width: '90%',
        // backgroundColor: 'red',
    }, 

    memberHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5%',

    },

    modalView: {
        justifyContent: 'center',
        width: '80%',
        height: '40%',
        marginHorizontal: '10%',
        marginTop: '62.5%',
        //marginBottom: '20%',
        backgroundColor: themes.colors.white,
        // backgroundColor: 'blue',
        shadowColor: themes.colors.black,
        shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 1,
          shadowRadius: 500,
          elevation: 5,
        borderRadius: 20,
        borderWidth: 0.25,
        borderColor: themes.colors.black
    },

    memberHeaderText: {
        fontFamily: 'Raleway',
        fontSize: themes.fontSizes.subtitle,


    }, 

    mappedViewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
        width: '100%',
        
    },

    imagePressable: {
        flexDirection: 'row',
        
        // backgroundColor: 'green',
        // height: '50%',
    },

    memberImage: {
        
        aspectRatio: 1,
        width: '85%',
        height: '85%',
        // width: "100%",
        // height: "100%",
        borderRadius: 10,

    }, 

    memberImageAndTextView: {
        width: '33%',
        // backgroundColor: 'red',
        // borderWidth: 1,
        alignItems: 'center',
        // justifyContent: 'space-between'
        marginBottom: "10%",
        // backgroundColor: 'red',
    },

    memberNameText: {
        color: themes.colors.black,
        fontFamily: 'Raleway',
        fontSize: themes.fontSizes.smallBody,



    },

    scrollArea: {
        width: '100%',
        height: '100%',
        flexWrap: 'wrap'
    }, 


    


})