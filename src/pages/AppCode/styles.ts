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
    backgroundColor: "#ef2d3d",
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
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: "#FFFFFF",
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
    marginBottom: 36,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButtonText: {
    color: "#a1a1a1",
  },
  icon: {
    position: "absolute",
    right: 0,
    color: "#FFFFFF",
    backgroundColor: "#FFFFFF"
  },
  password: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF"
  },
  passwordInput: {
    width: "100%",
    color: "#FFFFFF",
    borderBottomColor: "#FFFFFF"
  },
  vendorType: {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },
});
