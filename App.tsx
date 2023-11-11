import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';

import db from './src/services/db';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato': require('./assets/fonts/Lato.ttf')
  });

  useEffect(() => {
    db.transaction(tx => tx.executeSql('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT, name TEXT, password TEXT, email TEXT)'))
  }, [])

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
