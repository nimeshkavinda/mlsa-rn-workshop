import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const DetailsPage = ({ route }) => {
  const {
    title,
    original_title_romanised,
    original_title,
    image,
    movie_banner,
    description,
    rt_score,
  } = route.params.film;

  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: movie_banner }}
        style={styles.coverImg}
        resizeMode="cover"
      />
      <View style={styles.headerWrapper}>
        <Image
          source={{ uri: image }}
          style={styles.bannerImg}
          resizeMode="cover"
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text>{original_title}</Text>
          <Text>{original_title_romanised}</Text>
          <Text style={styles.score}>{`Score: ${rt_score}`}</Text>
        </View>
      </View>
      <Text style={styles.desc} numberOfLines={8}>
        {description}
      </Text>
    </View>
  );
};

export default DetailsPage;
