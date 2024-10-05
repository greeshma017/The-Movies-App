import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { Box, Center, Text, Image } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const ShowMovieDetailsContainer = ({ navigation, route }) => {
  const { title, image, popularity, releaseDate, overview } = route.params;

  return (
    <Box width="100%" px={10}>
      <Center>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          alt="posture image"
          style={styles.image}
          accessibilityLabel={`Poster for ${overview}`}
        />
        <Text style={styles.overview}>{overview}</Text>
        <Text style={styles.sub_wrap}>
          Popularity: {popularity}| Release Date: {new Date(releaseDate).toLocaleDateString()}
        </Text>
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 22,
  },
  image: {
    marginVertical: 20,
    width: "65%",
    height: "55%",
  },
  overview: {
    marginVertical: 15,
    marginHorizontal: 20,
    fontSize: 15,
  },
  sub_wrap: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ShowMovieDetailsContainer;
