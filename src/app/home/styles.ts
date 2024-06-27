import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 132,
    backgroundColor: theme.colors.blue[800],
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    zIndex: 1,
  },
  input: {
    marginBottom: -27,
  },
  section: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
    backgroundColor: theme.colors.blue[800],
    width: 34,
    height: 34,
    borderRadius: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: theme.colors.slate[100],
    marginTop: 32,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 64,
    gap: 12,
  },
});
