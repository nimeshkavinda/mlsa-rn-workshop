import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const FilmCard = ({ title, coverUri, releaseDate, film }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() =>
        navigation.navigate("DetailsPage", {
          film,
        })
      }
    >
      <Image
        style={styles.coverImg}
        source={{
          uri: coverUri,
        }}
        resizeMode="cover"
      />
      <View style={styles.nameRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseYr}>{releaseDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilmCard;
