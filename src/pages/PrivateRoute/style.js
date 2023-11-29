import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundcolorDisplay.backgroundcolor
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});