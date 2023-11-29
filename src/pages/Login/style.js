import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: theme.backgroundcolorDisplay.backgroundcolor,
        padding: 20,
        justifyContent: 'center',
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 30
    },
    title: {
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: 24,
        color: theme.text.title,
        marginBottom: 30,
        textAlign: 'center'
    },
    textDetail: {
        marginTop: 30,
        textAlign: 'center'
    }
})