import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundcolorDisplay.backgroundcolor
    },
    text: {
        color: theme.registredSuccessfullyPage.message,
        fontFamily: theme.fonts.PoppinsSemiBold,
        fontSize: '25@s',
        alignSelf: 'center',
        margin: '20@s',
        textAlign: 'center'
    }
});