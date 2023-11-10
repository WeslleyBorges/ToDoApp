import { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FA from '@expo/vector-icons/FontAwesome';

import Input from '../../components/Input';

import styles from './styles'

import backgroundImage from '../../../assets/images/login.jpg';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');

  const navigation = useNavigation()

  const signUp = async () => {
    console.log('Navigate to Home!')
    // if (password !== passwordConfirmation) {
    //   Alert.alert(
    //     'Deu beyblade',
    //     'A senha e sua confirmação precisam ser idênticas.',
    //   );
    //   return false;
    // }

    // try {
    //   await axios.post(`${REACT_APP_BASE_URL}/signup`, {name, email, password});
    //   clearInputs();
    //   setStageNew(false);
    //   Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso!');
    // } catch (e) {
    //   console.log(e);
    //   Alert.alert('Deu ruim', 'Houve algum erro ao se registrar');
    // }
  };

  const validations = [
    email && email.includes('@'),
    password && password.length > 5,
    name && name.trim().length > 2,
    password === passwordConfirmation
  ];

  const formIsValid = validations.reduce((t, a) => t && a);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <Text style={styles.title}>Tasks</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>
          Crie a sua conta
        </Text>
        <Input
          adornment={<FA name='user' size={20} color="#333"/>}
          placeholder="Nome"
          value={name}
          onChangeText={setName} />
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
        <Input
          adornment={<FA name='asterisk' size={20} color="#333"/>}
          placeholder="Confirme sua senha"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            secureTextEntry />
        <TouchableOpacity
          onPress={signUp}
          disabled={!formIsValid}>
          <View
            style={[styles.button, formIsValid ? {} : {backgroundColor: '#aaa'}]}>
            <Text style={styles.buttonText}>
              Registrar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>
          Já possui conta?
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
