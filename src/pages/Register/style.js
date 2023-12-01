import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
  registerContainer: {
    flexGrow: 1,
    backgroundColor: theme.backgroundcolorDisplay.backgroundcolor,
    padding: '20@s',
  },
    registerContent: {
    flexGrow: 1,
    paddingBottom: '20@s', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconGoBack: {
    marginBottom: '20@s'
  },
  logo: {
    marginBottom: '30@s'
  },
  title: {
    fontFamily: theme.fonts.PoppinsMedium,
    fontSize: '24@s',
    color: theme.text.title,
    marginBottom: '20@s',
  },
  input: { marginBottom: '10@s' },
  titlePrivacyPolicy: {
    marginBottom: '10@s',
    fontFamily: theme.fonts.PoppinsSemiBold,
    fontSize: '14@s',
    color: theme.text.subtitle
  },
  privatePolicyBox: {
    marginRight: '20@s',
    marginBottom: '10@s'
  },
  privatePolicyNavigate: {
    marginLeft: '30@s',
    color: theme.text.actionText,
    fontFamily: theme.fonts.PoppinsMedium,
    fontSize: '14@s',
  },
  button: {
    height: '48@s',
    marginTop: '20@s'
  }
})