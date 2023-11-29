import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../../global/styles/theme';

export const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundcolorDisplay.backgroundcolor
    },
    logo: {
        width: '200@s',
        height: '200@s',
        resizeMode: 'contain',
    },
});