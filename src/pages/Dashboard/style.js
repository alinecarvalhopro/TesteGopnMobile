import {ScaledSheet} from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
    dashboardContainer: {
        flexGrow: 1,
        position: 'relative',
    },
    header: {
        height: '145@s',
        padding: '20@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '20@s',
        borderColor: theme.header.borderColor,
        borderWidth: 1,
    },
    sectionsBox: {
        padding: '20@s',
    },
    title: {
        fontFamily: theme.fonts.PoppinsSemiBold,
        fontSize: 25,
        color: theme.text.title
    },
    categoriesSection: {
        borderRadius: '20@s',
        borderWidth: 1,
        borderColor: theme.sectionsBox.borderColor,
        marginTop: '30@s',
        padding: '20@s',
    },
    subtitle: {
        color: theme.text.subtitle,
        fontFamily: theme.fonts.PoppinsMedium,
        fontSize: '16@s',
        paddingBottom: '20@s',
        borderBottomWidth: 1,
        borderBottomColor: theme.sectionsBox.borderColor
    },
    addCategoryButton: {
        height: '39@s',
        flexDirection: 'row',
        alignItems: 'center',
    },
    addCategoryIconButton: {
        marginRight: '5@s'
    },
    addCategoryTextButton: {
        color: theme.text.actionText,
        fontFamily: theme.fonts.PoppinsMedium,
        fontSize: '16@s',
    },
    floatButton: {
        width: '60@s',
        height: '60@s',
        borderRadius: 100,
        backgroundColor: theme.button.backgroundcolor,
        position: 'absolute',
        zIndex: 10,
        // bottom: '20@s',
        // right: '20@s',
        right: '20@s',
        top: '155@s',
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