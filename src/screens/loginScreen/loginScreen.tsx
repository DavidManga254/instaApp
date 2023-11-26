import { Text, View, StyleSheet, Image } from 'react-native';
import { appStrings } from '../../constants/appStrings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';

export function LoginScreen() {
    return (
        <SafeAreaView>
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
                    <TextInput mode={'flat'} outlineColor="transparent" />
                </View>
                <View style={styles.emailForm}>
                    <Text style={styles.formLabel}>{appStrings.password}</Text>
                    <TextInput mode={'flat'} outlineColor="transparent" />
                </View>
            </View>
            <View style={styles.buttonView}>
                <View style={styles.centerView}>
                    <Button style={styles.buttonChild} mode="contained">
                        {appStrings.login}
                    </Button>
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
        padding: '5%',
    },
    childView: {
        width: '100%',
        paddingTop: '20%',
    },
    loginIntro: {
        textAlign: 'center',
    },
    loginTopic: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000E08',
        marginBottom: '5%',
    },
    googleIconView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
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
    },
    centerView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
    },
});
