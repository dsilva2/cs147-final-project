import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TextInput, ScrollView } from 'react-native';
import themes from '../../assets/Themes/themes';
import Icons from '../../assets/Icons';
import { useState } from 'react';

export default function CommunityPage ({ navigation, route, communityAbout, communitiesData}){
    let params = route.params
    let communityName = params.communityName
    console.log(params)

    // let communityName = "HE"








    let sampleGroupMembers = [
        {name: "William Seymour", imageurl: "../../assets/Icons/william.jpg"},
        {name: "Dan Healy", imageurl: "../../assets/Icons/dan.jpg"},
        {name: "Lily Bailey", imageurl: "../../assets/Icons/lily.jpg"},
        {name: "Calvin Laughlin", imageurl: "../../assets/Icons/calvin.jpg"},
        {name: "Benjamin Zaidel", imageurl: "../../assets/Icons/benjamin.jpg"}, 
        {name: "Irene Au", imageurl: "../../assets/Icons/irene.jpg"},
        {name: "Drew Silva", imageurl: "../../assets/Icons/drew_picture.png"}
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

    let requestStatus;
    const [requestSent, sendRequest] = useState(false)

    const sentRequest = <View style={styles.requestButton} ><Text style={styles.requestText}>Request to Join</Text></View>
    const pendingRequest = <View style={styles.requestedButton}><Text style={styles.requestText}>Request Pending</Text></View>

    if (!requestSent) {
        requestStatus = sentRequest
    }
    if (requestSent) {
        requestStatus = pendingRequest
    }

    let communityProfileImage = <Image source={require("../../assets/Icons/FashionX.jpeg")} style={styles.communityImage}></Image>

    if (communityName == "Tour Guides"){
        communityProfileImage = <Image source={require("../../assets/Icons/tour_guides.png")} style={styles.communityImage}></Image>

    } else if (communityName == "Stanford SigEp"){
        communityProfileImage = <Image source={require("../../assets/Icons/sigep.png")} style={styles.communityImage}></Image>

    }



    return (
        <View style={styles.container}>

                <Pressable style={styles.xPressable} onPress={() => {navigation.navigate("explore-page")}}>
                    <Text style={styles.xText}>✕</Text>
                </Pressable>  
            

            <View style={styles.communityInfoAndButton} >
                

                {communityProfileImage}
                <Text style={styles.communityNameText}>{communityName}</Text>
                <Pressable style={styles.requestPressable} onPress={() => sendRequest(!requestSent)}>
                    {requestStatus}
                </Pressable>
            </View>

            <View style={styles.aboutSection}>
                <Text style={styles.aboutHeader}>About</Text>
                <View style={styles.aboutParagraph}>
                    <Text style={styles.aboutParagraphText}>Stanford FashionX aims to user in the next wave of innovators, creatives, and activists within the fashion industry. Those who challenge tradition, initiate progress, and solve fashion's looming questions.</Text>
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
                                img = <Image style={styles.memberImage} source={require("../../assets/Icons/lily.jpg")}/>
                            } 

                            let url = member.imageurl
                            return (
                            <View style={styles.memberImageAndTextView}>
                                <Pressable style={styles.imagePressable}>
                                    {img}
                                </Pressable>
                                <Text style={styles.memberNameText}>{member.name}</Text>
                            </View>
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