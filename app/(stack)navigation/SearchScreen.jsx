import React, { Component } from "react";
import { View, TextInput, Text, FlatList ,StyleSheet} from "react-native";
const videos = require("../dummy/videos.json");


class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleSearch = (text) => {
    this.setState({ searchTerm: text });
  };

  getFilteredVideos = () => {
    const { searchTerm } = this.state;
    return videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  render() {
    const filteredVideos = this.getFilteredVideos();

    return (
      <View testID="search-container">
        <TextInput
          testID="search-input"
          placeholder="Search videos..."
          value={this.state.searchTerm}
          onChangeText={this.handleSearch}
        />
        {filteredVideos.length > 0 ? (
          <FlatList
            data={filteredVideos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.title}</Text>}
          />
        ) : (
          <Text testID="not-found-text">Videos not found</Text>
        )}
      </View>
    );
  }
}

export default SearchScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginBottom: 5,
    overflow: 'hidden',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderRadius: 15,
  },
  notFoundText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#c52026',
    marginTop: 20,
    borderRadius: 15,
  },
});


