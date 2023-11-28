import messaging from '@react-native-firebase/messaging';
//function to get token for the device from firebase
export function getDeviceToken() {
    const messagingToken = messaging().getToken();

    //save token to db
}
