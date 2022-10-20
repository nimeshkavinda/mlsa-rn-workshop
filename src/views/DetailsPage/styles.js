import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  coverImg: {
    width: "100%",
    height: 220,
  },
  bannerImg: {
    width: 140,
    height: 220,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 8,
    marginTop: -120,
    marginLeft: 10,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 26,
  },
  titleWrapper: {
    marginLeft: 20,
    marginVertical: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: "500",
  },
  score: { fontSize: 14, fontWeight: "600" },
  desc: { fontSize: 21, marginHorizontal: 20 },
});

export default styles;
