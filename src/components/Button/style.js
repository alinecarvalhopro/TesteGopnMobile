import {ScaledSheet} from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
    button: {
        borderRadius: 60,
        backgroundColor: theme.button.backgroundcolor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabledButton: {
        borderRadius: 60,
        backgroundColor: theme.button.disabledButtonBackgroundcolor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: theme.button.text,
        fontFamily: theme.fonts.PoppinsMedium,
        fontSize: '15@s',
    }
})