import { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FA from '@expo/vector-icons/FontAwesome';

import Input from '../../components/Input';

import AuthService from '../../services/auth.service';

import styles from './styles'

import backgroundImage from '../../../assets/images/login.jpg';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const signIn = () => {
    AuthService.login('dsdsd', 'dsdsds')
      .then(() => navigation.navigate('Home'))
      .catch(() => Alert.alert('Deu ruim', 'Houve algum erro ao realizar o login'))
    console.log('Navigate to Home!')
  };

  const validations = [
    email && email.includes('@'),
    password && password.length > 5,
  ];

  const formIsValid = validations.reduce((t, a) => t && a);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <Text style={styles.title}>Tasks</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>
          Informe suas credenciais
        </Text>
        <Input
          adornment={<FA name='at' size={20} color="#333"/>}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail} />
        <Input
          adornment={<FA name='lock' size={20} color="#333"/>}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry></Input>
        <TouchableOpacity
          onPress={signIn} 
          disabled={!formIsValid}>
          <View
            style={[styles.button, formIsValid ? {} : {backgroundColor: '#aaa'}]}>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>
          Ainda não possui conta?
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
