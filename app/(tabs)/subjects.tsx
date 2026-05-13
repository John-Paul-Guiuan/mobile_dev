import { StyleSheet, Text, View } from "react-native";

export default function SubjectsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subjects</Text>

      <View style={styles.card}>
        <Text style={styles.subject}>Mobile Development</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Web Development</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Database Management System</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Backend Development</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  subject: {
    fontSize: 18,
    fontWeight: "600",
  },
});