import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 16,
    backgroundColor: "#cccccc",
  },
  coverImg: {
    width: "100%",
    height: 240,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  nameRow: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "600" },
  releaseYr: { fontSize: 14 },
});

export default styles;
