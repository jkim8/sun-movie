import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;

interface PosterProps {
  path: String;
}

const Poster: React.FC<PosterProps> = ({ path }) => (
  <Image source={{ uri: makeImgPath(path) }} />
);

export default Poster;
