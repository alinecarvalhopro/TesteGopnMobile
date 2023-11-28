import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.button.backgroundcolor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabledButton: {
        backgroundColor: theme.button.backgroundcolor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: theme.button.text
    }
})