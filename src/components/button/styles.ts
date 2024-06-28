import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    borderRadius: 12,
    backgroundColor: theme.colors.blue[800],
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.slate[50],
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
  },
});
