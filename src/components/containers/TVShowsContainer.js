import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { fetchMovies } from "../../services/api";
import Loading from "../layouts/Loading";
import ShowList from "../lists/ShowList";
import SelectTVShowType from "../forms/SelectTVShowType";
import { Box } from "@gluestack-ui/themed";

const Movies = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies("tv", selectedCategory)
      .then((response) => {
        setTvShows(response.data.results);
        console.log("response" + response.data.results);
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
      <SelectTVShowType
        onInputChange={handleInputChange}
        selectedCategory={selectedCategory}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ShowList navigation={navigation} shows={tvShows} />
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

export default Movies;
