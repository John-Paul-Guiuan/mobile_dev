import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout () {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
          headerShown:false,
          tabBarIcon: () => (
              <FontAwesome name = "home" color= "black" size={30}/>
          )

      }}
      />
    <Tabs.Screen name="settings" options={{
      headerTitle: "Settings Page",
      tabBarIcon: () => (
        <FontAwesome name = "cogs" color="black" size={30} />
      )
    }} />
    </Tabs>
  )
}

