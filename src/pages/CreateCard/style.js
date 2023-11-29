import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    createCardContainer: {
        flex: 1,
        position: 'relative',
    },
    header: {
        height: 69,
        paddingHorizontal: 30,
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
        fontSize: 18,
        marginLeft: 10
    },
    formBox: {
        margin: 30,
    }
})