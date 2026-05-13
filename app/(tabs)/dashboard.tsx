import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="#0057B8"
        />

        <Text style={styles.backText}>
          Back
        </Text>
      </TouchableOpacity>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Student Dashboard
      </Text>

      <Text style={styles.sub}>
        BSIT Students List
      </Text>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/johnmark.jpg")}
          style={styles.image}
        />

        <Text style={styles.place}>
          Giancarlo Peterson Tongson
        </Text>

        <Text style={styles.location}>
          BSIT - 3rd Year
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/gian.png")}
          style={styles.image}
        />

        <Text style={styles.place}>
          John Mark Victoria
        </Text>

        <Text style={styles.location}>
          BSIT - 3rd Year
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/300?img=4",
          }}
          style={styles.image}
        />

        <Text style={styles.place}>
          Dario Dimatupingbakal
        </Text>

        <Text style={styles.location}>
          BSIT - 1rd Year
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    padding: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  backText: {
    marginLeft: 5,
    color: "#0057B8",
    fontSize: 16,
    fontWeight: "600",
  },

  greeting: {
    fontSize: 30,
    fontWeight: "bold",
  },

  sub: {
    color: "gray",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },

  place: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  location: {
    color: "gray",
    marginTop: 5,
  },
});