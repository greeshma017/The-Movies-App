import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Image, Text, Box } from "@gluestack-ui/themed";

const ShowList = ({ navigation, shows }) => {
  return (
    <Box style={styles.wrap}>
    <FlatList
      data={shows}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
            alt="posture image"
          />
          <Box style={styles.sub_wrap}>
            <Text style={styles.title}>
              {item.title ? item.title : item.name}
            </Text>
            <Text style={styles.popularity}>Popularity: {item.popularity}</Text>
            <Text style={styles.release}>
              Release Date: {item.release_date}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("ShowMovieDetailsScreen", {
                  image: item.poster_path,
                  title: item.title ? item.title : item.name,
                  popularity: item.popularity,
                  releaseDate: item.release_date,
                  overview: item.overview,
                })
              }
            >
              <Text style={styles.buttonText}>More Details</Text>
            </TouchableOpacity>
          </Box>
        </Card>
      )}
    />
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  sub_wrap: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  popularity: {
    fontSize: 14,
    color: "grey",
  },
  release: {
    fontSize: 14,
    color: "grey",
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#00bcd5",
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ShowList;
