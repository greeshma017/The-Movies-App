import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { fetchSearchResults } from "../../services/api";
import ShowList from "../lists/ShowList";
import SearchForm from "../forms/Searchform";

const Search = ({ navigation }) => {
  const [category, setCategory] = useState("movie");
  const [keyword, setKeyword] = useState("");
  const [shows, setShows] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);

  const handleSearchCategoryChange = (value) => {
    setCategory(value);
  };

  const handleSearch = () => {
    setSearchStatus(true);
    fetchSearchResults(keyword, category)
      .then((response) => {
        setShows(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        category={category}
        handleSearchCategoryChange={handleSearchCategoryChange}
        handleSearch={handleSearch}
      />
      <View>
        {searchStatus ? (
          <ShowList shows={shows} navigation={navigation} />
        ) : (
          <Text style={styles.text}>Please initiate a search</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 140,
    fontSize: 22,
  },
});

export default Search;
