import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView``;

const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 10px auto;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const onChangeText = () => {
    (text: string) => setQuery(text);
  };
  return (
    <Container>
      <SearchBar
        placeholderTextColor="grey"
        placeholder="Search for Movie or TV Show"
        returnKeyType="search"
        onChangeText={onChangeText}
      ></SearchBar>
    </Container>
  );
};

export default Search;
