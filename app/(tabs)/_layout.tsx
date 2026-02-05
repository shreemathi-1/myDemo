import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
 const TabsLayout = () =>{
   return(
      <Tabs screenOptions= {{
         tabBarActiveTintColor : "green",
         tabBarInactiveTintColor : "red",
         tabBarStyle : {
               backgroundColor : "#6211CB",
               borderTopWidth : 1,
               borderTopColor : "yellow",
               height : 70,
               paddingTop :10,
               paddingBottom : 20,
         },
         tabBarLabelStyle : {
            fontSize : 15,
            fontWeight: "200",
         },
         headerShown : false,

      }}>
            <Tabs.Screen name = "index"
            options = {{
                     title: "Todo",
                     tabBarIcon: ({color,size}) =>(                      
                        <Ionicons name = "flash-outline" size={size} color = {color}/> 
              ),     
            }} 
      />

      <Tabs.Screen name = "settings"
                  options = {{
                     title: "Settings",
                     tabBarIcon : ({color,size}) => (
                           <Ionicons name = "settings" size = {size} color = {color} /> 
                     )
                     
                              }} 
                              />
                  
      </Tabs>
   );
}
export default TabsLayout;