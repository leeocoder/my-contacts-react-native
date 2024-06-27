import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Input } from '@/components/input';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';

export default function Home() {
  const [name, setName] = useState('');
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
    </View>
  );
}
