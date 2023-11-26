import { PermissionsAndroid, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SplashScreen() {
    useEffect(() => {
        (async () => {
            const isGranted: boolean = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            );

            if (!isGranted) {
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
            }
        })();
    }, []);

    return (
        <SafeAreaView>
            <Text style={styles.text}>This will be splashsc</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    text: {
        color: 'red',
    },
});
