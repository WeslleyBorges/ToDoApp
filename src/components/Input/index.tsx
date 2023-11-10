import { ReactNode } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import styles from './styles'

export default ({adornment, style, ...rest}: InputProps) => (
  <View style={[styles.container, style]}>
    {adornment}
    <TextInput {...rest} style={styles.input}></TextInput>
  </View>
)
  
interface InputProps extends TextInputProps {
  adornment: ReactNode
}