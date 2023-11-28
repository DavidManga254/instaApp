import { PermissionsAndroid, Text, StyleSheet, View, Image } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Contacts from 'expo-contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appKeys } from '../../constants/keys';

export function SplashScreen(props: { navigation: any }) {
    useEffect(() => {
        (async () => {
            //does app have notifications access
            const isNotificationsGranted: boolean = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            );

            //does app have access to read contacts
            const isContactGranted: boolean = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            );

            // does app have messsaging token
            const messageToken = await AsyncStorage.getItem(appKeys.messageToken);

            if (!isNotificationsGranted) {
                //request notifications permission
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
                setTimeout(() => {
                    props.navigation.navigate('loginScreen');
                }, 2000);
            } else if (!isContactGranted) {
                //request contacts permission
                await await Contacts.requestPermissionsAsync();
                setTimeout(() => {
                    props.navigation.navigate('loginScreen');
                }, 2000);
            } else if (messageToken === null) {
            } else {
                setTimeout(() => {
                    props.navigation.navigate('loginScreen');
                }, 2000);
            }
        })();
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <View style={styles.childView}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/splashicon.jpg')}
                        />
                    </View>
                    <Text style={styles.text}>Instachat</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    childView: {
        width: '100%',
    },
    imageView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '50%',
        margin: 0,
        objectFit: 'contain',
    },
    text: {
        textAlign: 'center',
        color: '#001815',
        fontSize: 30,
        marginTop: '5%',
    },
});
