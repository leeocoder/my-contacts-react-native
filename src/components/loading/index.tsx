import { ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { theme } from '@/theme';

export default function Loading() {
  return (
    <ActivityIndicator
      color={theme.colors.blue[700]}
      style={styles.loading}
      size='large'
    />
  );
}
