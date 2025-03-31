import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import videos from '../dummy/videos.json';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: videos || [], // Ensure default empty array if videos.json is empty
      searchText: '',
    };
  }

  // Update search results
  handleSearch = (text) => {
    const trimmedText = text.trim();
    this.setState({ searchText: text });

    if (trimmedText.length > 0) {
      const newData = videos.filter((item) =>
        item.title?.toLowerCase().includes(trimmedText.toLowerCase())
      );
      this.setState({ filteredData: newData });
    } else {
      this.setState({ filteredData: videos });
    }
  };

  render() {
    const { filteredData, searchText } = this.state;

    return (
      <View testID="search-container" style={styles.container}>
        {/* Search Input */}
        <TextInput
          testID="search-input"
          style={styles.searchInput}
          placeholder="Search videos..."
          value={searchText}
          onChangeText={this.handleSearch}
        />

        {/* Display "Videos Not Found" if no results */}
        {filteredData.length === 0 ? (
          <Text testID="not-found-text" style={styles.notFoundText}>Videos not found</Text>
        ) : (
          <View testID="video-list" style={styles.listContainer}>
            {filteredData.map((item, index) => (
              <View testID={`video-item-${index}`} key={index.toString()} style={styles.itemContainer}>
                <Text style={styles.item}>{item.title}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }
}

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

export default SearchHeader;
