import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
  selectPickerContainer: {},
  label: {
    fontFamily: theme.fonts.PoppinsRegular,
    fontSize: '14@s', 
    color: theme.input.label,
    marginBottom: '10@s', 
  },
  selectPicker: {
    height: '50@s',
    borderColor: theme.input.borderColor,
    borderWidth: 1,
    borderRadius: '12@s', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
