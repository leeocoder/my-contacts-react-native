import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { TouchableOpacityProps } from 'react-native-gesture-handler';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
