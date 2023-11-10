import { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import FA from '@expo/vector-icons/FontAwesome';

import Input from '../../components/Input';

import styles from './styles'

import backgroundImage from '../../../assets/images/login.jpg';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const [name, setName] = useState('');
  // const [stageNew, setStageNew] = useState(false);

  // const clearInputs = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setPasswordConfirmation('');
  // };

//   const signup = async () => {
//     if (password !== passwordConfirmation) {
//       Alert.alert(
//         'Deu beyblade',
//         'A senha e sua confirmação precisam ser idênticas.',
//       );
//       return false;
//     }

//     try {
//       await axios.post(`${REACT_APP_BASE_URL}/signup`, {name, email, password});
//       clearInputs();
//       setStageNew(false);
//       Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso!');
//     } catch (e) {
//       console.log(e);
//       Alert.alert('Deu ruim', 'Houve algum erro ao se registrar');
//     }
//   };

//   const signin = async () => {
//     try {
//       const {data} = await axios.post(`${REACT_APP_BASE_URL}/signin`, {
//         email,
//         password,
//       });
//       AsyncStorage.setItem('userData', JSON.stringify(data));
//       axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
//       props.navigation.navigate('Home', data);
//     } catch (e) {
//       Alert.alert('Deu ruim', 'Houve algum erro ao realizar o login');
//     }
//   };

  // const validations = [
  //   email && email.includes('@'),
  //   password && password.length > 5,
  // ];

  // if (stageNew) {
  //   validations.push(name && name.trim().length > 2);
  //   validations.push(password === passwordConfirmation);
  // }

  // const formIsValid = validations.reduce((t, a) => t && a);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <Text style={styles.title}>Tasks</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>
          {/* {stageNew ? 'Crie a sua conta' : 'Informe suas credenciais'} */}
          Informe suas credenciais
        </Text>

        {/* {stageNew && (
          <AuthInput
            icon="user"
            placeholder="Nome"
            value={name}
            onChangeText={setName}></AuthInput>
        )} */}
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
        {/* {stageNew && (
          <Input
            icon="asterisk"
            placeholder="Confirme sua senha"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            secureTextEntry></Input>
        )} */}
        <TouchableOpacity
          onPress={() => console.log('Navigate to home!')}>
          <View
            style={styles.button}>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => console.log('Navigate to register!')}>
        <Text style={styles.buttonText}>
          Ainda não possui conta?
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
