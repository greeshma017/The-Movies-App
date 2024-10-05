import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { fetchMovies } from '../../services/api';
import Loading from "../layouts/Loading";
import MoviesList from "../lists/MovieList";
import SelectMovieType from "../forms/SelectMovieType";

const Movies = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('now_playing');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        console.log("selectedCategory" +selectedCategory);
        fetchMovies("movie", selectedCategory)
        .then((response) => {
            console.log("response" +response);
            setMovies(response.data.results);
            setIsLoading(false);
        })
        .catch( error => {
            console.error(error);
            setIsLoading(false);
        })
    }, [selectedCategory]);

    const handleInputChange = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    };
    console.log("movies" +movies);
    

    return (
        <View style={styles.container}>
            <SelectMovieType onInputChange={handleInputChange} selectedCategory={selectedCategory} />
            {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white'
    }
});

export default Movies;