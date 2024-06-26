import { TextInput, TextInputProps, View, ViewProps } from 'react-native';

import { styles } from './styles';
import { theme } from '@/theme';
import { Children } from 'react';

function Input({ children }: ViewProps) {
  return <View style={styles.container}>{Children}</View>;
}

function Field({ ...rest }: TextInputProps) {
  return <TextInput {...rest} />;
}

Input.Field = Field;

export { Input };
