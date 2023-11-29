import {ScaledSheet} from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
    loginContainer: {
      flex: 1,
      backgroundColor: theme.backgroundcolorDisplay.backgroundcolor,
      padding: '20@s',
      justifyContent: 'center',
    },
    logo: {
      alignSelf: 'center',
      marginBottom: '30@s',
    },
    title: {
      fontFamily: theme.fonts.PoppinsRegular,
      fontSize: '24@s',
      color: theme.text.title,
      marginBottom: '30@s',
      textAlign: 'center',
    },
    input: {
      marginBottom: '20@s',
    },
    textDetail: {
      marginVertical: '20@s',
      textAlign: 'center',
    },
    button: {
      height: '48@s',
    },
  });