import { StyleSheet } from "react-native";

export const bodyStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf",
    alignItems: "center",
    justifyContent: "center"
  }
});
export const inputStyle = StyleSheet.create({
  inputContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: "80%",
    marginBottom: 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: "3.333%",
    paddingRight: "3.333%"
  },

  textContainer: {
    overflow: "scroll",
    position: "absolute",
    top: 2,
    left: 18,
    backgroundColor: "white",
    zIndex: 2
  }
});

export const numStyle = StyleSheet.create({
  numContainer: {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    position: "relative",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 2,
    paddingTop: 4,
    paddingBottom: 4
  },
  numFont: {
    fontSize: 30,
    paddingLeft: 5,
    width: "100%"
  }
});
