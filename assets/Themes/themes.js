import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const sz = (width + height) / (428 + 926)

export default Themes = {
    colors: {
        white: '#FCF5E5',
        orange: '#E65D00',
        black: '#272626',
        grey: '#736D6D',
        darkGrey: '#A8A8A8',
    },
    fontSizes: {
        subtitle: 22 * sz,
        largeBody: 17 * sz,
        mediumBody: 15 * sz, 
        smallBody: 13 * sz,
        title: 34 * sz,
        logo: 48 * sz,
        xText: 32 * sz,
    },
    imageSizes: {
        homeBarButton: 48 * sz,
        postButton: 80 * sz,
        profilePhoto: 128 * sz,
        settingsButton: 32 * sz,
        smallProfilePic: 24 * sz,
    },
    containerSizes: {
        feedItem: 160 * sz,
        suggestedFriendItem: 75 * sz,
        messageItem: 100 * sz,
    }
};