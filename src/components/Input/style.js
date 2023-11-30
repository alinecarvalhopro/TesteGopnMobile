import {ScaledSheet} from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
    inputContainer: {
        position: 'relative'
    },
    label: {
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: '14@s',
        color: theme.input.label
    },
    textInput: {
        height: '50@s',
        marginTop: '10@s',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: '16@s',
    },
    errorMessage: {
        marginVertical: 5,
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: '12@s',
        textAlign: 'left',
        color: theme.input.error
    },
    eyeMask: {
        position: 'absolute',
        right: 16,
        top: 40
    }
});