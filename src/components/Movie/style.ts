import  dimenions  from '../../common/constants'

export default (
    width = dimenions.width,
    containerStyle = {},
    imageStyle = {},
    titleStyle = {},
    bodyStyle = {},
    dateStyle = {}

    ) => {
    return {
        container: {
        width: width,
        marginBottom: 12,
        alignItems: 'center',
        ...containerStyle
    },
    image: {
        marginTop: 8,
        width: width, 
        height: ((width*0.94)*750)/500,
        ...imageStyle
    },
    title: {
        width: width,
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
        ...titleStyle
    },
    body: {
        width: width,
        marginVertical: 8,
        fontSize: 14,
        lineHeight: 22,
        ...bodyStyle
    },
    date: {
        width: width,
        fontSize: 10,
        fontWeight: 'bold',
        ...dateStyle
    }
    }
}