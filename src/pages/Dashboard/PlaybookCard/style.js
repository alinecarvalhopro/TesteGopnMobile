import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../../global/styles/theme';

export const styles = ScaledSheet.create({
    cardContainer: {
        minHeight: '200@s',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.sectionsBox.borderColor,
        marginTop: '30@s',
    },
    headerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: theme.sectionsBox.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '20@s',
    },
    button: {
        width: '80@s',
        height: '35@s',
    },
    title: {
        flex: 1,
        color: theme.text.subtitle,
        fontFamily: theme.fonts.PoppinsMedium,
        fontSize: '16@s',
        padding: '20@s',
    },
    text: {
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: '16@s',
        color: theme.card.text,
        padding: '20@s'
    }
})