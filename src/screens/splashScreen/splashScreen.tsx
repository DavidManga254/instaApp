import { PermissionsAndroid, Text, StyleSheet, View, Image } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SplashScreen(props: { navigation: any }) {
    useEffect(() => {
        (async () => {
            const isGranted: boolean = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            );

            if (!isGranted) {
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
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
