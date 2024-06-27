import React, { useEffect, useState, useId } from 'react';
import { Alert, View, SectionList, Text } from 'react-native';
import { styles } from './styles';
import { Input } from '@/components/input';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';
import { Contact, ContactProps } from '@/components/contact';
import * as Contacts from 'expo-contacts';

type SectionListProps = {
  title: string;
  data: ContactProps[];
};

export default function Home() {
  const [name, setName] = useState('');
  const [contacts, setContacts] = useState<SectionListProps[]>([]);

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync({
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
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Não foi possível carregar os contatos');
    }
  }

  useEffect(() => {
    fetchContacts();
  });

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
        renderItem={({ item }) => <Contact contact={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}
