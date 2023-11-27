import { Text, View, StyleSheet, Image } from 'react-native';
import { appStrings } from '../../constants/appStrings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../loginScreen/loginScreen';
import { MaterialCommunityIcons } from 'expo-vector-icons';
import { AntDesign } from '@expo/vector-icons';
export function HomeScreen(props: { navigation: any }) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { paddingBottom: '1%', height: '7%' } }}>
            <Tab.Screen
                component={LoginScreen}
                name="Message"
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#24786D',
                    tabBarInactiveTintColor: '#797C7B',
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign
                            name="message1"
                            size={24}
                            color={focused ? '#24786D' : '#797C7B'}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                }}
            />
            <Tab.Screen
                component={LoginScreen}
                name="Contacts"
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#24786D',
                    tabBarInactiveTintColor: '#797C7B',
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign
                            name="contacts"
                            size={24}
                            color={focused ? '#24786D' : '#797C7B'}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                }}
            />
            <Tab.Screen
                component={LoginScreen}
                name="Settings"
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#24786D',
                    tabBarInactiveTintColor: '#797C7B',
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign
                            name="setting"
                            size={24}
                            color={focused ? '#24786D' : '#797C7B'}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                }}
            />
        </Tab.Navigator>
    );
}
