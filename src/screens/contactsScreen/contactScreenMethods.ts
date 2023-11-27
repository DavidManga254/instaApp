import { Contact, Fields } from 'expo-contacts';

interface PhoneNumberInterface {
    number: string;
}
export interface ContactInterface {
    name: string;
    phoneNumber: PhoneNumberInterface[];
}
export function filterContacts(contactsList: Contact[]): ContactInterface[] | [] {
    if (contactsList.length === 0) {
        return [];
    } else {
        const filteredList: ContactInterface[] = contactsList.map((singleContact: any) => {
            return {
                name: singleContact.name,
                phoneNumber:
                    Array.isArray(singleContact.phoneNumbers) &&
                    singleContact.phoneNumbers.length > 0
                        ? singleContact.phoneNumbers.map((number: any) => {
                              return {
                                  number: number.number,
                              };
                          })
                        : [],
            };
        });

        return filteredList;
    }
}
