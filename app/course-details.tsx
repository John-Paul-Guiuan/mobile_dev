import { StyleSheet, Text, View } from "react-native";

export default function CourseDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Course</Text>
        <Text style={styles.value}>Mobile Application Development</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Instructor</Text>
        <Text style={styles.value}>Prof. John Paul Guiuan</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Schedule</Text>
        <Text style={styles.value}>Monday 1PM - 4PM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Room</Text>
        <Text style={styles.value}>Laboratory 2</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Unit</Text>
        <Text style={styles.value}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
    color: "#800000"
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    color: "gray",
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },
});