import { PermissionsAndroid, Text } from 'react-native';
import { useEffect } from 'react';

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

    return <Text>This will be splashscreen</Text>;
}
