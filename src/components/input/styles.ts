import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.slate[100],
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    padding: 12,
    gap: 7,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: theme.colors.slate[800],
    fontFamily: theme.fontFamily.medium,
  },
});
