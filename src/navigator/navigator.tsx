import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '../screens/splashScreen/splashScreen';
//app navigator
export function Navigator() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={SplashScreen}
                    name="splashScreen"
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
