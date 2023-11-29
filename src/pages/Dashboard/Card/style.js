import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
    cardContainer: {
        height: 250,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: theme.sectionsBox.borderColor,
        marginTop: 30,
    },
    headerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: theme.sectionsBox.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    title: {
        color: theme.text.subtitle,
        fontFamily: theme.fonts.PoppinsMedium,
        fontSize: 16,
        padding: 20,
    },
    text: {
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: 16,
        color: theme.card.text,
        padding: 20
    }
})