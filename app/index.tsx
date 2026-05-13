import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons name="book" size={60} color="white" />

        <Text style={styles.title}>BSIT Student Portal</Text>

        <Text style={styles.subtitle}>
          Manage students and course information
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/profile")}
      >
        <Text style={styles.buttonText}>Open Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/course-details")}
      >
        <Text style={styles.buttonText}>Course Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => router.push("/(tabs)/dashboard")}
      >
        <Text style={styles.startText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0057B8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 60,
  },

  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },

  button: {
    backgroundColor: "white",
    width: "90%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
  fontSize: 16,
  fontWeight: "600",
  color: "#0057B8",
},

startButton: {
  backgroundColor: "#001F54",
  width: "90%",
  padding: 18,
  borderRadius: 15,
  marginTop: 20,
  alignItems: "center",
},

startText: {
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
},
});