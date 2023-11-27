import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '../screens/splashScreen/splashScreen';
import { LoginScreen } from '../screens/loginScreen/loginScreen';
import { HomeScreen } from '../screens/chatScreen/homeScreen';
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
                <Stack.Screen
                    component={LoginScreen}
                    name="loginScreen"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={HomeScreen}
                    name="homeScreen"
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
