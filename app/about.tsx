import{View, Text,StyleSheet} from "react-native"
const About = () =>
{
    return (
    <View style = {styles2.container}> 
        <Text >
            This is my about Page!
        </Text>
    </View>
    )
};

const styles2 = StyleSheet.create( {
    container: {
        flex : 1 ,
        alignItems: "center" ,
        justifyContent: "center",
    },
    
});
export default About