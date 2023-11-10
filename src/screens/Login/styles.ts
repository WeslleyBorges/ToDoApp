import {StyleSheet} from 'react-native'

import theme from '../../theme'

export default StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: theme.fontFamily,
      color: theme.colors.secondary,
      fontSize: 70,
      marginBottom: 10,
    },
    subtitle: {
      fontFamily: theme.fontFamily,
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 10,
    },
    formContainer: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: 20,
      width: '90%',
    },
    button: {
      backgroundColor: '#080',
      marginTop: 10,
      padding: 10,
      alignItems: 'center',
      borderRadius: 7,
    },
    buttonText: {
      fontFamily: theme.fontFamily,
      color: 'white',
      fontSize: 20,
    }
  });
