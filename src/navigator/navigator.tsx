import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
//app navigator
export function Navigator() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function Hello() {
        return <Text>Hello</Text>;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Hello} name="hello" />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
