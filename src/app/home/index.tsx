import React, { useEffect, useState, useId, useRef } from 'react';
import { Alert, View, SectionList, Text } from 'react-native';
import { styles } from './styles';
import { Input } from '@/components/input';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';
import { Contact, ContactProps } from '@/components/contact';
import * as Contacts from 'expo-contacts';

import BottomSheet from '@gorhom/bottom-sheet';
import { Avatar } from '@/components/avatar';
import { Button } from '@/components/button';

type SectionListProps = {
  title: string;
  data: ContactProps[];
};

export default function Home() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState<Contacts.Contact>();
  const [contacts, setContacts] = useState<SectionListProps[]>([]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  async function handleOpenDetailsContact(id: string): Promise<void> {
    const response = await Contacts.getContactByIdAsync(id);
    setContact(response);
    handleBottomSheetOpen();
  }

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync({
          name,
          sort: 'firstName',
        });
        const list = data
          .map((ct) => ({
            id: ct?.id ?? useId(),
            name: ct.name,
            image: ct?.image,
          }))
          .reduce<SectionListProps[]>((acc: any, item) => {
            const firstLetter = item.name.charAt(0).toUpperCase();
            const existingEntry = acc.find(
              (entry: SectionListProps) => entry.title === firstLetter
            );
            if (existingEntry) {
              existingEntry.data.push(item);
            } else {
              acc.push({
                title: firstLetter,
                data: [item],
              });
            }
            return acc;
          }, []);
        setContacts(list);
        setContact(data[0]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Não foi possível carregar os contatos');
    }
  }

  useEffect(() => {
    fetchContacts();
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input style={styles.input}>
          <Feather
            name='search'
            size={16}
            color={theme.colors.slate[400]}
          />
          <Input.Field
            placeholder='Pesquisar pelo nome...'
            onChangeText={setName}
            value={name}
          ></Input.Field>
          <Feather
            name='x'
            size={16}
            color={theme.colors.slate[400]}
            onPress={() => setName('')}
          />
        </Input>
      </View>
      <SectionList
        sections={contacts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact
            onPress={() => handleOpenDetailsContact(item.id)}
            contact={item}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
      {contact && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[0.01, 284]}
          handleComponent={() => null}
          backgroundStyle={styles.bottomSheet}
        >
          <Avatar
            name={contact.name}
            variant='large'
            containerStyle={styles.avatar}
          />
          <View style={styles.details}>
            <Text style={styles.detailsName}>{contact.name}</Text>
            {contact?.phoneNumbers?.length && (
              <View style={styles.phoneNumber}>
                <Feather
                  name='phone'
                  size={18}
                  color={theme.colors.slate[300]}
                />
                <Text style={styles.phone}>
                  {contact.phoneNumbers[0].number}
                </Text>
              </View>
            )}
            <Button
              title='Fechar'
              onPress={handleBottomSheetClose}
            />
          </View>
        </BottomSheet>
      )}
    </View>
  );
}
