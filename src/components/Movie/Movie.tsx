import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styler from './style'
import dimenions, { MOVIE_IMAGE_URL } from '../../common/constants'

interface MovieProps {
    title: string
    overview: string 
    release_date: string
    poster_path: string
    width?: number
    containerStyle?: object
    imageStyle?: object
    titleStyle?: object
    bodyStyle?: object
    dateStyle?: object
    bodyRows?: number

}
export const Movie = (props: MovieProps) => {

    const { title, overview, release_date, poster_path, width, containerStyle, 
        imageStyle, titleStyle, bodyStyle, dateStyle, bodyRows } = props

    const [source, setSource] = useState({uri: MOVIE_IMAGE_URL + poster_path})

    let style = styler(width, containerStyle, 
        imageStyle, titleStyle, bodyStyle, dateStyle)
    return (
        <View style = {style.container}>
            <Image
                source = {source}
                onError = {() => {
                    console.log('error')
                   setSource(require('../../assets/movie_placeholder.png'))
                }}
                style = {style.image}
            />
            <Text style = {style.title}>
                {title}
            </Text>
            <Text style = {style.date}>
                {release_date}
            </Text>
            <Text style = {style.body} numberOfLines = {bodyRows || 4}>
                {overview}
            </Text>
        </View>
    )
    
}