import { StyleSheet } from "react-native";

export const SignInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef2d3d",
  },
  header: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "black",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    color: "#FFFFFF"
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: "#FFFFFF"
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: "#FFFFFF",
    borderBottomColor: "#FFFFFF"
  },
  button: {
    backgroundColor: "#ef2d3d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerButtonText: {
    color: "#a1a1a1",
  },
});
