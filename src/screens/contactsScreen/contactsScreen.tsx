import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, FlatList, StyleSheet, View, Image } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import { filterContacts } from './contactScreenMethods';
import { MaterialIcons } from '@expo/vector-icons';
import { appStrings } from '../../constants/appStrings';
import { ContactInterface } from './contactScreenMethods';
export function ContactsScreen(props: { navigation: any }) {
    const [contacts, setContacts] = useState<ContactInterface[] | []>([]);
    useEffect(() => {
        (async () => {
            const { data } = await Contacts.getContactsAsync({});

            const contacts = filterContacts(data);

            setContacts(contacts);
        })();
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <View style={styles.header}>
                    <View style={styles.back}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </View>
                    <View style={styles.contactHeader}>
                        <Text style={styles.contactTitle}>{appStrings.selectContact}</Text>
                        <Text>
                            {contacts.length} {appStrings.contacts}
                        </Text>
                    </View>
                </View>
                {contacts.length > 0 ? (
                    <FlatList
                        style={styles.flatlist}
                        data={contacts}
                        renderItem={({ item }) => (
                            <View style={styles.contactView}>
                                <View style={styles.imageView}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../../assets/contact.png')}
                                    />
                                </View>
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>
                                        {item.phoneNumber[0] !== undefined
                                            ? item.phoneNumber[0].number
                                            : null}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                ) : (
                    <Text>No contacts</Text>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: '1%',
    },
    header: {
        backgroundColor: '#e5e5e5',
        padding: '1%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    back: {
        width: '15%',
    },
    contactHeader: {
        width: '50%',
    },
    contactTitle: {
        fontSize: 20,
    },
    imageView: {
        width: '15%',
    },
    image: {
        width: 50,
        height: 50,
        objectFit: 'contain',
    },
    contactView: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    flatlist: {
        marginBottom: '30%',
    },
});
