import { Image, StyleSheet, Text, View } from "react-native";

export default function Index () {
return(
  <View style={styles.container}>
    <Image source = {require("../../assets/images/react-logo.png")} 
    style={styles.image} >
    
    </Image>
  


  <Text style={styles.sampleText} >
    Welcome to my application
  </Text>

  </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f55d5d",
    padding: 20,
  },
  sampleText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
    resizeMode: "contain",
  }
})