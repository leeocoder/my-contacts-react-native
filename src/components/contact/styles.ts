import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 5,
  },
  name: {
    color: theme.colors.slate[800],
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
    fontWeight: 'bold',
  },
});
