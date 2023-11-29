import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        position: 'relative',
    },
    header: {
        height: 145,
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderColor: theme.header.borderColor,
        borderWidth: 1
    },
    sectionsBox: {
        padding: 30,
    },
    title: {
        fontFamily: theme.fonts.PoppinsSemiBold,
        fontSize: 25,
        color: theme.text.title
    },
    categoriesSection: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: theme.sectionsBox.borderColor,
        marginTop: 30,
        padding: 20,
    },
    subtitle: {
        color: theme.text.subtitle,
        fontFamily: theme.fonts.PoppinsMedium,
        fontSize: 16,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.sectionsBox.borderColor
    },
    addCategoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    addCategoryIconButton: {
        marginRight: 10
    },
    addCategoryTextButton: {
        color: theme.text.actionText,
        fontFamily: theme.fonts.PoppinsRegular,
        fontSize: 16,
    },
    floatButton: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: theme.button.backgroundcolor,
        position: 'absolute',
        bottom: 30,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.24,
          shadowRadius: 8,
          elevation: 10,
    }
})