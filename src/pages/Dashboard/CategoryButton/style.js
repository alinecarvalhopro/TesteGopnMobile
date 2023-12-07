import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../global/styles/theme';

export const styles = ScaledSheet.create({
    button: {
        minHeight: '39@s',
        justifyContent: 'center',
    },
    text: {
        color: theme.categoryButton.text,
        fontFamily: theme.fonts.PoppinsMedium,
        fontSize: '15@s'
    }
})