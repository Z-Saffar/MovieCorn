import { apis } from 'api/axiosClient'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetails } from 'types/types';
type MovieDetailParam = {
    movieId: string;
};
export function useMovieDetail() {
    const [data, setData] = useState<MovieDetails>()
    const [loading, setLoading] = useState<boolean>(true)
    const param = useParams<MovieDetailParam>()

    useEffect(() => {
        const apiCall = async () => {
            const { data } = await apis.getMovieDetails(Number(param.movieId))
            setData(data)
            setLoading(false)
        }
        apiCall()
    }, [param.movieId])

    return { loading, data }
}
