import React, { useState } from 'react'
import { getMovies } from '../api'
import { translator } from '../localization'

export const useGetMovies = () => {
    const [data, setData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handler = (page: number) => {
        console.log('page', page)
        if((page > 1) && (page > totalPages))
            return
        setLoading(true)
        setError('')
        getMovies(page)
        .then((res: any) => {
            if(res.data.results && res.data.results.length){
                setData(
                    [...data, ...res.data.results]
                    )
                setTotalPages(res.data.total_pages)
                setError('')
            } else {
                setError(res.data.status_message || translator.translate('somethingWentWrong'))
            }
            setLoading(false)

        })
        .catch((error) => {
            setLoading(false)
            setError(error.data.status_message || translator.translate('somethingWentWrong'))
        })
    }
    return {
        data,
        error,
        loading,
        handler
    }
}