import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import Login from './src/screens/Login';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato': require('./assets/fonts/Lato.ttf'),
  });

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
