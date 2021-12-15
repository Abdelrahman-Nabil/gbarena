import dimensions from '../../common/constants'

export default {
    container: {
        width: (dimensions.width*0.94),
        alignSelf: 'center',
        flex: 1
    },
    list: {
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 16
    },
    myMoviesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%'
    }
}