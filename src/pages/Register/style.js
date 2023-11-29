import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: theme.backgroundcolorDisplay.backgroundcolor,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconGoBack: {
    marginBottom: 20
  },
  logo: {
    marginBottom: 30
  },
  title: {
    fontFamily: theme.fonts.PoppinsMedium,
    fontSize: 24,
    color: theme.text.title,
    marginBottom: 30,
  },
  titlePrivacyPolicy: {
    marginBottom: 10,
    fontFamily: theme.fonts.PoppinsSemiBold,
    fontSize: 14,
    color: theme.text.subtitle
  },
  privatePolicyBox: {
    marginRight: 20,
    marginBottom: 10
  },
  privatePolicyNavigate: {
    marginLeft: 30,
    color: theme.text.actionText,
    fontFamily: theme.fonts.PoppinsMedium,
    fontSize: 14,
  }
})