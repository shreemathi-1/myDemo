import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() 
{
  return (
    <View
      style={styles.container}
    >
      <Text>Hello World!</Text>
      <Text style = {styles.content}> Hiii ll me the exact that apart next.</Text>
      
      <Text > Learn React Native</Text>
      
    </View>

  );
}
const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "" ,
        
      },
    content: {
      fontSize: 40,
    }  
    });