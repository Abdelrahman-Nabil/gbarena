import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, SectionList, TouchableOpacity } from 'react-native'
import { useGetMovies } from '../../hooks'
import { Movie } from '../../components'
import style from './style'
import dimensions, { MOVIE_HEIGHT, PAGING_THRESHOLD } from '../../common/constants'
import { translator } from '../../localization'

const DUMMY_EXAMPLE = [{
    title: 'Arcane',
    overview: 'Example with dummy data',
    poster_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
    release_date: '2021-12-15'
}]
export const Home = (props: any) => {

    const {data, loading, error, handler: getMovies} = useGetMovies() 
    const [page, setPage] = useState(1)
    const [myMovies, setMyMovies] = useState(DUMMY_EXAMPLE)// not sure if we want to send this to some API or not in this task

    useEffect(() => {
        getMovies(page)
    }, [page])

    const _renderItem = ({ item, section }) => {
        if(section.horizontal)
            return null
        return (
        <Movie {...item}
            width = {dimensions.width}    
        />
        )
    }

    const _onScroll = (e) => {
        if(e.nativeEvent.contentOffset.y > MOVIE_HEIGHT * PAGING_THRESHOLD * page){
            setPage(page + 1)
        }
    }

    const _renderLoading = () => {
        if(loading)
            return <ActivityIndicator size = 'large'/>
        return null
    }

    const _renderEmptyState = () => (
        <Text>{translator.translate('noMoviesToShow')}</Text>
    )
    const _renderMyMovie = ({ item, index }) => (
        <Movie {...item} 
            width = {dimensions.width * 0.28}
            containerStyle={{ marginRight: 8 }}
            titleStyle={{ fontSize: 16, marginVertical: 4 }}
            bodyStyle={{ fontSize: 14, marginVertical: 4 }}
            bodyRows={3}
        />
    )
    const _addMovie = () => {
        props.navigation.navigate('AddMovie', {

        })
    }
    return (
        <View style = {style.container}>
        <SectionList
            sections={[
                { title: translator.translate('myMovies'), data: myMovies, horizontal: true },
                { title: translator.translate('allMovies'), data }
            ]}
            keyExtractor={(item) => item.id}
            contentContainerStyle = {style.list}
            onScroll = {_onScroll}//avoiding onEndReached prop because it's buggy and unstable
            ListFooterComponent = {_renderLoading}            
            renderItem={_renderItem}
            renderSectionHeader={({section}) => (
                <>
                    <View style = {style.myMoviesHeader}>
                        <Text style = {style.sectionTitle}>{section.title}</Text>
                        {section.horizontal && 
                            <TouchableOpacity
                            activeOpacity = {0.8}
                            onPress = {_addMovie}
                            >
                                <Text  style = {style.sectionTitle}>+</Text>
                            </TouchableOpacity>
                        }
                    </View>
                     {section.horizontal ?
                     <FlatList
                        data = {section.data}
                        renderItem = {_renderMyMovie}
                        horizontal 
                        ListEmptyComponent = {_renderEmptyState}
                       
                    />
                     : null}
                </>
            )}
        />

        {/* <View style = {{ flex: 1 }}>
            <View style = {style.myMoviesHeader}>
                <Text style = {style.sectionTitle}>{translator.translate('myMovies')}</Text>
                <Text style = {style.sectionTitle}>+</Text>
            </View>
            <FlatList
                data = {data}
                renderItem = {_renderMyMovie}
                horizontal 
                ListEmptyComponent = {_renderEmptyState}
                contentContainerStyle = {{ height: '100%' }}
            />
        </View>

        <View style = {{ flex: 1 }}>
            <Text style = {style.sectionTitle}>{translator.translate('allMovies')}</Text>
            <FlatList
                data = {data}
                renderItem = {_renderItem}
                contentContainerStyle = {style.list}
                onScroll = {_onScroll}//avoiding onEndReached prop because it's buggy and unstable
                keyExtractor = {(item) => item.id}
                ListFooterComponent = {_renderLoading}
            /> 
        </View> */}
        </View>
        
    )
}

