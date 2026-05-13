import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.avatar}
      />

      <Text style={styles.name}>
        Prof. John Paul Guiuan
      </Text>

      <Text style={styles.info}>
        BSIT Department
      </Text>

      <Text style={styles.info}>
        Mobile Application Development
      </Text>

      <Text style={styles.info}>
        College Instructor
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6FA",
    padding: 20,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
  },

  info: {
    fontSize: 18,
    color: "gray",
    marginTop: 5,
  },
});