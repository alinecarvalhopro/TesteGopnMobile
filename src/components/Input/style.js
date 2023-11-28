import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative'
    },
    label: {
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: 14,
        color: theme.input.label
    },
    textInput: {
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
    },
    errorMessage: {
        marginVertical: 5,
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: 12,
        textAlign: 'left',
        color: theme.input.error
    },
    eyeMask: {
        position: 'absolute',
        right: 16,
        top: 40
    }
});