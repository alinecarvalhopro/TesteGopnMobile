const colorsApp = {
    brand: '#476EE6',

    black: '#000000',
    greyScale80: '#787486',
    greyScale60: '#A0A0A0',
    greyScale40: '#D7D7D7',
    greyScale20: '#D8D8D8',
    white: '#FFFFFF',

    error: '#FF0000',
}

export const theme = {

    backgroundcolorDisplay: {
        backgroundcolor: colorsApp.white,
    },

    fonts: {
        PoppinsRegular: 'Poppins-Regular',
        PoppinsMedium: 'Poppins-Medium',
        PoppinsSemiBold: 'Poppins-SemiBold'
    },

    text: {
        title: colorsApp.brand,
        textDetail: colorsApp.greyScale80,
        subtitle: colorsApp.black,
        actionText: colorsApp.brand,
    },

    button: {
        backgroundcolor: colorsApp.brand,
        disabledButtonBackgroundcolor: colorsApp.greyScale80,
        text: colorsApp.white
    },

    input: {
        label: colorsApp.black,
        borderColor: colorsApp.greyScale40,
        placeholder: colorsApp.greyScale60,
        error: colorsApp.error,
        eyeMask: colorsApp.greyScale80,
    },

    checkBox: {
        backgroundcolor: colorsApp.brand,
    },

    header: {
        borderColor: colorsApp.greyScale20,
        icon: colorsApp.brand,
    },

    drawer: {
        icon: colorsApp.brand,
        options: colorsApp.brand,
        backgroundcolor: colorsApp.white,
    },

    sectionsBox: {
        borderColor: colorsApp.greyScale60
    },

    card: {
        text: colorsApp.black
    }
}