
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { fetchMovies } from "../../services/api";
import Loading from "../layouts/Loading";
import ShowList from "../lists/ShowList";
import SelectMovieType from "../forms/SelectMovieType";
import { Box } from "@gluestack-ui/themed";

const MoviesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies("movie", selectedCategory)
      .then((response) => {
        setMovies(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  const handleInputChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <Box style={styles.container}>
      <SelectMovieType
        onInputChange={handleInputChange}
        selectedCategory={selectedCategory}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ShowList navigation={navigation} shows={movies} />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
});

export default MoviesContainer;
