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
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.slate[200],
    marginVertical: 12,
  },
  bottomSheet: {
    backgroundColor: 'transparent',
  },
  details: {
    flex: 1,
    backgroundColor: theme.colors.slate[50],
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    paddingTop: 64,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  avatar: {
    marginBottom: -50,
    zIndex: 1,
    alignSelf: 'center',
  },
  detailsName: {
    color: theme.colors.slate[700],
    fontSize: 32,
    fontFamily: theme.fontFamily.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phoneNumber: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    color: theme.colors.slate[400],
    marginBottom: 24,
  },
  phone: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
  },
});
