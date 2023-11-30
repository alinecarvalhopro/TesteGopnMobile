import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
    createCardContainer: {
        flex: 1,
        position: 'relative',
    },
    header: {
        height: '69@s',
        paddingHorizontal: '30@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: theme.header.borderColor,
        borderBottomWidth: 1
    },
    titleIconBox: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    titlePage: {
        color: theme.text.subtitle,
        fontSize: '18@s',
        marginLeft: '10@s'
    },
    formBox: {
        margin: '30@s',
    },
    button: {
        width: '80@s',
        height: '30@s'
    },
    input: {
        marginBottom: '20@s'
    },
    textArea: {
        marginTop: '20@s'
    }
})