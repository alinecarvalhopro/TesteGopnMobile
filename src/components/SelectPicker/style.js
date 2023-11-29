import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    selectPickerContainer: {},
    label: {
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: 14,
        color: theme.input.label,
        marginBottom: 10,
    },
    selectPicker: {
        height: 50,
        borderColor: theme.input.borderColor,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
});