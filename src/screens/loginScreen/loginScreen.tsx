import { Text, View, StyleSheet, Image } from 'react-native';
import { appStrings } from '../../constants/appStrings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { userDetails } from './interfaces';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
export function LoginScreen(props: { navigation: any }) {
    const [userDetails, setUserDetails] = useState<userDetails>({
        email: '',
        password: '',
    });
    const [secureText, setSecureText] = useState<boolean>(true);
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled={false}
            >
                <View style={styles.screen}>
                    <View style={styles.childView}>
                        <Text style={styles.loginTopic}>{appStrings.loginTopic}</Text>
                        <Text style={styles.loginIntro}>{appStrings.logInIntro}</Text>
                    </View>
                    <View style={styles.googleIconView}>
                        <Image
                            style={styles.googleIconImage}
                            source={require('../../../assets/googleIcon.jpg')}
                        />
                    </View>
                    <Text style={styles.or}>{appStrings.or}</Text>
                    <View style={styles.emailForm}>
                        <Text style={styles.formLabel}>{appStrings.email}</Text>
                        <TextInput
                            onChangeText={(value) => {
                                setUserDetails((previous) => {
                                    return {
                                        ...previous,
                                        email: value,
                                    };
                                });
                            }}
                            mode={'flat'}
                            outlineColor="transparent"
                        />
                    </View>
                    <View style={styles.emailForm}>
                        <Text style={styles.formLabel}>{appStrings.password}</Text>
                        <TextInput
                            right={
                                <TextInput.Icon
                                    onTouchEnd={() => setSecureText(!secureText)}
                                    icon={secureText ? 'eye' : 'eye-off'}
                                />
                            }
                            secureTextEntry={secureText}
                            onChangeText={(value) => {
                                setUserDetails((previous) => {
                                    return {
                                        ...previous,
                                        password: value,
                                    };
                                });
                            }}
                            mode={'flat'}
                            outlineColor="transparent"
                        />
                    </View>
                </View>

                <View style={styles.buttonView}>
                    <View style={styles.centerView}>
                        <Button
                            onPress={() => props.navigation.navigate('homeScreen')}
                            disabled={
                                userDetails.email.length == 0 || userDetails.password.length == 0
                                    ? true
                                    : false
                            }
                            buttonColor="#24786D"
                            labelStyle={{ fontSize: 20 }}
                            style={styles.buttonChild}
                            mode="contained"
                        >
                            {appStrings.login}
                        </Button>
                    </View>
                    <Text style={styles.forgot}>{appStrings.forgotPassword}</Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: '5%',
    },
    childView: {
        width: '100%',
        paddingTop: '5%',
    },
    loginIntro: {
        textAlign: 'center',
    },
    loginTopic: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000E08',
        marginBottom: '3%',
    },
    googleIconView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        width: '100%',
    },
    googleIconImage: {
        objectFit: 'fill',
        width: 60,
        height: 60,
    },
    or: {
        textAlign: 'center',
        marginTop: '5%',
    },
    emailForm: {
        marginTop: '10%',
    },
    formLabel: {
        color: '#24786D',
        fontSize: 15,
        fontWeight: '400',
        marginBottom: '3%',
    },
    buttonView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    buttonChild: {
        width: '80%',
        fontSize: 40,
    },
    centerView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
    },
    forgot: {
        textAlign: 'center',
        marginBottom: '10%',
        color: '#24786D',
        fontWeight: '500',
    },
});
