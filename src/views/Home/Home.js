import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import FilmCard from "../../components/FilmCard";

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((res) => setFilms(res));
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={films}
        renderItem={({ item }) => (
          <FilmCard
            film={item}
            title={item.title}
            releaseDate={item.release_date}
            coverUri={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
