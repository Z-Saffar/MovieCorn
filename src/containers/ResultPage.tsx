import * as React from 'react';
import MovieCard from "../components/MovieCard/MovieCard";
import { getAbsoluteImageURL } from "../helper";
import { useQuery } from "../hooks/useQuery";
import useLazySearchMovie from "../hooks/useSearchMovie";
import Layout from "./Layout";

const ResultPage = () => {
    const [search, movies] = useLazySearchMovie()
    const query = useQuery();
    const searchText = query.get('q') ?? "";
    React.useEffect(() => {
        search(searchText);
    }, [searchText, search]);
    console.log('data', movies)
    return (<Layout withSearchBox={true}>
        {movies?.map((item) => {
            return <MovieCard description={item.overview}
                imageUrl={getAbsoluteImageURL(item.poster_path, 500)}
                rank={item.vote_average}
                rate={5}
                title={item.title}
                year={item.release_date}
                key={item.id}
            />
        })}
    </Layout>)
}
export default ResultPage