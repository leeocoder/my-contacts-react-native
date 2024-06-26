import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu';
import Home from '@/app/home';
import Loading from '@/components/loading';

import { StatusBar } from 'react-native';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_500Medium,
  });
  if (!isFontsLoaded) {
    return <Loading />;
  }
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <Home />
    </>
  );
}
